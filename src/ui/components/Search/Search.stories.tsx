import { Search } from "./Search";
import { action } from '@storybook/addon-actions';
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
      onChange: { action: "change" }
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
};
