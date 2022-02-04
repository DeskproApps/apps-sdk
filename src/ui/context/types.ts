import { DeskproTheme } from "@deskpro/deskpro-ui";
import { AppElementPayload, Context, IDeskproClient, TargetAction } from "../../client/types";
import { ReactNode } from "react";

export interface DeskproAppProviderProps {
  children: JSX.Element | ReactNode;
  theme?: DeskproTheme;
}

export type DeskproAppContextValue = { client: IDeskproClient|null, theme: DeskproTheme } | null;

export interface DeskproAppClient {
  client: IDeskproClient|null;
}

export interface DeskproAppTheme {
  theme: DeskproTheme;
}

export enum DeskproAppEventType {
  READY = "ready.app.deskpro",
  SHOW = "show.app.deskpro",
  CHANGE = "change.app.deskpro",
  TARGET_ACTION = "target_action.app.deskpro",
  TARGET_ELEMENT_EVENT = "target_element_event.app.deskpro",
}

export interface DeskproAppEventHooks {
  onReady?: (context: Context) => void;
  onShow?: (context: Context) => void;
  onChange?: (context: Context) => void;
  onTargetAction?: (action: TargetAction) => void;
  onElementEvent?: (id: string, type: string, payload?: AppElementPayload) => void;
}
