import { useRef, useEffect } from "react";
import { Search } from "./Search";
import { action } from "@storybook/addon-actions";
import type { ComponentStory } from "@storybook/react";

export default {
  title: "Core/Search",
  component: Search,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    isFetching: { control: "boolean" },
    marginBottom: { control: "number" },
    onChange: { action: "change" },
    inputProps: { control: "object" },
  },
};

export const Default: ComponentStory<typeof Object> = (props) => (
  <Search {...props} />
);

Default.args = {
  label: "",
  disabled: false,
  required: false,
  isFetching: false,
  marginBottom: 10,
  onChange: action("onChange"),
  inputProps: {
    placeholder: "Enter the value",
  },
};

export const AutoFocus: ComponentStory<typeof Object> = (props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(
    () => searchInputRef && searchInputRef.current?.focus(),
    [searchInputRef],
  );

  return <Search ref={searchInputRef} {...props} />;
};
