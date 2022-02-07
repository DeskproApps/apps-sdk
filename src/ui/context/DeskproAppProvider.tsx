import React, { FC, useEffect, useState } from "react";
import { DeskproAppEventType, DeskproAppProviderProps } from "./types";
import { GlobalStyles, lightTheme } from "../theme";
import { createClient } from "../../client/client";
import { Context, IDeskproClient, TargetAction, TargetElementEvent } from "../../client/types";
import { DeskproAppContext } from "./context";
import { ThemeProvider } from "styled-components";

import "flatpickr/dist/themes/light.css";
import "notyf/notyf.min.css";
import "tippy.js/dist/tippy.css";
import "simplebar/dist/simplebar.min.css";
import "flag-icon-css/css/flag-icons.min.css";

export const DeskproAppProvider: FC<DeskproAppProviderProps> = ({ children, theme, debug }: DeskproAppProviderProps) => {
  const [client, setClient] = useState<IDeskproClient|null>(null);

  useEffect(() => {
    if (client) {
      return;
    }

    const dpClient = createClient({
      runAfterPageLoad: false,
      resizeAfterEvents: false,
    });

    dpClient.onReady((context: Context) => {
      document.dispatchEvent(
        new CustomEvent<Context>(DeskproAppEventType.READY, { detail: context })
      );
    });

    dpClient.onShow((context: Context) => {
      document.dispatchEvent(
        new CustomEvent<Context>(DeskproAppEventType.SHOW, { detail: context })
      );
    });

    dpClient.onChange((context: Context) => {
      document.dispatchEvent(
        new CustomEvent<Context>(DeskproAppEventType.CHANGE, { detail: context })
      );
    });

    dpClient.onTargetAction((action: TargetAction) => {
      document.dispatchEvent(
        new CustomEvent<TargetAction>(DeskproAppEventType.TARGET_ACTION, { detail: action })
      );
    });

    dpClient.onElementEvent((id, type, payload) => {
      document.dispatchEvent(
        new CustomEvent<TargetElementEvent>(DeskproAppEventType.TARGET_ELEMENT_EVENT, { detail: {id, type, payload} as TargetElementEvent })
      );
    });

    dpClient.run().then(() => setClient(dpClient));
  }, []);

  if (debug) {
    console.debug(
        client
            ? "Deskpro apps client is ready"
            : "Deskpro apps client is initialising..."
    );
  }

  const currentTheme = theme ?? lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <DeskproAppContext.Provider value={{ client, theme: currentTheme }}>
        {children}
      </DeskproAppContext.Provider>
    </ThemeProvider>
  );
};
