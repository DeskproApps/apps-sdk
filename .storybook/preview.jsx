import React from "react";
import { ThemeProvider } from "styled-components";

import "modern-normalize/modern-normalize.css";
import "flatpickr/dist/themes/light.css";
import "notyf/notyf.min.css";
import "tippy.js/dist/tippy.css";
import "simplebar/dist/simplebar.min.css";
import "flag-icon-css/css/flag-icons.min.css";

import { lightTheme, GlobalStyles } from "@deskpro/deskpro-ui";
import "@deskpro/deskpro-ui/deskpro-ui.css";
import "@deskpro/deskpro-ui/deskpro-custom-icons.css";

import { IntlProvider } from "react-intl";
import { defaultMessages } from "@deskpro-product/language/messages/defaultMessages";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <IntlProvider locale={"en-GB"} messages={defaultMessages}>
      <Story />
    </IntlProvider>
  ),
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
