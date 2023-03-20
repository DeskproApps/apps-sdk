import * as React from "react";
import { HorizontalDivider as HorizontalDividerComp } from "./Divider";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Core/Divider",
};

export const HorizontalDividerStory = () => (
  <HorizontalDividerComp width={20} />
);
