import { useContext } from "react";
import { DeskproAppContextValue, LatestDeskproAppContext } from "../types";
import { DeskproAppContext } from "../context";

export const useDeskproLatestAppContext = (): LatestDeskproAppContext => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  return {
    context: value?.context ?? null,
  };
};
