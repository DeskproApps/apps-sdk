import React from "react";
import { ComponentStory } from '@storybook/react';
import { Property as PropertyCmp } from "../Property";

export default {
    title: "Core/Property",
    component: PropertyCmp,
    argTypes: {
      label: { control: "text" },
      text: { control: "text" },
    },
};

const Template: ComponentStory<typeof PropertyCmp> = ({ ...props }) => (
    <PropertyCmp {...props} />
);

export const Property = Template.bind({});

Property.args = {
  label: "Deskpro ticket",
  text: "",
  marginBottom: 10,
};
