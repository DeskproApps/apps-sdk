import { CSSProperties } from "react";
import "./CreateLinkIssue.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useDeskproAppTheme } from "../../context";
import { Button, Stack } from "@deskpro/deskpro-ui";

export interface TwoButtonGroupProps {
    selected: "one"|"two";
    oneLabel: string;
    twoLabel: string;
    oneOnClick: () => {};
    twoOnClick: () => {};
    oneIcon?: IconDefinition;
    twoIcon?: IconDefinition;
}

export const TwoButtonGroup = ({ selected, oneOnClick, twoOnClick, oneLabel, twoLabel, oneIcon, twoIcon }: TwoButtonGroupProps) => {
    const { theme: { colors } } = useDeskproAppTheme();

    const group: CSSProperties = {
        marginBottom: "10px",
        padding: "6px 6px 7px",
        borderRadius: "6px",
        backgroundColor: colors.grey10,
    };

    const unselected: CSSProperties = {
        backgroundColor: "transparent",
        borderColor: "transparent",
        boxShadow: "none",
    };

    return (
        <Stack justify="space-between" align="center" style={group}>
            <Button
                text={oneLabel}
                intent="secondary"
                icon={oneIcon}
                size="large"
                style={selected === "two" ? unselected : {}}
                onClick={oneOnClick}
            />
            <Button
                text={twoLabel}
                intent="secondary"
                icon={twoIcon}
                size="large"
                style={selected === "one" ? unselected : {}}
                onClick={twoOnClick}
            />
        </Stack>
    );
};
