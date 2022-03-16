export interface User {
  firstName: string;
  lastName: string;
  displayName: string;
  email?: string;
}

export interface TicketContext {
  id: string;
  primaryUser: User;
}

export type ContextType = "ticket"
  | "user"
  | "organisation"
  | "knowledge_base"
  | "news"
  | "download"
  | "guide_topic"
  | "community_topic"
  | "global"
;

export interface Context<Data = any, Settings = any> {
  type: ContextType;
  settings: Settings;
  data?: Data;
}

export interface ProxyAuthPayload {
  proxyUrl: string;
  token: string;
  appInstanceId: string;
}

export type TargetActionType =
  "ticket_addition"
  | "reply_box_note_item_selection"
  | "on_reply_box_note"
;

export type TargetActionPayload =
  {
    type: "ticket_addition";
  }
  | {
    type: "reply_box_note_item_selection";
    payload: {
      id: string;
      selected: boolean;
    }[];
  }
  | {
    type: "on_reply_box_note";
    payload: {
      note: string;
      attachments: File[];
    };
  }
;

export type TicketAdditionTargetAction = {
  type: "ticket_addition";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
};

export type TicketReplyNoteItemSelectionTargetAction = {
  type: "reply_box_note_item_selection";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
  data: {
    id: string;
    title: string;
    selected: boolean;
  }[];
};

export type OnTicketReplyNoteTargetAction = {
  type: "on_reply_box_note";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
};

export type TargetActionData = TicketAdditionTargetAction | TicketReplyNoteItemSelectionTargetAction | OnTicketReplyNoteTargetAction;

export interface TargetAction<P = any> {
  name: string;
  type: TargetActionType;
  context: Context;
  payload?: P;
  subject: string;
}

export interface TargetElementEvent<Payload = any> {
  id: string;
  type: string;
  payload?: Payload;
}

export type AppElementPayload<T = any> = T;

export type ChildMethod = (context: Context) => void;

export type TargetActionChildMethod<Payload = any> = <Payload>(action: TargetAction<Payload>) => void;

export type ElementEventChildMethod = <Payload = any>(id: string, type: string, payload?: Payload) => void;

export type ChildMethods = {
  onReady: ChildMethod;
  onShow: ChildMethod;
  onChange: ChildMethod;
  onTargetAction: TargetActionChildMethod;
  onElementEvent: ElementEventChildMethod;
  [name: string]: ChildMethod | TargetActionChildMethod | ElementEventChildMethod;
};

export interface TicketSidebarDeskproCallSender {
  setTitle: (title: string) => void;
  setBadgeCount: (count: number) => void;
}

export interface CoreCallSender {
  _setHeight: (height: number) => void;
  _registerElement: (id: string, element: AppElement) => Promise<void>;
  _deregisterElement: (id: string) => Promise<void>;
  _getProxyAuth: () => Promise<ProxyAuthPayload>;
  _entityAssociationGet: () => Promise<any>;
  _entityAssociationSet: () => Promise<any>;
  _entityAssociationList: () => Promise<any>;
  _entityAssociationDelete: () => Promise<any>;
  _entityAssociationCountEntities: () => Promise<any>;
  _stateSet: (name: string, value: string, options?: StateOptions) => Promise<any>;
  _userStateSet: (name: string, value: string, options?: StateOptions) => Promise<any>;
  _stateGet: (name: string) => Promise<string>;
  _userStateGet: (name: string) => Promise<any>;
  _stateDelete: (name: string) => Promise<any>;
  _userStateDelete: (name: string) => Promise<any>;
  _settingSet: (name: string, value: string) => Promise<any>;
  _settingsSet: (settings: string) => Promise<any>;
  _blockingSet: (blocking: boolean) => Promise<any>;
  _registerTargetAction: (name: string, type: TargetActionType, options?: TargetActionOptions) => Promise<void>;
  _deregisterTargetAction: (name: string) => Promise<void>;
}

export type DeskproCallSender = CoreCallSender & TicketSidebarDeskproCallSender;

export interface DeskproClientOptions {
  /**
   * Run client after page load when DOM is available
   */
  runAfterPageLoad?: boolean;

  /**
   * Call client.resize() after any app event is received and
   * associated hook called
   */
  resizeAfterEvents?: boolean;
}

export type AppElement<Payload = any> =
  {
    type: "plus_button";
    payload?: Payload;
  }
  | {
    type: "home_button";
    payload?: Payload;
  }
  | {
    type: "refresh_button";
  }
  | {
    type: "menu";
    items: {
      title: string;
      payload?: Payload;
    }[],
  }
  | {
    type: "edit_button";
    payload?: Payload;
  }
;

export interface StateOptions {
  /**
   * Is this state value user by the backend only? I.e. will it be passed to the apps
   * proxy to be used by a placeholder - therefore not available to the state getters
   * via the JS client
   */
  backend?: boolean;
}

export interface UserStateOptions extends StateOptions {
}

export interface SetStateResponse {
  isSuccess: boolean;
  errors: string[];
}

export interface GetStateResponse<T> {
  name: string;
  data: T|null;
}

export interface IDeskproClient {
  run: () => Promise<void>;
  onReady: (cb: ChildMethod) => void;
  onShow: (cb: ChildMethod) => void;
  onChange: (cb: ChildMethod) => void;
  onTargetAction: <Payload = any>(cb: TargetActionChildMethod<Payload>) => void;
  getProxyAuth: () => Promise<ProxyAuthPayload>;
  resize: (height?: number) => void;
  registerElement: (id: string, element: AppElement) => void;
  deregisterElement: (id: string) => void;
  onElementEvent: (cb: ElementEventChildMethod) => void;
  setBadgeCount: (count: number) => void;
  setTitle: (title: string) => void;
  entityAssociationGet: (entityId: string, name: string, key: string) => Promise<string|null>;
  entityAssociationSet: (entityId: string, name: string, key: string, value?: string) => Promise<void>;
  entityAssociationDelete: (entityId: string, name: string, key: string) => Promise<void>;
  entityAssociationList: (entityId: string, name: string) => Promise<string[]>;
  entityAssociationCountEntities: (name: string, key: string) => Promise<number>;
  setState: <T>(name: string, value: T, options?: StateOptions) => Promise<SetStateResponse>;
  setUserState: <T>(name: string, value: T, options?: UserStateOptions) => Promise<SetStateResponse>;
  getState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  getUserState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  deleteState: (name: string) => Promise<boolean>;
  deleteUserState: (name: string) => Promise<boolean>;
  setSetting: <T>(name: string, value: T) => Promise<void>;
  setSettings: (settings: Record<string, any>) => Promise<void>;
  setBlocking: (blocking: boolean) => Promise<void>;
  registerTargetAction: (name: string, type: TargetActionType, options?: TargetActionOptions) => Promise<void>;
  deregisterTargetAction: (name: string) => Promise<void>;
  getEntityAssociation(name: string, entityId: string): IEntityAssociation;
}

export interface TargetActionOptions<Payload = any> {
  title?: string;
  description?: string;
  payload?: Payload;
}

export interface IEntityAssociation {
  set: <T>(key: string, value?: T) => Promise<void>;
  delete: (key: string) => Promise<void>;
  get: <T>(key: string) => Promise<T|null>;
  list: () => Promise<string[]>;
}
