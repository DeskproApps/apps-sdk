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
  _startOAuth2Flow: (codeAcquisitionPattern: string, timeout: number) => Promise<StartOAuth2FlowResult>;
  _startStatelessOAuth2Flow: (codeAcquisitionPattern: string, timeout: number) => Promise<StartStatelessOAuth2FlowResult>;
  _pollOAuth2Flow: (state: string) => Promise<PollOAuth2FlowResult>;
  _pollStatelessOAuth2Flow: (state: string) => Promise<PollStatelessOAuth2FlowResult>;
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

export type StartOAuth2FlowResult = {
  state: string;
  codeChallenge: string;
  gatewayAuthorizeUrl: string;
  gatewayCallbackUrl: string;
  deskproCallbackUrl: string;
};

export type StartStatelessOAuth2FlowResult = StartOAuth2FlowResult; // Same for now but may diverge in future

export type PollOAuth2FlowStatus = "Pending"|"Success"|"Fail";

export type PollOAuth2FlowResult = {
  status: PollOAuth2FlowStatus;
  authCodeProxyPlaceholder: string;
  codeVerifierProxyPlaceholder: string;
  error?: string|null;
};

export type PollStatelessOAuth2FlowResult = PollOAuth2FlowResult; // Same for now but may diverge in future

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

  // OAuth 2.0 flow with PKCE support
  startOAuth2Flow: (codeAcquisitionPattern: RegExp, timeout:number) => Promise<StartOAuth2FlowResult>;
  startStatelessOAuth2Flow: (codeAcquisitionPattern: RegExp, timeout:number) => Promise<StartStatelessOAuth2FlowResult>;
  pollOAuth2Flow: (state: string) => Promise<PollOAuth2FlowResult>;
  pollStatelessOAuth2Flow: (state: string) => Promise<PollStatelessOAuth2FlowResult>;

  registerTargetAction: (name: string, type: TargetActionType, options?: TargetActionOptions) => Promise<void>;
  deregisterTargetAction: (name: string) => Promise<void>;
  setAdminSetting: (value: string) => void;
  setAdminSettingInvalid: (message: string, settingName?: string) => void;
  sendDeskproUIMessage: (message: DeskproUIMessage) => Promise<void>;
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

/**
 * Options when starting an OAuth 2.0 flow
 */
export type OAuth2StartOptions = OAuth2CallbackUrlOptions; // Are currently the same thing, but may diverge in future

/**
 * Properties used to "build" the initial authorize URL that the user follows to take them through
 * the IDP's grant flow (login, usually) @see https://www.oauth.com/oauth2-servers/authorization/the-authorization-request/
 */
export type OAuth2StartAuthorizeUrlFnProps = {
  state: string;
  redirectUri: string;
  codeChallenge: string;
};

/**
 * Function used to "build" an authorize URl as per the IDP's instructions. We will give you some
 * predefined values to add to it
 */
export type OAuth2StartAuthorizeUrlFn = (props: OAuth2StartAuthorizeUrlFnProps) => string;

/**
 * After successful auth code, state + processing our poll promise will resolve with the following
 * parameters/proxy placeholders
 */
export type OAuth2StartPollResult = {
  /**
   * Polling status, will continue to poll is status = Pending
   */
  status: PollOAuth2FlowStatus;

  /**
   * Apps proxy placeholder that may be passed in future requests and will be replaced with the
   * value of the acquired authorization code
   */
  authCodeProxyPlaceholder: string;

  /**
   * Apps proxy placeholder that may be passed in future requests that contains the complementary
   * PKCE code verifier as defined in @see OAuth2StartAuthorizeUrlFnProps["codeChallenge"]
   */
  codeVerifierProxyPlaceholder: string;

  /**
   * If there was an error during auth code acquisition then return it here
   */
  error?: string|null;
};

/**
 * Values returned to the app after "starting" and OAuth flow
 */
export type OAuth2Start = {
  /**
   * Deskpro will hand this "augmented" authorize URL back to you, and this is the URL you must use
   * in place of the actual authorize URL that the IDP prescribes
   */
  authorizeUrl: string;

  /**
   * The poll promise will resolve when we have successfully acquired and processed the access code
   * and state from the IDP's grant flow. Will reject on failure (unsuccessfully acquisition of code or
   * state as well as any OAuth errors that may occur)
   *
   * Running this poll function will START polling, the promise resolving/rejecting ENDS the promise
   */
  poll: () => Promise<OAuth2StartPollResult>;
};

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

  /**
   * Start an OAuth 2.0 flow from an app
   *
   * @param authorizeUrlFn Build the "authorize" URl as prescribed by the IDP using some values that we give you
   * @param codeAcquisitionPattern RegEx pattern to acquire the access code from the callback URL that the IDP redirects you to
   * @param options
   */
  start(
    authorizeUrlFn: OAuth2StartAuthorizeUrlFn,
    codeAcquisitionPattern: RegExp,
    options?: OAuth2StartOptions
  ): Promise<OAuth2Start>;

  /**
   * Start an OAuth 2.0 flow from an app before the app is installed (the app cannot have any state,
   * so we have to run this OAuth flow in "stateless" mode)
   *
   * @param authorizeUrlFn Build the "authorize" URl as prescribed by the IDP using some values that we give you
   * @param codeAcquisitionPattern RegEx pattern to acquire the access code from the callback URL that the IDP redirects you to
   * @param options
   */
  startStateless(
    authorizeUrlFn: OAuth2StartAuthorizeUrlFn,
    codeAcquisitionPattern: RegExp,
    options?: OAuth2StartOptions
  ): Promise<OAuth2Start>;
}
