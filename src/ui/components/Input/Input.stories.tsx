import * as React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Input } from "./Input";
import { faEye, faEyeSlash, faLock } from "@fortawesome/pro-solid-svg-icons";
import { IconButton } from "../Button";
import styled from "styled-components";
import { H1 } from "../Typography";

export default {
  title: "Core/Input",
  decorators: [withKnobs],
};

const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Inputs = () => {
  const visible = boolean("input password visible", false);
  const value = text("input value", "This is an input");

  return (
    <Container>
      <H1>Input</H1>
      <Input onChange={action("onChange")} value={value} placeholder="Enter Password" type="text" />

      <H1>Small</H1>
      <Input
        onChange={action("onChange")}
        inputsize="small"
        value={value}
        placeholder="Enter Password"
        type="text"
      />

      <H1>With icons and buttons</H1>
      <Input
        onChange={action("onChange")}
        value={value}
        placeholder="Enter Password"
        type="text"
        leftIcon={faLock}
        rightIcon={
          <IconButton
            onClick={action("onIconButtonClick")}
            minimal
            icon={visible ? faEyeSlash : faEye}
          />
        }
      />

      <H1>Small With icons and buttons</H1>
      <Input
        onChange={action("onChange")}
        value={value}
        inputsize="small"
        placeholder="Enter Password"
        type="text"
        leftIcon={faLock}
        rightIcon={
          <IconButton
            onClick={action("onIconButtonClick")}
            minimal
            icon={visible ? faEyeSlash : faEye}
          />
        }
      />

      <H1>Required</H1>
      <Input required onChange={action("onChange")} placeholder="Enter Password" type="text" />

      <H1>Required with value</H1>
      <Input
        required={!value}
        onChange={action("onChange")}
        value={value}
        placeholder="Enter Password"
        type="text"
      />

      <H1>Error</H1>
      <Input
        error
        onChange={action("onChange")}
        value={value}
        placeholder="Enter Password"
        type="text"
      />

      <H1>Disabled</H1>
      <Input
        disabled
        onChange={action("onChange")}
        value={value}
        placeholder="Enter Password"
        type="text"
      />

      <H1>Disabled/Display</H1>
      <Input
        disabled
        onChange={action("onChange")}
        value={value}
        placeholder="Enter Password"
        type="text"
      />

      <H1>Password input</H1>
      <Input
        onChange={action("onChange")}
        value={value}
        placeholder="Enter Password"
        type={visible ? "text" : "password"}
        leftIcon={faLock}
        rightIcon={
          <IconButton
            onClick={action("onIconButtonClick")}
            minimal
            icon={visible ? faEyeSlash : faEye}
          />
        }
      />
    </Container>
  );
};
