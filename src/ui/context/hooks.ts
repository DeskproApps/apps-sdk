import {
  DeskproAppClient,
  DeskproAppContextValue,
  DeskproAppEventHooks,
  DeskproAppEventType, DeskproAppTheme
} from "./types";
import {useContext, useEffect, useState} from "react";
import { DeskproAppContext } from "./context";
import {
  Context,
  TargetAction,
  TargetElementEvent,
  IDeskproClient,
  OAuth2CallbackUrlOptions,
  DeferredOAuth2CallbackUrl, OAuth2CallbackUrlPoll
} from "../../client/types";
import { Fetch } from "../../proxy/types";
import { proxyFetch } from "../../proxy/helpers";

export const useDeskproAppClient = (): DeskproAppClient => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  return {
    client: value?.client ?? null,
  };
};

export const useInitialisedDeskproAppClient = (fn: (client: IDeskproClient) => void, deps: any[] = []): void => {
  const { client } = useDeskproAppClient();

  useEffect(() => {
    if (!client) {
      return;
    }

    fn(client);
  }, [client, ...deps]);
};

export const useDeskproAppFetch = (fn: (fetch: Fetch) => void, onCatch: () => void, deps: any[] = []) => {
  const { client } = useDeskproAppClient();

  useEffect(() => {
    if (!client) {
      return;
    }

    proxyFetch(client).then(fn).catch(onCatch);
  }, [client, ...deps]);
};

export const useDeskproAppTheme = (): DeskproAppTheme => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  if (!value?.theme) {
    throw new Error("Deskpro app theme is not yet initialised and therefore cannot be used");
  }

  return {
    theme: value.theme,
  };
};

export const useDeskproAppEvents = (hooks: DeskproAppEventHooks, deps: any[] = []) => {
  useEffect(() => {
    document.addEventListener(DeskproAppEventType.READY, ((event: CustomEvent<Context>) => {
      hooks.onReady && hooks.onReady(event.detail);
    }) as EventListener);

    document.addEventListener(DeskproAppEventType.SHOW, ((event: CustomEvent<Context>) => {
      hooks.onShow && hooks.onShow(event.detail);
    }) as EventListener);

    document.addEventListener(DeskproAppEventType.CHANGE, ((event: CustomEvent<Context>) => {
      hooks.onChange && hooks.onChange(event.detail);
    }) as EventListener);

    document.addEventListener(DeskproAppEventType.TARGET_ACTION, ((event: CustomEvent<TargetAction>) => {
      hooks.onTargetAction && hooks.onTargetAction(event.detail);
    }) as EventListener);

    document.addEventListener(DeskproAppEventType.TARGET_ELEMENT_EVENT, ((event: CustomEvent<TargetElementEvent>) => {
      hooks.onElementEvent && hooks.onElementEvent(event.detail.id, event.detail.type, event.detail.payload);
    }) as EventListener);
  }, deps);
};

export const useDeskproOAuth2Auth = (name: string, tokenAcquisitionPattern: RegExp, options?: OAuth2CallbackUrlOptions): DeferredOAuth2CallbackUrl => {
  const [callbackUrl, setCallbackUrl] = useState<string|undefined>(undefined);
  const [poll, setPoll] = useState<OAuth2CallbackUrlPoll|undefined>(undefined);
  const [hasToken, setHasToken] = useState<DeferredOAuth2CallbackUrl["callback"]["hasToken"]|undefined>(undefined);

  const { client } = useDeskproAppClient();

  useEffect(() => {
    if (!client) {
      return;
    }

    setHasToken(() => async () => client?.hasUserState(`oauth2/${name}`));

    let onShow: EventListenerOrEventListenerObject|undefined;

    onShow = () => {
      client.oauth2().getCallbackUrl(name, tokenAcquisitionPattern, options).then((callback) => {
        setCallbackUrl(callback.callbackUrl);
        setPoll(() => async () => {
          if (!options?.noBlockWhenPolling) {
            await client?.setBlocking(true);
          }

          const token = await callback.poll();

          if (!options?.noBlockWhenPolling) {
            await client?.setBlocking(false);
          }

          return token;
        });
      });
    };

    document.addEventListener(DeskproAppEventType.SHOW, onShow);

    return () => onShow && document.removeEventListener(DeskproAppEventType.SHOW, onShow);
  }, [client]);

  const isReady = !!(callbackUrl && poll && hasToken);

  return {
    isReady,
    callback: {
      callbackUrl,
      poll,
      hasToken,
    },
  };
};