import { useState, useEffect } from "react";
import { useDeskproAppClient } from "./useDeskproAppClient";
import {
  HasOAuth2Token,
  OAuth2CallbackUrlPoll,
  OAuth2CallbackUrlOptions,
  DeferredOAuth2CallbackUrl,
} from "../../../client/types";
import { DeskproAppEventType } from "../types";

export const useDeskproOAuth2Auth = (
  name: string,
  tokenAcquisitionPattern: RegExp,
  options?: OAuth2CallbackUrlOptions
): DeferredOAuth2CallbackUrl => {
  const [callbackUrl, setCallbackUrl] = useState<string | undefined>(undefined);
  const [poll, setPoll] = useState<OAuth2CallbackUrlPoll | undefined>(undefined);
  const [hasToken, setHasToken] = useState<HasOAuth2Token | undefined>(undefined);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
