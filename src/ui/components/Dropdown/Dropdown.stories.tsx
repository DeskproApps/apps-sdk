import {
  Button,
  ButtonGroup,
  CreateNewOption,
  DivAsInput,
  DivAsInputWithDisplay,
  Dropdown,
  DropdownContainer,
  DropdownDividerItem,
  DropdownHeaderItem,
  DropdownItem,
  DropdownItemType,
  DropdownTabProps,
  DropdownTargetProps,
  DropdownValueType,
  Icon,
  Input,
  InputWithDisplay,
  Label,
  Pill,
  Stack,
  TabBarItemType,
  TagCircleIcon,
  Toggle,
} from "@deskpro/deskpro-ui";
import {
  faCaretDown,
  faCheck,
  faExternalLinkAlt,
  faPlus,
  faSortDown,
  faSortUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { useMemo, useState } from "react";
import styled, { useTheme } from "styled-components";
import { match } from "ts-pattern";

export default {
  title: "Core/Dropdown",
};

const Container = styled.div`
  width: 300px;
`;

const createStatuses = (colors) => [
  {
    label: "Published",
    backgroundColor: colors.turquoise100,
  },
  {
    label: "Archived",
    backgroundColor: colors.grey80,
  },
  {
    label: "Deleted",
    backgroundColor: colors.red100,
  },
  {
    label: "Published2",
    backgroundColor: colors.turquoise100,
  },
  {
    label: "Archived2",
    backgroundColor: colors.grey80,
  },
  {
    label: "Deleted2",
    backgroundColor: colors.red100,
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Items = () => {
  return (
    <div style={{ width: 250, margin: 20 }}>
      <DropdownContainer layer="popover">
        <DropdownHeaderItem>Group</DropdownHeaderItem>
        <DropdownItem
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          value={{
            key: "1",
            label: "test",
            type: "value",
            selected: true,
            value: "",
          }}
          meta={{ active: false, input: "" }}
        />
        <DropdownItem
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          value={{ key: "1", label: "test", type: "value", value: "" }}
          meta={{ active: false, input: "" }}
        />
        <DropdownItem
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          value={{
            key: "1",
            disabled: true,
            label: "test",
            type: "value",
            value: "",
          }}
          meta={{ active: false, input: "" }}
        />
        <DropdownDividerItem />
        <DropdownHeaderItem>Group</DropdownHeaderItem>
        <DropdownItem
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          value={{ key: "1", label: "test", type: "value", value: "" }}
          meta={{ active: false, input: "" }}
        />
        <DropdownItem
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          value={{ key: "1", label: "test", type: "value", value: "" }}
          meta={{ active: false, input: "" }}
        />
        <DropdownItem
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          value={{ key: "1", label: "test", type: "value", value: "" }}
          meta={{ active: false, input: "" }}
        />
      </DropdownContainer>
    </div>
  );
};

const options: DropdownValueType<string>[] = [
  {
    key: "111",
    type: "value" as const,
    label: "Label 1",
    value: "1",
  },
  {
    key: "222",
    type: "value" as const,
    label: "Label 2",
    value: "2",
  },
  {
    key: "333",
    type: "value" as const,
    label: "Label 3",
    value: "3",
  },
];

export const SimpleButton = () => {
  return (
    <Container>
      <Dropdown
        placement="bottom-start"
        options={options}
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
      >
        {({
          active,
          targetProps,
          targetRef,
        }: DropdownTargetProps<HTMLButtonElement>) => (
          <Button
            ref={targetRef}
            {...targetProps}
            active={active}
            text="Click Me"
          ></Button>
        )}
      </Dropdown>
    </Container>
  );
};

const optionsWithIcons: DropdownValueType<string>[] = [
  {
    key: "111",
    type: "value" as const,
    label: "Label 1",
    value: "1",
    icon: "deskpro",
  },
  {
    key: "222",
    type: "value" as const,
    label: "Label 2",
    value: "2",
    icon: "apps-zapier",
  },
];

export const SimpleButtonWithIcons = () => {
  return (
    <Container>
      <Dropdown
        placement="bottom-start"
        options={optionsWithIcons}
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
      >
        {({
          active,
          targetProps,
          targetRef,
        }: DropdownTargetProps<HTMLButtonElement>) => (
          <Button
            ref={targetRef}
            {...targetProps}
            active={active}
            text="Click Me"
          ></Button>
        )}
      </Dropdown>
    </Container>
  );
};

export const MultiSelect = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const multiSelectOptions = options.map((option) => ({
    ...option,
    selected: !!option.value && selected.includes(option.value),
  }));
  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        options={multiSelectOptions}
        onSelectOption={(option) => {
          if (option.value) {
            selected.includes(option.value)
              ? setSelected(selected.filter((s) => s !== option.value))
              : setSelected([...selected, option.value]);
          }
        }}
        closeOnSelect={false}
      >
        {({
          active,
          targetProps,
          targetRef,
        }: DropdownTargetProps<HTMLButtonElement>) => (
          <Button
            ref={targetRef}
            {...targetProps}
            active={active}
            text="Click Me"
          ></Button>
        )}
      </Dropdown>
    </Container>
  );
};

export const NewButton = () => {
  return (
    <Container>
      <Dropdown
        placement="bottom-start"
        options={options}
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
      >
        {({
          active,
          targetProps,
          targetRef,
        }: DropdownTargetProps<HTMLButtonElement>) => (
          <ButtonGroup>
            <Button text="New" size="large" />
            <Button
              size="large"
              ref={targetRef}
              {...targetProps}
              active={active}
              icon={faCaretDown}
            />
          </ButtonGroup>
        )}
      </Dropdown>
    </Container>
  );
};

export const DivTrigger = () => {
  return (
    <Container>
      <Dropdown
        placement="bottom-start"
        options={options}
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
      >
        {({ targetProps, targetRef }: DropdownTargetProps<HTMLDivElement>) => (
          <div ref={targetRef} {...targetProps}>
            <TagCircleIcon color={"purple"} icon={faUser} size={40} />
          </div>
        )}
      </Dropdown>
    </Container>
  );
};

type Status = {
  label: string;
  backgroundColor: string;
};

export const DivAsInputTrigger = () => {
  //@ts-ignore
  const colors = useTheme().colors;

  const statuses: Status[] = useMemo(
    () => [
      {
        label: "Published",
        backgroundColor: colors.turquoise100,
      },
      {
        label: "Archived",
        backgroundColor: colors.grey80,
      },
      {
        label: "Deleted",
        backgroundColor: colors.red100,
      },
    ],
    [colors]
  );
  const [selectedValue, setSelectedValue] = useState<Status>(statuses[0]);

  const options: DropdownItemType<Status>[] = useMemo(() => {
    return statuses.map((opt) => ({
      key: opt.label,
      label: (
        <Pill
          textColor={colors.white}
          backgroundColor={opt.backgroundColor}
          label={opt.label}
        />
      ),
      type: "value" as const,
      value: opt,
      selected: opt.label === selectedValue.label,
    }));
  }, [statuses, selectedValue, colors.white]);

  return (
    <Container>
      <Dropdown<Status, HTMLDivElement>
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        options={options}
        onSelectOption={(option) => {
          setSelectedValue(option.value);
        }}
        hideIcons
      >
        {({ targetProps, targetRef }: DropdownTargetProps<HTMLDivElement>) => (
          <DivAsInput
            ref={targetRef}
            {...targetProps}
            value={
              <Pill
                textColor={colors.white}
                backgroundColor={selectedValue.backgroundColor}
                label={selectedValue.label}
              />
            }
            rightIcon={faCaretDown}
            variant="inline"
            placeholder="Select an option"
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const DivAsInputTriggerRequired = () => {
  //@ts-ignore
  const colors = useTheme().colors;

  const statuses: Status[] = useMemo(
    () => [
      {
        label: "Published",
        backgroundColor: colors.turquoise100,
      },
      {
        label: "Archived",
        backgroundColor: colors.grey80,
      },
      {
        label: "Deleted",
        backgroundColor: colors.red100,
      },
    ],
    [colors]
  );
  const [selectedValue, setSelectedValue] = useState<Status | undefined>();

  const options: DropdownItemType<Status>[] = useMemo(() => {
    return statuses.map((opt) => ({
      key: opt.label,
      label: (
        <Pill
          textColor={colors.white}
          backgroundColor={opt.backgroundColor}
          label={opt.label}
        />
      ),
      type: "value" as const,
      value: opt,
      selected: opt.label === selectedValue?.label,
    }));
  }, [statuses, selectedValue, colors.white]);

  return (
    <Container>
      <Dropdown<Status, HTMLDivElement>
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        options={options}
        onSelectOption={(option) => {
          setSelectedValue(option.value);
        }}
        hideIcons
      >
        {({ targetProps, targetRef }: DropdownTargetProps<HTMLDivElement>) => (
          <DivAsInput
            ref={targetRef}
            {...targetProps}
            value={
              selectedValue && (
                <Pill
                  textColor={colors.white}
                  backgroundColor={selectedValue.backgroundColor}
                  label={selectedValue.label}
                />
              )
            }
            rightIcon={faCaretDown}
            variant="inline"
            placeholder="Select an option"
            required={!selectedValue}
          />
        )}
      </Dropdown>
    </Container>
  );
};

const PillWithMarginBottom = styled(Pill)`
  margin-bottom: 4px;
`;
export const DivAsInputTriggerMultiSelect = () => {
  //@ts-ignore
  const colors = useTheme().colors;

  const statuses: Status[] = useMemo(() => createStatuses(colors), [colors]);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    statuses.map((s) => s.label)
  );

  const options: DropdownItemType<Status>[] = useMemo(() => {
    return statuses.map((opt) => ({
      key: opt.label,
      label: (
        <Pill
          textColor={colors.white}
          backgroundColor={opt.backgroundColor}
          label={opt.label}
        />
      ),
      type: "value" as const,
      value: opt,
      selected: !!opt.label && selectedValues.includes(opt.label),
    }));
  }, [statuses, selectedValues, colors.white]);

  return (
    <Container>
      <Dropdown<Status, HTMLDivElement>
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        options={options}
        onSelectOption={(option) => {
          selectedValues.includes(option.value.label)
            ? setSelectedValues(
                selectedValues.filter((s) => s !== option.value.label)
              )
            : setSelectedValues([...selectedValues, option.value.label]);
        }}
        closeOnSelect={false}
        hideIcons
      >
        {({ targetProps, targetRef }: DropdownTargetProps<HTMLDivElement>) => (
          <DivAsInput
            ref={targetRef}
            {...targetProps}
            value={
              <Stack align="center" gap={4} wrap="wrap">
                {selectedValues.map((label) => (
                  <PillWithMarginBottom
                    key={label}
                    textColor={colors.white}
                    backgroundColor={
                      statuses.find((status) => status.label === label)
                        ?.backgroundColor ?? colors.grey20
                    }
                    label={label}
                  />
                ))}
              </Stack>
            }
            rightIcon={faCaretDown}
            variant="inline"
            placeholder="Select an option"
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const DivAsInputWithDisplayTriggerMultiSelect = () => {
  //@ts-ignore
  const colors = useTheme().colors;
  const [isOpen, setIsOpen] = useState(false);
  const statuses: Status[] = useMemo(() => createStatuses(colors), [colors]);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    statuses.map((s) => s.label)
  );

  const options: DropdownItemType<Status>[] = useMemo(() => {
    return statuses.map((opt) => ({
      key: opt.label,
      label: (
        <Pill
          textColor={colors.white}
          backgroundColor={opt.backgroundColor}
          label={opt.label}
        />
      ),
      type: "value" as const,
      value: opt,
      selected: !!opt.label && selectedValues.includes(opt.label),
    }));
  }, [statuses, selectedValues, colors.white]);

  return (
    <Container>
      <Dropdown<Status, HTMLDivElement>
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        options={options}
        onSelectOption={(option) => {
          selectedValues.includes(option.value.label)
            ? setSelectedValues(
                selectedValues.filter((s) => s !== option.value.label)
              )
            : setSelectedValues([...selectedValues, option.value.label]);
        }}
        onOpen={() => {
          setIsOpen(true);
        }}
        onClose={() => {
          setIsOpen(false);
        }}
        closeOnSelect={false}
        hideIcons
      >
        {({ targetProps, targetRef }: DropdownTargetProps<HTMLDivElement>) => (
          <DivAsInputWithDisplay
            ref={targetRef}
            {...targetProps}
            value={
              <Stack align="center" gap={4} wrap="wrap">
                {selectedValues.map((label) => (
                  <PillWithMarginBottom
                    key={label}
                    textColor={colors.white}
                    backgroundColor={
                      statuses.find((status) => status.label === label)
                        ?.backgroundColor ?? colors.grey20
                    }
                    label={label}
                  />
                ))}
              </Stack>
            }
            rightIcon={faCaretDown}
            variant="inline"
            placeholder="Select an option"
            isVisibleRightIcon={isOpen}
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const DivAsInputWithDisplayTriggerMultiSelectReadonlyEqualsFalse =
  () => {
    //@ts-ignore
    const colors = useTheme().colors;
    const [isOpen, setIsOpen] = useState(false);
    const statuses: Status[] = useMemo(() => createStatuses(colors), [colors]);
    const [selectedValues, setSelectedValues] = useState<string[]>(
      statuses.map((s) => s.label)
    );

    const options: DropdownItemType<Status>[] = useMemo(
      () =>
        statuses.map((opt) => ({
          key: opt.label,
          label: (
            <Pill
              textColor={colors.white}
              backgroundColor={opt.backgroundColor}
              label={opt.label}
            />
          ),
          type: "value" as const,
          value: opt,
          selected: !!opt.label && selectedValues.includes(opt.label),
        })),
      [statuses, selectedValues, colors.white]
    );

    return (
      <Container>
        <Dropdown<Status, HTMLDivElement>
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          placement="bottom-start"
          options={options}
          onSelectOption={(option) => {
            selectedValues.includes(option.value.label)
              ? setSelectedValues(
                  selectedValues.filter((s) => s !== option.value.label)
                )
              : setSelectedValues([...selectedValues, option.value.label]);
          }}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          closeOnSelect={false}
          hideIcons
        >
          {({
            targetProps,
            targetRef,
          }: DropdownTargetProps<HTMLDivElement>) => (
            <DivAsInputWithDisplay
              ref={targetRef}
              {...targetProps}
              readOnly={false}
              value={
                <Stack align="center" gap={4} wrap="wrap">
                  {selectedValues.map((label) => (
                    <PillWithMarginBottom
                      key={label}
                      textColor={colors.white}
                      backgroundColor={
                        statuses.find((status) => status.label === label)
                          ?.backgroundColor ?? colors.grey20
                      }
                      label={label}
                    />
                  ))}
                </Stack>
              }
              rightIcon={faCaretDown}
              variant="inline"
              placeholder="Select an option"
              isVisibleRightIcon={isOpen}
            />
          )}
        </Dropdown>
      </Container>
    );
  };

export const DivAsInputWithDisplayTriggerMultiSelectReadonlyEqualsTrue = () => {
  //@ts-ignore
  const colors = useTheme().colors;
  const [isOpen, setIsOpen] = useState(false);
  const statuses: Status[] = useMemo(() => createStatuses(colors), [colors]);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    statuses.map((s) => s.label)
  );

  const options: DropdownItemType<Status>[] = useMemo(
    () =>
      statuses.map((opt) => ({
        key: opt.label,
        label: (
          <Pill
            textColor={colors.white}
            backgroundColor={opt.backgroundColor}
            label={opt.label}
          />
        ),
        type: "value" as const,
        value: opt,
        selected: !!opt.label && selectedValues.includes(opt.label),
      })),
    [statuses, selectedValues, colors.white]
  );

  return (
    <Container>
      <Dropdown<Status, HTMLDivElement>
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        options={options}
        onSelectOption={(option) => {
          selectedValues.includes(option.value.label)
            ? setSelectedValues(
                selectedValues.filter((s) => s !== option.value.label)
              )
            : setSelectedValues([...selectedValues, option.value.label]);
        }}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        closeOnSelect={false}
        hideIcons
      >
        {({ targetProps, targetRef }: DropdownTargetProps<HTMLDivElement>) => (
          <DivAsInputWithDisplay
            ref={targetRef}
            {...targetProps}
            readOnly={true}
            value={
              <Stack align="center" gap={4} wrap="wrap">
                {selectedValues.map((label) => (
                  <PillWithMarginBottom
                    key={label}
                    textColor={colors.white}
                    backgroundColor={
                      statuses.find((status) => status.label === label)
                        ?.backgroundColor ?? colors.grey20
                    }
                    label={label}
                  />
                ))}
              </Stack>
            }
            rightIcon={faCaretDown}
            variant="inline"
            placeholder="Select an option"
            isVisibleRightIcon={isOpen}
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const SimpleButtonWithInternalSearch = () => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={options}
        showInternalSearch
        onInputReturn={(val) => console.log(`onInputReturn: ${val}`)}
      >
        {({
          active,
          targetProps,
          targetRef,
        }: DropdownTargetProps<HTMLButtonElement>) => (
          <Button
            ref={targetRef}
            {...targetProps}
            active={active}
            text="Click Me"
          />
        )}
      </Dropdown>
    </Container>
  );
};

const optionsFixed: DropdownValueType<string>[] = options;

export const InternalSearchFixedHeight = () => {
  const [input, setInput] = useState("");

  const filteredOptions = optionsFixed.filter((opt) =>
    (opt.label as string).includes(input)
  );

  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={filteredOptions}
        showInternalSearch
        containerHeight={400}
        hideIcons
      >
        {({
          active,
          targetProps,
          targetRef,
        }: DropdownTargetProps<HTMLButtonElement>) => (
          <Button
            ref={targetRef}
            {...targetProps}
            active={active}
            text="Click Me"
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const SimpleInput = () => {
  const [input, setInput] = useState("");
  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={options}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
      >
        {({ inputProps, inputRef }) => <Input ref={inputRef} {...inputProps} />}
      </Dropdown>
    </Container>
  );
};

export const Select = () => {
  const [input, setInput] = useState("");
  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={options}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
        hideIcons
      >
        {({ inputProps, inputRef }) => (
          <Input
            ref={inputRef}
            {...inputProps}
            rightIcon={faCaretDown}
            variant="inline"
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const TabbedDropdown = () => {
  type TabId = "All" | "NamesStartingWithA" | "NamesStartingWithJ";

  const tabs: (TabBarItemType & { id: TabId })[] = [
    {
      id: "All",
      label: "All",
    },
    {
      id: "NamesStartingWithA",
      label: "Names With A",
    },
    {
      id: "NamesStartingWithJ",
      label: "Names With J",
    },
  ];

  const [input, setInput] = useState("");
  const [activeTab, onTabChange] = useState(0);

  const allOptions: DropdownValueType<string>[] = [
    {
      key: "1",
      label: "Steve",
      value: "Steve",
      type: "value" as const,
    },
    {
      key: "2",
      label: "John",
      value: "John",
      type: "value" as const,
    },
    {
      key: "3",
      label: "Alex",
      value: "Alex",
      type: "value" as const,
    },
    {
      key: "4",
      label: "Jim",
      value: "Jim",
      type: "value" as const,
    },
    {
      key: "5",
      label: "Alice",
      value: "Alice",
      type: "value" as const,
    },
  ];

  const options = match(tabs[activeTab].id)
    .with("All", () => allOptions)
    .with("NamesStartingWithA", () =>
      allOptions.filter((opt) => opt.value[0] === "A")
    )
    .with("NamesStartingWithJ", () =>
      allOptions.filter((opt) => opt.value[0] === "J")
    )
    .exhaustive();

  const tabProps: DropdownTabProps = {
    activeTabIndex: activeTab,
    onTabChange,
    tabs,
  };

  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        tabProps={tabProps}
        options={options}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
        hideIcons
      >
        {({ inputProps, inputRef }) => (
          <Input
            ref={inputRef}
            {...inputProps}
            rightIcon={faCaretDown}
            variant="inline"
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const SelectRequired = () => {
  const [input, setInput] = useState("");
  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={options}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
        hideIcons
      >
        {({ inputProps, inputRef }) => (
          <Input
            ref={inputRef}
            {...inputProps}
            rightIcon={faCaretDown}
            variant="inline"
            required={!input}
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const SelectWithLabel = () => {
  const [input, setInput] = useState("");
  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={options}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
        hideIcons
      >
        {({ inputProps, inputRef }) => (
          <Label label="Label">
            <Input
              ref={inputRef}
              {...inputProps}
              rightIcon={faCaretDown}
              variant="inline"
            />
          </Label>
        )}
      </Dropdown>
    </Container>
  );
};

export const SelectWithDisplay = () => {
  const [input, setInput] = useState("");
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={options}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
        hideIcons
      >
        {({ inputProps, inputRef }) => (
          <Label
            label="Label"
            onBlur={() => {
              setIsVisibleInput(false);
            }}
            onClick={() => {
              setIsVisibleInput(true);
            }}
          >
            <InputWithDisplay
              ref={inputRef}
              {...inputProps}
              rightIcon={faCaretDown}
              placeholder="Select Value"
              isVisibleInput={isVisibleInput}
            />
          </Label>
        )}
      </Dropdown>
    </Container>
  );
};

export const TheEverything = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleValue, setToggleValue] = useState(false);
  const [loading] = useState(false);

  const iconOptions: DropdownItemType<string>[] = options.map((o) => ({
    ...o,
    icon: <Icon icon={faUser} />,
  }));
  iconOptions.push({
    type: "divider" as const,
  });
  iconOptions.push({
    type: "value" as const,
    key: "withSubItems",
    label: "withSubItems (click arrow)",
    value: "withSubItems",
    icon: <Icon icon={faUser} />,
    subItems: options,
  });
  iconOptions.push({
    type: "value" as const,
    key: "withSubItemsFullWidthClickableArea",
    label: "withSubItemsFullWidthClickableArea",
    value: "withSubItemsFullWidthClickableArea",
    icon: <Icon icon={faUser} />,
    subItems: options,
    openSubmenuOnSelect: true,
  });
  iconOptions.push({
    type: "value" as const,
    key: "withSubItemsAndOnClick",
    label: "withSubItemsAndOnClick (click arrow)",
    value: "withSubItemsAndOnClick",
    icon: <Icon icon={faUser} />,
    subItems: options,
    onClickSubItem: (value: unknown) => {
      console.log("onClickSubItem", value);
    },
  });
  iconOptions.push({
    type: "value" as const,
    key: "withIconAndOnIconClick",
    label: "withIconAndOnIconClick (click arrow)",
    value: "withIconAndOnIconClick",
    icon: toggleValue ? faSortUp : faSortDown,
    onClickIcon: () => {
      setToggleValue(!toggleValue);
    },
  });

  const handleCreateNew = () => console.log("create new user");

  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        isLoading={loading}
        inputValue={searchQuery}
        onClose={() => {
          setSearchQuery("");
        }}
        onInputChange={setSearchQuery}
        options={[{ type: "header", label: "Header" } as const, ...iconOptions]}
        stickyHeaderOptions={[
          { type: "header", label: "Sticky header" } as const,
          options[0],
        ]}
        stickyFooterOptions={[
          { type: "header", label: "Sticky footer" } as const,
          iconOptions[0],
        ]}
        onCreateNewOption={handleCreateNew}
        renderCreateNewOption={(active, onCreateNewOption) => (
          <CreateNewOption
            active={active}
            text="Create new user"
            icon={faPlus}
            onClick={() => {
              onCreateNewOption();
            }}
          />
        )}
        showInternalSearch
        searchPlaceholder="Search..."
        onSelectOption={(option) => {
          console.log("select option", option);
        }}
        placement="bottom-end"
      >
        {({
          targetRef,
          targetProps,
        }: DropdownTargetProps<HTMLButtonElement>) => (
          <Button
            ref={targetRef}
            {...targetProps}
            icon={faPlus}
            text="The dropdown contains (almost) all the features..."
          />
        )}
      </Dropdown>
    </Container>
  );
};

export const ButtonToAutoFocusNewInput = () => {
  const [closeOnSelect, setCloseOnSelect] = useState(true);
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  return (
    <Container>
      <Toggle
        label="Close OnSelect"
        onClick={(e) => setCloseOnSelect(e.currentTarget.checked)}
        checked={closeOnSelect}
      />
      {!showInput && (
        <Button text="Trigger Input" onClick={() => setShowInput(true)} />
      )}
      {showInput && (
        <Dropdown
          closeOnSelect={closeOnSelect}
          fetchMoreText={"Fetch more"}
          autoscrollText={"Autoscroll"}
          selectedIcon={faCheck}
          externalLinkIcon={faExternalLinkAlt}
          placement="bottom-start"
          inputValue={input}
          onInputChange={setInput}
          options={options}
          onSelectOption={(option) => {
            option.value && setInput(option.value);
          }}
        >
          {({ inputProps, inputRef }) => (
            <Input autoFocus ref={inputRef} {...inputProps} />
          )}
        </Dropdown>
      )}
    </Container>
  );
};

export const SimpleWithCreateNew = () => {
  const [input, setInput] = useState("");

  const handleCreateNew = () => {
    console.log("fooo");
  };

  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={options}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
        onCreateNewOption={handleCreateNew}
        renderCreateNewOption={(active, onCreateNewOption) => (
          <CreateNewOption
            active={active}
            text="Create new user"
            icon={faPlus}
            onClick={() => {
              onCreateNewOption();
            }}
          />
        )}
      >
        {({ inputProps, inputRef }) => <Input ref={inputRef} {...inputProps} />}
      </Dropdown>
    </Container>
  );
};

export const CreateNewWithNoOptions = () => {
  const [input, setInput] = useState("");

  const handleCreateNew = () => {
    console.log("fooo");
  };

  return (
    <Container>
      <Dropdown
        fetchMoreText={"Fetch more"}
        autoscrollText={"Autoscroll"}
        selectedIcon={faCheck}
        externalLinkIcon={faExternalLinkAlt}
        placement="bottom-start"
        inputValue={input}
        onInputChange={setInput}
        options={[] as DropdownValueType<string>[]}
        onSelectOption={(option) => {
          option.value && setInput(option.value);
        }}
        onCreateNewOption={handleCreateNew}
        renderCreateNewOption={(active, onCreateNewOption) => (
          <CreateNewOption
            active={active}
            text="Create new user"
            icon={faPlus}
            onClick={() => {
              onCreateNewOption();
            }}
          />
        )}
      >
        {({ inputProps, inputRef }) => <Input ref={inputRef} {...inputProps} />}
      </Dropdown>
    </Container>
  );
};
