import { TextArea, TextAreaWithDisplay } from "@deskpro/deskpro-ui";
import { text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { ChangeEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import { H1 } from "../Typography";

export default {
  title: "Core/TextArea",
  decorators: [withKnobs],
};

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TextAreasInline = () => {
  const shortValue = text("InlineTextArea value", "This is a text area");

  const [value, setValue] = useState(
    "This is a text area This is a text area This is a text area This is a text area "
  );
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };
  const ref = useRef<HTMLTextAreaElement>(null);

  return (
    <Container>
      <H1>Textarea, empty</H1>
      <TextArea
        variant="inline"
        value={""}
        placeholder="This is a placeholder"
      />
      <H1>Textarea, single line</H1>
      <TextArea
        variant="inline"
        value={shortValue}
        placeholder="This is a placeholder"
      />
      <H1>Textarea, multiline</H1>
      <TextArea
        variant="inline"
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
      />
      <H1>Textarea, required, empty</H1>
      <TextArea
        required
        variant="inline"
        value={""}
        placeholder="This is a placeholder"
      />
      <H1>Textarea, required, single line</H1>
      <TextArea
        required={!shortValue}
        variant="inline"
        value={shortValue}
        placeholder="This is a placeholder"
      />
      <H1>Textarea, required, multiline</H1>
      <TextArea
        required={!value}
        variant="inline"
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
      />
      <H1>Textarea, error, empty</H1>
      <TextArea
        error
        variant="inline"
        value={""}
        placeholder="This is a placeholder"
      />
      <H1>Textarea, error, single line</H1>
      <TextArea
        error
        variant="inline"
        value={shortValue}
        placeholder="This is a placeholder"
      />
      <H1>Textarea, error, multiline</H1>
      <TextArea
        error
        variant="inline"
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
      />
      <H1>Textarea, with ref</H1>
      <TextArea
        variant="inline"
        value={""}
        placeholder="This is a placeholder"
        ref={ref}
      />
    </Container>
  );
};

export const TextAreasWithDisplay = () => {
  const shortValue = text(
    "InlineTextAreaWithDisplay value",
    "This is a text area"
  );
  const [value, setValue] = useState(
    "This is a text area This is a text area This is a text area This is a text area. This is a text area This is a text area This is a text area This is a text area. "
  );
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  const ref = useRef<HTMLTextAreaElement>(null);

  return (
    <Container>
      <H1>Textarea with display, empty</H1>
      <TextAreaWithDisplay value={""} placeholder="This is a placeholder" />
      <H1>Textarea with display, single line</H1>
      <TextAreaWithDisplay
        value={shortValue}
        placeholder="This is a placeholder"
      />
      <H1>Textarea with display, multiline</H1>
      <TextAreaWithDisplay
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
      />
      <H1>Textarea with display, expanding</H1>
      <TextAreaWithDisplay
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
        maxRows={2}
      />
      <H1>Textarea with display, required, empty</H1>
      <TextAreaWithDisplay
        required
        value={""}
        placeholder="This is a placeholder"
      />
      <H1>Textarea with display, required, single line</H1>
      <TextAreaWithDisplay
        required={!shortValue}
        value={shortValue}
        placeholder="This is a placeholder"
      />
      <H1>Textarea with display, required, multiline</H1>
      <TextAreaWithDisplay
        required={!value}
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
      />
      <H1>Textarea with display, required, expanding</H1>
      <TextAreaWithDisplay
        required={!value}
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
        maxRows={2}
      />
      <H1>Textarea with display, error, empty</H1>
      <TextAreaWithDisplay
        error
        value={""}
        placeholder="This is a placeholder"
      />
      <H1>Textarea with display, error, single line</H1>
      <TextAreaWithDisplay
        error
        value={shortValue}
        placeholder="This is a placeholder"
      />
      <H1>Textarea with display, error, multiline</H1>
      <TextAreaWithDisplay
        error
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
      />
      <H1>Textarea with display, error, expanding</H1>
      <TextAreaWithDisplay
        error
        value={value}
        placeholder="This is a placeholder"
        onChange={onChange}
        maxRows={2}
      />
      <H1>Textarea with display, with ref</H1>
      <TextAreaWithDisplay
        value={""}
        placeholder="This is a placeholder"
        ref={ref}
      />
      <H1>Textarea with display, without hover style</H1>
      <TextAreaWithDisplay
        value={""}
        removeHoverStyle
        placeholder="This is a placeholder"
      />
    </Container>
  );
};

// This story is for testing the complexity of the TextAreaWithDisplay component
// Key fetures to test:
// It doesn't blur on render.
// It's height is always respected to these. Inital render, maxRows, onChange, onFocus and Blur.
export const TextAreasForm = () => {
  const [valueA, setValueA] = useState(
    "This is a text area This is a text area This is a text area This is a text area. This is a text area This is a text area This is a text area This is a text area. "
  );
  const [valueB, setValueB] = useState("");

  const [isVisableA, setIsVisableA] = useState(false);
  const [isVisableB, setIsVisableB] = useState(false);

  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValueA(e.target.value);
  };

  const onChangeb: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValueB(e.target.value);
  };
  const onBlurA = () => {
    setIsVisableA(false);
    setA(true);
  };

  const onBlurB = () => {
    setIsVisableB(false);
    setB(true);
  };

  const ref = useRef<HTMLTextAreaElement>(null);

  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <button onClick={() => setExpanded((val) => !val)}>
        {expanded ? "collapse" : "expand"}
      </button>
      <label htmlFor="aLabel" onClick={() => setIsVisableA(true)}>
        <span>LABEL A with expandable max rows 2</span>
        <TextAreaWithDisplay
          id="aLabel"
          value={valueA}
          placeholder="This is a placeholder"
          onChange={onChange}
          ref={ref}
          onBlur={onBlurA}
          isVisibleInput={isVisableA}
          maxRows={expanded ? undefined : 1}
        />
        {a && <div>A has blured</div>}
      </label>

      <label htmlFor="bLabel" onClick={() => setIsVisableB(true)}>
        <span>LABEL B</span>
        <TextAreaWithDisplay
          id={"bLabel"}
          value={valueB}
          placeholder="This is a placeholder"
          onChange={onChangeb}
          ref={ref}
          onBlur={onBlurB}
          isVisibleInput={isVisableB}
        />
        {b && <div>B has blured</div>}
      </label>
    </Container>
  );
};
