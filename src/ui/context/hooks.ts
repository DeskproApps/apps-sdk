import {
  QueryKey,
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import {
  AppElement,
  Context,
  DeferredOAuth2CallbackUrl,
  HasOAuth2Token,
  IDeskproClient,
  OAuth2CallbackUrlOptions,
  OAuth2CallbackUrlPoll,
  TargetAction,
  TargetElementEvent,
} from "../../client/types";
import { proxyFetch } from "../../proxy/helpers";
import { Fetch } from "../../proxy/types";
import { DeskproAppContext } from "./context";
import {
  ClearElements,
  DeRegisterElement,
  DeskproAppClient,
  DeskproAppContextValue,
  DeskproAppEventHooks,
  DeskproAppEventType,
  DeskproAppTheme,
  LatestDeskproAppContext,
  RegisterElement,
} from "./types";

export const useDeskproAppClient = (): DeskproAppClient => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  return {
    client: value?.client ?? null,
  };
};

export const useDeskproLatestAppContext = (): LatestDeskproAppContext => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  return {
    context: value?.context ?? null,
  };
};

export const useDeskproElements = (
  cb: (utils: {
    registerElement: RegisterElement;
    deRegisterElement: DeRegisterElement;
    clearElements: ClearElements;
  }) => void,
  deps: any[] = []
): void => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  const registerElement: RegisterElement = (
    id: string,
    element: AppElement
  ) => {
    if (value?.client && value.setRegisteredElements) {
      value.client.registerElement(id, element);
      value.setRegisteredElements((ids) => [...ids, id]);
    }
  };

  const deRegisterElement: DeRegisterElement = (id: string) => {
    if (value?.client && value.setRegisteredElements) {
      value.client.deregisterElement(id);
      value.setRegisteredElements((ids) => ids.filter((elId) => elId !== id));
    }
  };

  const clearElements: ClearElements = () => {
    if (value?.client && value.setRegisteredElements) {
      value.registeredElements.forEach((id) =>
        value.client?.deregisterElement(id)
      );
      value.setRegisteredElements([]);
    }
  };

  useInitialisedDeskproAppClient(() => {
    cb({
      registerElement,
      deRegisterElement,
      clearElements,
    });
  }, deps);
};

export const useInitialisedDeskproAppClient = (
  fn: (client: IDeskproClient) => void,
  deps: any[] = []
): void => {
  const { client } = useDeskproAppClient();

  useEffect(() => {
    if (!client) {
      return;
    }

    fn(client);
  }, [client, ...deps]);
};

export const useQueryWithClient = <
  TQueryFnData = unknown,
  TError = unknown,
  TData extends TQueryFnData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: string[],
  queryFn: (client: IDeskproClient) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<TQueryFnData> => {
  const { client } = useDeskproAppClient();

  const key = Array.isArray(queryKey) ? queryKey : [queryKey];

  return useQuery(
    [client, ...key] as unknown as TQueryKey,
    () => (client && queryFn(client)) as Promise<TQueryFnData>,
    {
      ...(options ?? {}),
      enabled:
        options?.enabled === undefined ? !!client : true && options?.enabled,
    }
  );
};

export const useQueryMutationWithClient = <
  TFuncParams = unknown,
  TData = unknown
>(
  queryFn: (client: IDeskproClient, data: TFuncParams) => Promise<TData>
) => {
  const { client } = useDeskproAppClient();

  return useMutation<TData, unknown, unknown, unknown>(
    (data) =>
      (!client ? null : queryFn(client, data as TFuncParams)) as ReturnType<
        typeof queryFn
      >
  );
};

export const useDeskproAppFetch = (
  fn: (fetch: Fetch) => void,
  onCatch: () => void,
  deps: any[] = []
) => {
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
    throw new Error(
      "Deskpro app theme is not yet initialised and therefore cannot be used"
    );
  }

  return {
    theme: value.theme,
  };
};

export const useDeskproAppEvents = (
  hooks: DeskproAppEventHooks,
  deps: any[] = []
) => {
  useEffect(() => {
    const onReady = ((event: CustomEvent<Context>) => {
      hooks.onReady && hooks.onReady(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.READY, onReady);

    const onShow = ((event: CustomEvent<Context>) => {
      hooks.onShow && hooks.onShow(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.SHOW, onShow);

    const onChange = ((event: CustomEvent<Context>) => {
      hooks.onChange && hooks.onChange(event.detail);
    }) as EventListener;

    document.addEventListener(DeskproAppEventType.CHANGE, onChange);

    const onTargetAction = ((event: CustomEvent<TargetAction>) => {
      hooks.onTargetAction && hooks.onTargetAction(event.detail);
    }) as EventListener;

    document.addEventListener(
      DeskproAppEventType.TARGET_ACTION,
      onTargetAction
    );

    const onTargetElementEvent = ((event: CustomEvent<TargetElementEvent>) => {
      hooks.onElementEvent &&
        hooks.onElementEvent(
          event.detail.id,
          event.detail.type,
          event.detail.payload
        );
    }) as EventListener;

    document.addEventListener(
      DeskproAppEventType.TARGET_ELEMENT_EVENT,
      onTargetElementEvent
    );

    const onAdminSettingsChange = ((
      event: CustomEvent<Record<string, any>>
    ) => {
      hooks.onAdminSettingsChange && hooks.onAdminSettingsChange(event.detail);
    }) as EventListener;

    document.addEventListener(
      DeskproAppEventType.ADMIN_SETTINGS_CHANGE,
      onAdminSettingsChange
    );

    return () => {
      document.removeEventListener(DeskproAppEventType.READY, onReady);
      document.removeEventListener(DeskproAppEventType.SHOW, onShow);
      document.removeEventListener(DeskproAppEventType.CHANGE, onChange);
      document.removeEventListener(
        DeskproAppEventType.TARGET_ACTION,
        onTargetAction
      );
      document.removeEventListener(
        DeskproAppEventType.TARGET_ELEMENT_EVENT,
        onTargetElementEvent
      );
      document.removeEventListener(
        DeskproAppEventType.ADMIN_SETTINGS_CHANGE,
        onAdminSettingsChange
      );
    };
  }, deps);
};

export const useDeskproOAuth2Auth = (
  name: string,
  tokenAcquisitionPattern: RegExp,
  options?: OAuth2CallbackUrlOptions
): DeferredOAuth2CallbackUrl => {
  const [callbackUrl, setCallbackUrl] = useState<string | undefined>(undefined);
  const [poll, setPoll] = useState<OAuth2CallbackUrlPoll | undefined>(
    undefined
  );
  const [hasToken, setHasToken] = useState<HasOAuth2Token | undefined>(
    undefined
  );

  const { client } = useDeskproAppClient();

  useEffect(() => {
    if (!client) {
      return;
    }

    setHasToken(() => async () => client?.hasUserState(`oauth2/${name}`));

    const onShow: EventListenerOrEventListenerObject = () => {
      client
        .oauth2()
        .getCallbackUrl(name, tokenAcquisitionPattern, options)
        .then((callback) => {
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

    return () => document.removeEventListener(DeskproAppEventType.SHOW, onShow);
  }, [client]);

  const isReady = !!(callbackUrl && poll && hasToken);

  return {
    isReady,
    callback: isReady
      ? {
          callbackUrl,
          poll,
          hasToken,
        }
      : undefined,
  };
};
