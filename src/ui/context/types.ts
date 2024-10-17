import { DeskproTheme } from "@deskpro/deskpro-ui";
import { AppElement, Context, IDeskproClient, TargetAction } from "../../client/types";
import { ReactNode } from "react";

export interface DeskproAppProviderProps {
  children: ReactNode;
  theme?: DeskproTheme;
  debug?: boolean,
}

export type DeskproAppContextValue<Data = any, Settings = any> = {
  client: IDeskproClient|null,
  context: Context<Data, Settings>|null,
  theme: DeskproTheme,
  registeredElements: string[];
  setRegisteredElements: (value: (((prevState: string[]) => string[]) | string[])) => void;
} | null;

export interface DeskproAppClient {
  client: IDeskproClient|null;
}

export interface LatestDeskproAppContext<Data, Settings> {
  context: Context<Data, Settings>|null;
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
  ADMIN_SETTINGS_CHANGE = "change.settings.admin.app.deskpro",
}

export interface DeskproAppEventHooks {
  onReady?: (context: Context) => void;
  onShow?: (context: Context) => void;
  onChange?: (context: Context) => void;
  onTargetAction?: <Payload = any>(action: TargetAction<Payload>) => void;
  onElementEvent?: <Payload = any>(id: string, type: string, payload?: Payload) => void;
  onAdminSettingsChange?: (settings: Record<string, any>) => void;
}

export type RegisterElement = (id: string, element: AppElement) => void;

export type DeRegisterElement = (id: string) => void;

export type ClearElements = () => void;
