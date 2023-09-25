import { useMutation } from "@tanstack/react-query";
import { useDeskproAppClient } from "./useDeskproAppClient";
import type { UseMutationOptions } from "@tanstack/react-query";
import type { IDeskproClient } from "../../../client/types";

export const useMutationWithClient = <TFuncParams = unknown, TData = unknown>(
  queryFn: (client: IDeskproClient, data: TFuncParams) => Promise<TData>,
  options?:
    | Omit<UseMutationOptions<TData, unknown, unknown, unknown>, "mutationFn">
    | undefined
) => {
  const { client } = useDeskproAppClient();

  return useMutation<TData, unknown, unknown, unknown>(
    (data) => (!client ? null : queryFn(client, data as TFuncParams)) as ReturnType<typeof queryFn>,
    options,
  );
};
