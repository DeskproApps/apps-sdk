import { PropertyRow } from "./PropertyRow";
import { Property } from "../Property/Property";
import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Pill, Stack } from "@deskpro/deskpro-ui";

export default {
  title: "Core/PropertyRow",
  component: PropertyRow,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <Stack vertical style={{ maxWidth: "265px" }} gap={15}>
      <PropertyRow>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
      </PropertyRow>
      <PropertyRow>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
      </PropertyRow>
      <PropertyRow>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
      </PropertyRow>
      <PropertyRow>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
        <Property title="key">value</Property>
      </PropertyRow>
      <PropertyRow>
        <Property title="key">value</Property>
        <Property title="key">
          <Pill label="Pill" textColor="#FFFFFF" backgroundColor="#000000"></Pill>
        </Property>
      </PropertyRow>
      <PropertyRow>
        <Property title="key">
          JavaScript is the world's most popular programming language. JavaScript is the programming
          language of the Web. JavaScript is easy to learn.
        </Property>
        <Property title="key">
          JavaScript is the world's most popular programming language. JavaScript is the programming
          language of the Web. JavaScript is easy to learn.
        </Property>
      </PropertyRow>
    </Stack>
  );
};
