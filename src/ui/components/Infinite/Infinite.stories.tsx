import { Infinite, Stack } from "@deskpro/deskpro-ui";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import * as fc from "fast-check";
import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ObservedDiv } from "./ObservedDiv";

type InfiniteScrollStatus =
  | "loading" // use when query is loading
  | "hasNextPage" //use when more pages available to fetch
  | "end" // use when no more pages to fetch
  | "end-with-force"; // same as end but adds a button that will fetch more to get any new items that have been added

const RelativeContainer = styled.div`
  height: 1400px;
  width: 500px;
  position: relative;
  border: 1px solid black;
  overflow: auto;
`;

const Container = styled.div`
  height: 500px;
  width: 500px;
  border: 1px solid black;
  overflow: hidden;
`;

export default {
  title: "Core/Infinite",
  decorators: [withKnobs],
};

export const ObserverDiv = () => {
  const [state, setState] = useState(0);
  const handleIntersect = useCallback(() => {
    setState((prev) => prev + 1);
  }, []);

  const reverse = boolean("reverse", true);

  return (
    <RelativeContainer>
      Scroll the {reverse ? "top" : "bottom"} in and out of view. Observe count:{" "}
      {state}
      <ObservedDiv onIntersect={handleIntersect} />
    </RelativeContainer>
  );
};

const messagesArbitary = fc
  .tuple(
    fc.constantFrom("Tom Nook", "Chirs P", "Chris G", "Chris N"),
    fc.string({ minLength: 500, maxLength: 500 })
  )
  .chain(([name, message]) =>
    fc.record({
      id: fc.uuid(),
      name: fc.constant(name),
      email: fc.constant(`${name.toLowerCase().replace(" ", "_")}@deskpro.com`),
      message: fc.constant(message),
    })
  );

export const Example = () => {
  const [state, setState] = useState(() =>
    fc.sample(messagesArbitary, { numRuns: 4, seed: 2324 })
  );
  const [infiniteState, setInfiniteState] = useState<
    "loading" | "hasNextPage" | "end" | "end-with-force"
  >("hasNextPage");

  const handleFetchMore = useCallback(() => {
    setInfiniteState("loading");
    setTimeout(() => {
      setState((prev) => [
        ...prev,
        ...fc.sample(messagesArbitary, { numRuns: 4 }),
      ]);
      if (state.length > 15) {
        setInfiniteState("end-with-force");
      } else {
        setInfiniteState("hasNextPage");
      }
    }, 1000);
  }, [state.length]);

  const handleNewMessage = useCallback(() => {
    setTimeout(() => {
      setState((prev) => [
        ...fc.sample(messagesArbitary, { numRuns: 1 }),
        ...prev,
      ]);
    }, 500);
  }, []);

  return (
    <>
      <button onClick={handleNewMessage}>submit message</button>
      <Container>
        <Infinite
          onFetchMore={handleFetchMore}
          status={infiniteState}
          fetchMoreText={"Fetch more"}
          autoscrollText={"Jump to start"}
          anchor
        >
          <Stack vertical align="stretch">
            {state.map((message) => (
              <div style={{ overflow: "hidden" }} key={message.id}>
                <h1>Name: {message.name}</h1>
                <p>Email: {message.email}</p>
                <p> {message.message}</p>
              </div>
            ))}
          </Stack>
        </Infinite>
      </Container>
    </>
  );
};

export const ExampleReversed = () => {
  const [state, setState] = useState(() =>
    fc.sample(messagesArbitary, { numRuns: 4, seed: 2324 })
  );
  const [infiniteState, setInfiniteState] = useState<
    "loading" | "hasNextPage" | "end" | "end-with-force"
  >("hasNextPage");

  const handleFetchMore = useCallback(() => {
    setInfiniteState("loading");
    setTimeout(() => {
      setState((prev) => [
        ...fc.sample(messagesArbitary, { numRuns: 4 }),
        ...prev,
      ]);
      if (state.length > 15) {
        setInfiniteState("end-with-force");
      } else {
        setInfiniteState("hasNextPage");
      }
    }, 1000);
  }, [state.length]);

  const handleNewMessage = useCallback(() => {
    setTimeout(() => {
      setState((prev) => [
        ...prev,
        ...fc.sample(messagesArbitary, { numRuns: 1 }),
      ]);
    }, 500);
  }, []);

  return (
    <>
      <button onClick={handleNewMessage}>submit message</button>
      <Container>
        <Infinite
          onFetchMore={handleFetchMore}
          status={infiniteState}
          fetchMoreText={"Fetch more"}
          autoscrollText={"Jump to start"}
          reverse
          anchor
        >
          <Stack vertical align="stretch" reverse padding={10} grow>
            {state.map((message) => (
              <div style={{ overflow: "hidden" }} key={message.id}>
                <h1>Name: {message.name}</h1>
                <p>Email: {message.email}</p>
                <p> {message.message}</p>
              </div>
            ))}
          </Stack>
        </Infinite>
      </Container>
    </>
  );
};

export const ExampleReversedWithOffset = () => {
  const [state, setState] = useState(() =>
    fc.sample(messagesArbitary, { numRuns: 4, seed: 2324 })
  );
  const [infiniteState, setInfiniteState] = useState<
    "loading" | "hasNextPage" | "end" | "end-with-force"
  >("hasNextPage");

  const handleFetchMore = useCallback(() => {
    setInfiniteState("loading");
    setTimeout(() => {
      setState((prev) => [
        ...prev,
        ...fc.sample(messagesArbitary, { numRuns: 4 }),
      ]);
      if (state.length > 15) {
        setInfiniteState("end-with-force");
      } else {
        setInfiniteState("hasNextPage");
      }
    }, 1000);
  }, [state.length]);

  const handleNewMessage = useCallback(() => {
    setTimeout(() => {
      setState((prev) => [
        ...fc.sample(messagesArbitary, { numRuns: 1 }),
        ...prev,
      ]);
    }, 500);
  }, []);

  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.length === 4) {
      lastMessageRef.current?.scrollIntoView();
    }
  }, [state.length]);

  return (
    <>
      <button onClick={handleNewMessage}>submit message</button>
      <Container>
        <Infinite
          onFetchMore={handleFetchMore}
          status={infiniteState}
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          reverse
        >
          <Stack vertical align="stretch" reverse>
            {state.map((message, i) => (
              <div
                style={{ overflow: "hidden" }}
                key={message.id}
                ref={i === 0 ? lastMessageRef : undefined}
              >
                <h1>
                  Name: {message.name} - {i}
                </h1>
                <p>Email: {message.email}</p>
                <p> {message.message}</p>
                <p> {message.message}</p>
                <p> {message.message}</p>
                <p> {message.message}</p>
              </div>
            ))}
          </Stack>
        </Infinite>
      </Container>
    </>
  );
};

const useHasUserScrolled = (ref: React.RefObject<HTMLElement>) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const setTrue = () => setHasScrolled(true);
    if (ref.current && !hasScrolled) {
      const el = ref.current;
      const onKeyUp = (e: KeyboardEvent) => {
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
          setHasScrolled(true);
        }
      };
      el.addEventListener("wheel", setTrue);
      el.addEventListener("mousedown", setTrue);
      el.addEventListener("keyup", onKeyUp);
      el.addEventListener("DOMMouseScroll", setTrue);
      el.addEventListener("touchmove", setTrue);
      return () => {
        el.removeEventListener("wheel", setTrue);
        el.removeEventListener("mousedown", setTrue);
        el.removeEventListener("keyup", onKeyUp);
        el.removeEventListener("DOMMouseScroll", setTrue);
        el.removeEventListener("touchmove", setTrue);
      };
    }
  }, [hasScrolled, ref]);
  return { hasUserScrolled: hasScrolled, reset: () => setHasScrolled(false) };
};

type ShortcutMenuScrollProps = {
  onFetchMore?: () => void;
  onFetchMoreStart?: () => void;
  status?: InfiniteScrollStatus;
  startStatus?: InfiniteScrollStatus;
  children: JSX.Element;
};

const ExampleScrollWrapper = ({
  onFetchMore,
  status,
  startStatus,
  children,
  onFetchMoreStart,
}: ShortcutMenuScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { hasUserScrolled } = useHasUserScrolled(scrollRef);

  const timeout = useRef<ReturnType<typeof setTimeout>>();

  // If sort direction is ASC, everytime the scroll position changes (e.g. due to message content loading async)
  // then scroll to the top of the latest message. This ensures the scroll position stays in the correct position as the height of the list changes
  // We stop doing this once the user performs a "real" scroll on the list
  const scrollSideEffect = useCallback(() => {
    //@ts-ignore
    clearTimeout(timeout.current);
    const firstItem = scrollRef.current?.querySelector(".message"); // Items are in reverse order so bottom item is first element with 'message' class
    if (!hasUserScrolled && firstItem) {
      firstItem.scrollIntoView();
    }
  }, [hasUserScrolled]);

  // Need to trigger effect on status change to recalc scroll position when loading spinner is shown or hidden
  useEffect(scrollSideEffect, [scrollSideEffect, status]);

  // Only trigger fetchMore after a user scroll, this prevents the 2nd page from auto requesting
  // Possible downside is if the first page of result exactly fits the height of the container there will be no scrollbar and no way to trigger it with a mouse,
  // As long as Container is set to a height that is smaller than a full page of results, this shouldn't be a problem, also keyboard events will still work which may the more common user interaction dependant on use case
  const onFetchMoreCb = useCallback(() => {
    if (hasUserScrolled) {
      onFetchMore?.();
    }
  }, [hasUserScrolled, onFetchMore]);
  const onFetchMoreStartCb = useCallback(() => {
    if (hasUserScrolled) {
      onFetchMoreStart?.();
    }
  }, [hasUserScrolled, onFetchMoreStart]);

  return (
    <Infinite
      fetchMoreText={"Fetch more"}
      autoscrollText={"Autoscroll"}
      status={status}
      //@ts-ignore
      startStatus={startStatus}
      reverse
      anchor={hasUserScrolled}
      justify={"flex-end"}
      onFetchMore={onFetchMoreCb}
      onFetchMoreStart={onFetchMoreStartCb}
      scrollRef={scrollRef}
      scrollSideEffect={scrollSideEffect}
      onResize={scrollSideEffect}
      width="100%"
    >
      {children}
    </Infinite>
  );
};

export const ExampleWithSideEffect = () => {
  const [state, setState] = useState(() =>
    fc.sample(messagesArbitary, { numRuns: 4, seed: 2324 })
  );
  const [status, setStatus] = useState<
    "loading" | "hasNextPage" | "end" | "end-with-force"
  >("hasNextPage");
  const [startStatus, setStartStatus] = useState<
    "loading" | "hasNextPage" | "end" | "end-with-force"
  >("hasNextPage");
  const [page, setPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const handleFetchMore = useCallback(() => {
    if (status === "hasNextPage") {
      setStatus("loading");
      setTimeout(() => {
        if (page > 4) {
          setStatus("end-with-force");
        } else {
          setState((prev) => [
            ...prev,
            ...fc.sample(messagesArbitary, { numRuns: 4 }),
          ]);
          setPage(page + 1);
          setTimeout(() => setStatus("hasNextPage"), 100);
        }
      }, 1000);
    }
  }, [page, status]);

  const handleFetchMoreStart = useCallback(() => {
    if (startStatus === "hasNextPage") {
      setStartStatus("loading");
      setTimeout(() => {
        if (startPage > 4) {
          setStartStatus("end-with-force");
        } else {
          setState((prev) => [
            ...fc.sample(messagesArbitary, { numRuns: 4 }),
            ...prev,
          ]);
          setStartPage(startPage + 1);
          setTimeout(() => setStartStatus("hasNextPage"), 100);
        }
      }, 1000);
    }
  }, [startPage, startStatus]);

  return (
    <div>
      <Container>
        <ExampleScrollWrapper
          onFetchMore={handleFetchMore}
          onFetchMoreStart={handleFetchMoreStart}
          status={status}
          startStatus={startStatus}
        >
          <Stack vertical align="stretch" reverse>
            {state.map((message, i) => (
              <div
                className="message"
                style={{ overflow: "hidden" }}
                key={message.id}
              >
                <h1>
                  Name: {message.name} - {i + 1 - (startPage - 1) * 4}
                </h1>
                <p>ID: {message.id}</p>
                <p>Email: {message.email}</p>
                <p>{message.message}</p>
              </div>
            ))}
          </Stack>
        </ExampleScrollWrapper>
      </Container>
    </div>
  );
};
