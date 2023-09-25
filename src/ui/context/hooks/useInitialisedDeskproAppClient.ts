import { useEffect } from "react";
import { IDeskproClient } from "../../../client/types";
import { useDeskproAppClient } from "./useDeskproAppClient";

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
  /* eslint-disable react-hooks/exhaustive-deps */
  }, [client, ...deps]);
};
