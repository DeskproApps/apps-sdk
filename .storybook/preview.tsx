import React from "react";

import "modern-normalize/modern-normalize.css";
import "flatpickr/dist/themes/light.css";
import "tippy.js/dist/tippy.css";
import "simplebar/dist/simplebar.min.css";
import "@deskpro/deskpro-ui/dist/deskpro-ui.css";
import "@deskpro/deskpro-ui/dist/deskpro-custom-icons.css";
import { DeskproAppProvider } from "../src";
import { AppWrapper } from "./structure";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <AppWrapper>
        <Story/>
      </AppWrapper>
    ),
    (Story) => (
      <DeskproAppProvider>
        <Story/>
      </DeskproAppProvider>
    ),
  ],
};

export default preview;
