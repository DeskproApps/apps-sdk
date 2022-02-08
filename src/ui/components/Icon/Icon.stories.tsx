import * as React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import styled, { useTheme } from "styled-components";
import { P13 } from "../Typography";
import * as faIcons from "@fortawesome/free-regular-svg-icons";

import { AnyIcon, Icon, isFaIcon } from "./Icon";
import { ThemeColorKey } from "../../theme";

export default {
  title: "Core/Icon",
  decorators: [withKnobs],
};

const IconsGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-auto-rows: auto;
  max-width: 84em;
`;

const IconGridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  p {
    text-align: center;
  }
  ${Icon} {
    font-size: 32px;
  }
`;

export const FontAwesomeIcons = () => {
  const theme = useTheme();
  const color = select(
    "FontAwesomeIcons Color",
    // @ts-ignore
    Object.entries(theme.colors)
      .filter(([, color]) => typeof color === "string")
      .map(([key]) => key),
    "brandPrimary"
  );
  return (
    <IconsGrid>
      {[...Object.entries(faIcons)]
        .filter(([, icon]) => isFaIcon(icon as AnyIcon))
        .map(([faId, icon], index) => (
          <IconGridItem key={index}>
            <Icon themeColor={color as ThemeColorKey} key={faId} icon={icon as AnyIcon} />
            <P13>{faId}</P13>
          </IconGridItem>
        ))}
    </IconsGrid>
  );
};
