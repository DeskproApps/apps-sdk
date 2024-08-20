import { CopyToClipboardInput } from "./CopyToClipboardInput";
import type { StoryObj } from "@storybook/react";

export default {
  title: "Core/CopyToClipboardInput",
  component: CopyToClipboardInput,
};

export const Default: StoryObj<typeof CopyToClipboardInput> = {
  args: {
    value: "https://www.google.com",
  },
};
