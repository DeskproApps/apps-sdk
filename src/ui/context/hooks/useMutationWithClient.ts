import { useMutation } from "@tanstack/react-query";
import { useDeskproAppClient } from "./useDeskproAppClient";
import { IDeskproClient } from "../../../client/types";

export const useMutationWithClient = <TFuncParams = unknown, TData = unknown>(
  queryFn: (client: IDeskproClient, data: TFuncParams) => Promise<TData>
) => {
  const { client } = useDeskproAppClient();

  return useMutation<TData, unknown, unknown, unknown>((data) => {
    if (!client) {
      throw new Error("Client is not initialised");
    }

    return queryFn(client, data as TFuncParams);
  });
};
