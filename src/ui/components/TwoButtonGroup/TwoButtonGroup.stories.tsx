import React from "react";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { TwoButtonGroup } from "./TwoButtonGroup";

export default {
    title: "Core/TwoButtonGroup",
    component: TwoButtonGroup,
    argTypes: {
        selected: {
            control: { type: 'radio' },
            options: ['one', 'two'],
        },
        oneLabel: { control: "text" },
        twoLabel: { control: "text" },
        oneOnClick: { action: 'clicked', table: { disable: true }},
        twoOnClick: { action: 'clicked', table: { disable: true }},
        oneIcon: { control: "boolean" },
        twoIcon: { control: "boolean" },
    },
};

const Template = ({ oneIcon, twoIcon, ...props }) => (
    <TwoButtonGroup
        {...props}
        {...(oneIcon ? { oneIcon: faSearch } : {})}
        {...(twoIcon ? { twoIcon: faPlus } : {})}
    />
);

export const Default = Template.bind({});

Default.args = {
    selected: "one",
    oneLabel: "Find",
    twoLabel: "Create",
    oneIcon: true,
    twoIcon: true,
};
