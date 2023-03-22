import { lightTheme } from "@deskpro/deskpro-ui";
import * as React from "react";
import { DeskproAppProvider } from "../../context";
import { VerticalDivider as VerticalDividerComp } from "./Divider";

export default {
  title: "Core/Divider",
};

export const VerticalDividerStory = () => (
  <DeskproAppProvider theme={lightTheme}>
    <VerticalDividerComp width={2} style={{ height: "100vh" }} />
  </DeskproAppProvider>
);
