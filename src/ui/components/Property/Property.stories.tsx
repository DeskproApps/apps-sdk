import React from "react";
import { Property } from "./Property";

export default {
    title: "Core/Property",
    component: Property,
    argTypes: {
        title: { control: "text" },
    },
};

const Template = ({ ...props }) => (
    <Property {...props}>
        Property content
    </Property>
);

export const Default = Template.bind({});

Default.args = {
    title: "property title"
};
