import { connectToParent, Connection } from "penpal";
import {
  IDeskproClient,
  ChildMethod,
  ChildMethods,
  ProxyAuthPayload,
  DeskproCallSender,
  Context,
  DeskproClientOptions,
  TargetActionChildMethod,
  TargetAction,
  IEntityAssociation,
  AppElement,
  ElementEventChildMethod,
  StateOptions,
  SetStateResponse, UserStateOptions, GetStateResponse
} from "./types";
import { CallSender } from "penpal/lib/types";

class EntityAssociation implements IEntityAssociation {
  constructor(
    private client: IDeskproClient,
    private name: string,
    private entityId: string
  ) {}

  async get<T>(key: string): Promise<T|null> {
    const value = await this.client.entityAssociationGet(this.entityId, this.name, key);
    return value ? JSON.parse(value) : null;
  }

  list(): Promise<string[]> {
    return this.client.entityAssociationList(this.entityId, this.name);
  }

  set<T>(key: string, value?: T): Promise<void> {
    return this.client.entityAssociationSet(this.entityId, this.name, key, value ? JSON.stringify(value) : undefined);
  }

  delete(key: string): Promise<void> {
    return this.client.entityAssociationDelete(this.entityId, this.name, key);
  }
}

export class DeskproClient implements IDeskproClient {

  private parentMethods: ChildMethods = {
    onReady: () => undefined,
    onShow: () => undefined,
    onChange: () => undefined,
    onTargetAction: () => undefined,
    onElementEvent: () => undefined,
  };

  // Core Methods
  public getProxyAuth: () => Promise<ProxyAuthPayload>;
  public resize: (height?: number) => void;
  public registerElement: (id: string, element: AppElement) => void;
  public deregisterElement: (id: string) => void;

  // Sidebar Methods
  public setBadgeCount: (count: number) => void;
  public setTitle: (title: string) => void;

  // EntityAssociation
  public entityAssociationSet: (entityId: string, name: string, key: string, value?: string) => Promise<void>;
  public entityAssociationDelete: (entityId: string, name: string, key: string) => Promise<void>;
  public entityAssociationGet: (entityId: string, name: string, key: string) => Promise<string|null>;
  public entityAssociationList: (entityId: string, name: string) => Promise<string[]>;
  public entityAssociationCountEntities: (name: string, key: string) => Promise<number>;

  // State
  public setState: <T>(name: string, value: T, options?: StateOptions) => Promise<SetStateResponse>;
  public setUserState: <T>(name: string, value: T, options?: UserStateOptions) => Promise<SetStateResponse>;
  public getState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  public getUserState: <T>(name: string) => Promise<GetStateResponse<T>[]>;
  public deleteState: (name: string) => Promise<boolean>;
  public deleteUserState: (name: string) => Promise<boolean>;

  constructor(
    private readonly parent: <T extends object = CallSender>(options?: object) => Connection<T>,
    private readonly options: DeskproClientOptions
  ) {
    this.getProxyAuth = () => new Promise<ProxyAuthPayload>(() => {});
    this.resize = () => {};
    this.registerElement = () => {};
    this.deregisterElement = () => {};
    this.setBadgeCount = () => {};
    this.setTitle = () => {};

    this.entityAssociationSet = async () => {};
    this.entityAssociationDelete = async () => {};
    this.entityAssociationGet = async () => null;
    this.entityAssociationList = async () => [""];
    this.entityAssociationCountEntities = async () => 0;

    this.setState = async () => ({ isSuccess: false, errors: [] });
    this.setUserState = async () => ({ isSuccess: false, errors: [] });
    this.getState = async () => [];
    this.getUserState = async () => [];
    this.deleteState = async () => false;
    this.deleteUserState = async () => false;

    if (this.options.runAfterPageLoad) {
      window.addEventListener("load", () => this.run());
    }
  }

  public async run(): Promise<void> {
    const parent = await this.parent<DeskproCallSender>({
      methods: {
        _onReady: this.parentMethods.onReady,
        _onShow: this.parentMethods.onShow,
        _onChange: this.parentMethods.onChange,
        _onTargetAction: this.parentMethods.onTargetAction,
        _onElementEvent: this.parentMethods.onElementEvent,
      },
    }).promise;

    // Core
    if (parent._getProxyAuth) {
      this.getProxyAuth = parent._getProxyAuth;
    }

    if (document && parent._setHeight) {
      this.resize = (height?: number) => parent._setHeight(height ?? document.body.scrollHeight);
    }

    if (parent._registerElement) {
      this.registerElement = (id: string, element: AppElement) => parent._registerElement(id, element);
    }

    if (parent._deregisterElement) {
      this.deregisterElement = (id: string) => parent._deregisterElement(id);
    }

    // Common
    if (parent.setBadgeCount) {
      this.setBadgeCount = parent.setBadgeCount;
    }

    if (parent.setTitle) {
      this.setTitle = parent.setTitle;
    }

    // Entity Association
    if (parent._entityAssociationGet) {
      this.entityAssociationGet = parent._entityAssociationGet;
    }

    if (parent._entityAssociationSet) {
      this.entityAssociationSet = parent._entityAssociationSet;
    }

    if (parent._entityAssociationList) {
      this.entityAssociationList = parent._entityAssociationList;
    }

    if (parent._entityAssociationDelete) {
      this.entityAssociationDelete = parent._entityAssociationDelete;
    }

    if (parent._entityAssociationCountEntities) {
      this.entityAssociationCountEntities = parent._entityAssociationCountEntities;
    }

    // State
    if (parent._stateSet) {
      this.setState = <T>(name: string, value: T, options?: StateOptions) => parent._stateSet(name, JSON.stringify(value), options);
    }

    if (parent._userStateSet) {
      this.setUserState = <T>(name: string, value: T, options?: UserStateOptions) => parent._userStateSet(name, JSON.stringify(value), options);
    }

    if (parent._stateGet) {
      this.getState = async <T>(name: string): Promise<T[]> => {
        const res = JSON.parse(await parent._stateGet(name));
        return (res ?? []).map((value: GetStateResponse<string>) => ({
          ...value,
          data: value.data ? JSON.parse(value.data) : null,
        }));
      };
    }

    if (parent._userStateGet) {
      this.getUserState = async <T>(name: string): Promise<T[]> => {
        const res = JSON.parse(await parent._userStateGet(name));
        return (res ?? []).map((value: GetStateResponse<string>) => ({
          ...value,
          data: value.data ? JSON.parse(value.data) : null,
        }));
      };
    }

    if (parent._stateDelete) {
      this.deleteState = parent._stateDelete;
    }

    if (parent._userStateDelete) {
      this.deleteUserState = parent._userStateDelete;
    }
  }

  public onReady(cb: ChildMethod): void {
    this.parentMethods.onReady = (context: Context) => {
      cb(context);
      if (this.resize && this.options.resizeAfterEvents) {
        this.resize();
      }
    };
  }

  public onShow(cb: ChildMethod): void {
    this.parentMethods.onShow = (context: Context) => {
      cb(context);
      if (this.resize && this.options.resizeAfterEvents) {
        this.resize();
      }
    };
  }

  public onChange(cb: ChildMethod): void {
    this.parentMethods.onChange = (context: Context) => {
      cb(context);
      if (this.resize && this.options.resizeAfterEvents) {
        this.resize();
      }
    };
  }

  public onTargetAction(cb: TargetActionChildMethod): void {
    this.parentMethods.onTargetAction = (action: TargetAction) => {
      cb(action);
      if (this.resize && this.options.resizeAfterEvents) {
        this.resize();
      }
    };
  }

  public onElementEvent(cb: ElementEventChildMethod): void {
    this.parentMethods.onElementEvent = (id, type, payload) => {
      cb(id, type, payload);
      if (this.resize && this.options.resizeAfterEvents) {
        this.resize();
      }
    };
  }

  public getEntityAssociation(name: string, entityId: string): IEntityAssociation {
    return new EntityAssociation(this, name, entityId);
  }

  public getParentMethods(): ChildMethods {
    return this.parentMethods;
  }
}

export const createClient = (options: DeskproClientOptions = {}): IDeskproClient => new DeskproClient(connectToParent, options);
