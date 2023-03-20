import * as React from "react";
import { VerticalDivider as VerticalDividerComp } from "./Divider";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Core/Divider",
};

export const VerticalDividerStory = () => <VerticalDividerComp width={20} />;
