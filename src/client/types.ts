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
  | "admin_settings"
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
  | "reply_box_email_item_selection"
  | "on_reply_box_email"
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
      noteId: string;
      note: string;
      attachments: File[];
    };
  }
  | {
    type: "reply_box_email_item_selection";
    payload: {
      id: string;
      selected: boolean;
    }[];
  }
  | {
    type: "on_reply_box_email";
    payload: {
      emailId: string;
      email: string;
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

export type TicketReplyEmailItemSelectionTargetAction = {
  type: "reply_box_email_item_selection";
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

export type OnTicketReplyEmailTargetAction = {
  type: "on_reply_box_email";
  name: string;
  title: string;
  description: string;
  appId: string;
  appInstanceId: string;
  appHash: string;
  appIconUrl: string;
};

export type TargetActionData = TicketAdditionTargetAction
  | TicketReplyNoteItemSelectionTargetAction
  | OnTicketReplyNoteTargetAction
  | TicketReplyEmailItemSelectionTargetAction
  | OnTicketReplyEmailTargetAction
;

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- onTargetAction complains if removed
export type TargetActionChildMethod<Payload = any> = <Payload>(action: TargetAction<Payload>) => void;

export type ElementEventChildMethod = <Payload = any>(id: string, type: string, payload?: Payload) => void;

export type ChildMethods = {
  onReady: ChildMethod;
  onShow: ChildMethod;
  onChange: ChildMethod;
  onTargetAction: TargetActionChildMethod;
  onElementEvent: ElementEventChildMethod;
  onAdminSettingsChange: (settings: Record<string, any>) => void;
  [name: string]: ChildMethod | TargetActionChildMethod | ElementEventChildMethod;
};

export interface TicketSidebarDeskproCallSender {
  setTitle: (title: string) => void;
  setBadgeCount: (count: number) => void;
}

export interface CoreCallSender {
  _setHeight: (height: number) => void;
  _setWidth: (width: number | string) => void;
  _registerElement: (id: string, element: AppElement) => Promise<void>;
  _deregisterElement: (id: string) => Promise<void>;
  _getProxyAuth: () => Promise<ProxyAuthPayload>;
  _getAdminGenericProxyAuth: () => Promise<ProxyAuthPayload>;
  _entityAssociationGet: () => Promise<any>;
  _entityAssociationSet: () => Promise<any>;
  _ticketChannelsUtil: () => Promise<any>;
  _entityAssociationList: () => Promise<any>;
  _entityAssociationDelete: () => Promise<any>;
  _entityAssociationCountEntities: () => Promise<any>;
  _stateSet: (name: string, value: string, options?: StateOptions) => Promise<any>;
  _userStateSet: (name: string, value: string, options?: StateOptions) => Promise<any>;
  _stateGet: (name: string) => Promise<string>;
  _userStateGet: (name: string) => Promise<any>;
  _stateHas: (name: string) => Promise<boolean>;
  _userStateHas: (name: string) => Promise<boolean>;
  _stateDelete: (name: string) => Promise<any>;
  _userStateDelete: (name: string) => Promise<any>;
  _settingSet: (name: string, value: any) => Promise<any>;
  _settingsSet: (settings: string) => Promise<any>;
  _blockingSet: (blocking: boolean) => Promise<any>;
  _registerTargetAction: (name: string, type: TargetActionType, options?: TargetActionOptions) => Promise<void>;
  _deregisterTargetAction: (name: string) => Promise<void>;
  _getOAuth2CallbackUrl: (name: string, tokenAcquisitionPattern: string, timeout: number, expires?: Date) => Promise<GetOAuth2CallbackUrlResponse>;
  _getStaticOAuth2CallbackUrl: (key: string, tokenAcquisitionPattern: string, keyAcquisitionPattern: string, timeout: number, expires?: Date) => Promise<GetStaticOAuth2CallbackUrlResponse>;
  _getStaticOAuth2CallbackUrlValue: () => Promise<string>;
  _getStaticOAuth2Token: (key: string) => Promise<string|null>;
  _setAdminSetting: (value: string) => void;
  _setAdminSettingInvalid: (message: string, settingName?: string) => void;
  _sendDeskproUIMessage: (message: DeskproUIMessage) => Promise<void>;
}

export type DeskproCallSender = CoreCallSender & TicketSidebarDeskproCallSender;

export interface DeskproClientOptions {
  /**
   * Run client after page load when DOM is available
   */
  runAfterPageLoad?: boolean;

  settings?: Record<string, unknown>;

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
  | {
    type: "cta_external_link";
    url: string;
    hasIcon: boolean;
  }
;

export interface StateOptions {
  /**
   * Is this state value user by the backend only? I.e. will it be passed to the apps
   * proxy to be used by a placeholder - therefore not available to the state getters
   * via the JS client
   */
  backend?: boolean;

  /**
   * Set an expiry TTL date for this state var. If an expiry date has passed, then hasState*() and getState*() will
   * not return items for a given key/path
   */
  expires?: Date;
}

export type UserStateOptions = StateOptions

export interface SetStateResponse {
  isSuccess: boolean;
  errors: string[];
}

export interface GetStateResponse<T> {
  name: string;
  data: T|null;
}

export interface GetOAuth2CallbackUrlResponse {
  url: string;
  statePath: string;
  statePathPlaceholder: string;
}

export interface GetStaticOAuth2CallbackUrlResponse {
  url: string;
}

export interface IDeskproClient {
  run: () => Promise<void>;
  onReady: (cb: ChildMethod) => void;
  onShow: (cb: ChildMethod) => void;
  onChange: (cb: ChildMethod) => void;
  onTargetAction: <Payload = any>(cb: TargetActionChildMethod<Payload>) => void;
  onAdminSettingsChange: (cb: (settings: Record<string, any>) => void) => void;
  getProxyAuth: () => Promise<ProxyAuthPayload>;
  getAdminGenericProxyAuth: () => Promise<ProxyAuthPayload>;
  resize: (height?: number) => void;
  setWidth: (width: number | string) => void;
  setHeight: (height: number) => void;
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
  hasState: (name: string) => Promise<boolean>;
  hasUserState: (name: string) => Promise<boolean>;
  deleteState: (name: string) => Promise<boolean>;
  deleteUserState: (name: string) => Promise<boolean>;
  setSetting: <T>(name: string, value: T) => Promise<void>;
  setSettings: (settings: Record<string, any>) => Promise<void>;
  setBlocking: (blocking: boolean) => Promise<void>;
  getOAuth2CallbackUrl: (name: string, tokenAcquisitionPattern: string, timeout: number, expires?: Date) => Promise<GetOAuth2CallbackUrlResponse>;
  getStaticOAuth2CallbackUrl: (key: string, tokenAcquisitionPattern: string, keyAcquisitionPattern: string, timeout: number, expires?: Date) => Promise<GetStaticOAuth2CallbackUrlResponse>;
  getStaticOAuth2CallbackUrlValue: () => Promise<string>;
  getStaticOAuth2Token: (key: string) => Promise<string|null>;
  registerTargetAction: (name: string, type: TargetActionType, options?: TargetActionOptions) => Promise<void>;
  deregisterTargetAction: (name: string) => Promise<void>;
  setAdminSetting: (value: string) => void;
  setAdminSettingInvalid: (message: string, settingName?: string) => void;
  sendDeskproUIMessage: (message: DeskproUIMessage) => Promise<void>;
  ticketChannelsUtil: () => Promise<any>;
  getEntityAssociation(name: string, entityId: string): IEntityAssociation;
  oauth2(): IOAuth2;
  deskpro(): IDeskproUI;
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

/**
 * Send arbitrary content to the "active" ticket reply box RTE
 */
export type DeskproUIMessageAppendToActiveTicketReplyBox = {
  type: "append_to_active_ticket_reply_box";
  content: string;
};

/**
 * Append link to the "active" ticket reply box RTE
 */
export type DeskproUIMessageAppendLinkToActiveTicketReplyBox = {
  type: "append_link_to_active_ticket_reply_box";
  url: string;
  text: string;
  title?: string;
};

/**
 * Trigger a success alert
 */
export type DeskproUIMessageAlertSuccess = {
  type: "alert_success";
  text: string;
  duration?: number;
};

/**
 * Trigger a error alert
 */
export type DeskproUIMessageAlertError = {
  type: "alert_error";
  text: string;
  duration?: number;
};

/**
 * Dismiss all alerts
 */
export type DeskproUIMessageAlertDismiss = {
  type: "alert_dismiss";
};

export type DeskproUIMessage =
    DeskproUIMessageAppendToActiveTicketReplyBox
    | DeskproUIMessageAppendLinkToActiveTicketReplyBox
    | DeskproUIMessageAlertSuccess
    | DeskproUIMessageAlertError
    | DeskproUIMessageAlertDismiss
;

export interface IDeskproUI {
  send: (message: DeskproUIMessage) => Promise<void>;
  appendContentToActiveTicketReplyBox: (content: string) => Promise<void>;
  appendLinkToActiveTicketReplyBox(url: string, text: string, title?: string): Promise<void>;
  alertSuccess: (text: string, duration?: number) => Promise<void>;
  alertError: (text: string, duration?: number) => Promise<void>;
  alertDismiss: () => Promise<void>;
}

export interface OAuth2CallbackUrlOptions {
  /**
   * Token acquisition polling interval in milliseconds
   */
  pollInterval?: number;

  /**
   * Token acquisition timeout in milliseconds
   */
  timeout?: number;

  /**
   * Don't block the app whilst polling for an access code/token
   */
  noBlockWhenPolling?: boolean;

  /**
   * UTC date/time when this token expires (sets the TTL of the stored token)
   */
  expires?: Date;
}

export type OAuth2CallbackUrlPoll = () => Promise<{ statePath: string; statePathPlaceholder: string; }>;

export type OAuth2StaticCallbackUrlPoll = () => Promise<{ token: string; }>;

export interface OAuth2CallbackUrl {
  /**
   * URL used to pass to the vendor's auth page as the "redirect URL"
   */
  callbackUrl: string;

  /**
   * Used to poll for the token. This promise will resolve when the user has successfully authorized the auth request and
   * the token has been successfully captured by Deskpro
   */
  poll: OAuth2CallbackUrlPoll;
}

export interface OAuth2StaticCallbackUrl {
  /**
   * URL used to pass to the vendor's auth page as the "redirect URL"
   */
  callbackUrl: string;

  /**
   * Used to poll for the token. This promise will resolve when the user has successfully authorized the auth request and
   * the token has been successfully captured by Deskpro
   */
  poll: OAuth2StaticCallbackUrlPoll;
}

export type HasOAuth2Token = () => Promise<boolean|undefined>;

export interface DeferredOAuth2CallbackUrl {
  /**
   * When isReady is TRUE then the details of the callback URL will be available in the "callback" object
   */
  isReady: boolean;

  callback?: {
    /**
     * URL used to pass to the vendor's auth page as the "redirect URL"
     */
    callbackUrl: string;

    /**
     * Used to poll for the token. This promise will resolve when the user has successfully authorized the auth request and
     * the token has been successfully captures by Deskpro
     */
    poll: OAuth2CallbackUrlPoll;

    /**
     * Utility to detect an already existing token
     */
    hasToken: HasOAuth2Token;
  };
}

export interface IOAuth2 {
  /**
   * Get an OAuth2 callback URL
   *
   * @param name Name of the token, e.g. "jira" (this will later be used to create the state var for the token)
   * @param tokenAcquisitionPattern RegEx pattern to acquire the access token from the callback URL
   * @param options
   */
  getCallbackUrl(
      name: string,
      tokenAcquisitionPattern: RegExp,
      options?: OAuth2CallbackUrlOptions
  ): Promise<OAuth2CallbackUrl>;

  /**
   * Get an OAuth2 static callback URL for agent operations
   *
   * @param key Generated "random" key used to link the auth request to the returned access token
   * @param tokenAcquisitionPattern RegEx pattern to acquire the access token from the callback URL
   * @param keyAcquisitionPattern RegEx pattern to acquire the key from the callback URL
   * @param options
   */
  getGenericCallbackUrl(
      key: string,
      tokenAcquisitionPattern: RegExp,
      keyAcquisitionPattern: RegExp,
      options?: OAuth2CallbackUrlOptions
  ): Promise<OAuth2StaticCallbackUrl>;

  /**
   * Get an OAuth2 static callback URL for admin operations
   *
   * @param key Generated "random" key used to link the auth request to the returned access token
   * @param tokenAcquisitionPattern RegEx pattern to acquire the access token from the callback URL
   * @param keyAcquisitionPattern RegEx pattern to acquire the key from the callback URL
   * @param options
   */
  getAdminGenericCallbackUrl(
      key: string,
      tokenAcquisitionPattern: RegExp,
      keyAcquisitionPattern: RegExp,
      options?: OAuth2CallbackUrlOptions
  ): Promise<OAuth2StaticCallbackUrl>;
}
