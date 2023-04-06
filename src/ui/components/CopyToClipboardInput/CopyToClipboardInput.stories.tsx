import { withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { CopyToClipboardInput } from "./CopyToClipboardInput";

export default {
  title: "Core/CopyToClipboardInput",
  decorators: [withKnobs],
};

export const CopyToClipboardInputStory = () => {
  return (
    <CopyToClipboardInput value="https://www.deskpro.com/"/>
  );
};
