import React from "react";
import { ComponentStory } from "@storybook/react";
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

export const Default: ComponentStory<typeof TwoButtonGroup> = ({ oneIcon, twoIcon, ...props }) => (
    <TwoButtonGroup
        {...props}
        {...(oneIcon ? { oneIcon: faSearch } : {})}
        {...(twoIcon ? { twoIcon: faPlus } : {})}
    />
);

Default.args = {
    selected: "one",
    oneLabel: "Find",
    twoLabel: "Create",
    oneIcon: true as never,
    twoIcon: true as never,
};
