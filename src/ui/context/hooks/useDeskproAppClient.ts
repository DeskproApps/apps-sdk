import { useContext } from "react";
import { DeskproAppContext } from "../context";
import { DeskproAppClient, DeskproAppContextValue } from "../types";

export const useDeskproAppClient = (): DeskproAppClient => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  return {
    client: value?.client ?? null,
  };
};
