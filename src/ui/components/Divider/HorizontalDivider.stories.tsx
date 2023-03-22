import { lightTheme } from "@deskpro/deskpro-ui";
import * as React from "react";
import { DeskproAppProvider } from "../../context";
import { HorizontalDivider as HorizontalDividerComp } from "./Divider";

export default {
  title: "Core/Divider",
};

export const HorizontalDividerStory = () => (
  <DeskproAppProvider theme={lightTheme}>
    <HorizontalDividerComp width={2} />
  </DeskproAppProvider>
);
