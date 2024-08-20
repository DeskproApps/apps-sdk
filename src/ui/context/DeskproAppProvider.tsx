import { FC, useEffect, useState } from "react";
import { DeskproAppEventType, DeskproAppProviderProps } from "./types";
import { GlobalStyles, lightTheme } from "../theme";
import { createClient } from "../../client/client";
import { Context, IDeskproClient, TargetAction, TargetElementEvent } from "../../client/types";
import { DeskproAppContext } from "./context";
import { Scrollbar, ThemeProvider } from "@deskpro/deskpro-ui";

export const DeskproAppProvider: FC<DeskproAppProviderProps> = ({
  children,
  theme,
  debug,
}: DeskproAppProviderProps) => {
  const [client, setClient] = useState<IDeskproClient | null>(null);
  const [context, setContext] = useState<Context | null>(null);
  const [registeredElements, setRegisteredElements] = useState<string[]>([]);

  useEffect(() => {
    if (client) {
      return;
    }

    const dpClient = createClient({
      runAfterPageLoad: false,
      resizeAfterEvents: false,
    });

    dpClient.onReady((context: Context) => {
      setContext(context);
      document.dispatchEvent(
        new CustomEvent<Context>(DeskproAppEventType.READY, { detail: context })
      );
    });

    dpClient.onShow((context: Context) => {
      setContext(context);
      document.dispatchEvent(
        new CustomEvent<Context>(DeskproAppEventType.SHOW, { detail: context })
      );
    });

    dpClient.onChange((context: Context) => {
      setContext(context);
      document.dispatchEvent(
        new CustomEvent<Context>(DeskproAppEventType.CHANGE, { detail: context })
      );
    });

    dpClient.onTargetAction((action: TargetAction) => {
      setContext(action.context);
      document.dispatchEvent(
        new CustomEvent<TargetAction>(DeskproAppEventType.TARGET_ACTION, { detail: action })
      );
    });

    dpClient.onElementEvent((id, type, payload) => {
      document.dispatchEvent(
        new CustomEvent<TargetElementEvent>(DeskproAppEventType.TARGET_ELEMENT_EVENT, {
          detail: { id, type, payload } as TargetElementEvent,
        })
      );
    });

    dpClient.onAdminSettingsChange((settings) => {
      setContext({ type: "admin_settings", settings }); // Pass more admin context here if we ever have one
      document.dispatchEvent(
        new CustomEvent<Record<string, any>>(DeskproAppEventType.ADMIN_SETTINGS_CHANGE, {
          detail: settings,
        })
      );
    });

    dpClient.run().then(() => setClient(dpClient));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (debug) {
    console.debug(
      client ? "Deskpro apps client is ready" : "Deskpro apps client is initialising..."
    );
  }

  const currentTheme = theme ?? lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <DeskproAppContext.Provider
        value={{ client, context, registeredElements, setRegisteredElements, theme: currentTheme }}
      >
        <Scrollbar style={{height: '100%', width: '100%'}}>{children}</Scrollbar>
      </DeskproAppContext.Provider>
    </ThemeProvider>
  );
};
