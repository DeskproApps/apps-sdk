import React from "react";
import { ComponentStory } from '@storybook/react';
import { TwoProperties as TwoPropertiesCmp } from "../TwoProperties";

export default {
    title: "Core/Property",
    component: TwoPropertiesCmp,
    argTypes: {
      leftLabel: { control: "text" },
      leftText: { control: "text" },
      rightLabel: { control: "text" },
      rightText: { control: "text" },
    },
};

const Template: ComponentStory<typeof TwoPropertiesCmp> = ({ ...props }) => (
  <>
    <TwoPropertiesCmp {...props}/>
    <TwoPropertiesCmp
      leftLabel="Due date"
      leftText="01 Jan 2023"
      rightLabel="Deskpro ticket"
      rightText="Aut corporis cupiditate dolore dolorem et hic id illo minus, natus, nisi officia, officiis."
    />
  </>
);

export const TwoProperties = Template.bind({});

TwoProperties.args = {
  leftLabel: "Due date",
  leftText: "01 Jan 2023",
  rightLabel: "Deskpro ticket",
  rightText: "3",
};
