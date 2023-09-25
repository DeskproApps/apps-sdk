import { useEffect } from "react";
import { useDeskproAppClient } from "./useDeskproAppClient";
import { Fetch } from "../../../proxy/types";
import { proxyFetch } from "../../../proxy/helpers";

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
  /* eslint-disable react-hooks/exhaustive-deps */
  }, [client, ...deps]);
};
