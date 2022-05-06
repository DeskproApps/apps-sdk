import React from "react";

import "modern-normalize/modern-normalize.css";
import "flatpickr/dist/themes/light.css";
import "tippy.js/dist/tippy.css";
import "simplebar/dist/simplebar.min.css";

import { GlobalStyles, lightTheme, ThemeProvider } from "@deskpro/deskpro-ui";
import "@deskpro/deskpro-ui/dist/deskpro-ui.css";
import "@deskpro/deskpro-ui/dist/deskpro-custom-icons.css";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
    (Story) => <Story />,
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
