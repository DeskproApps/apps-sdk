import { useContext } from "react";
import { DeskproAppContextValue, LatestDeskproAppContext } from "../types";
import { DeskproAppContext } from "../context";

export const useDeskproLatestAppContext = <Data, Settings>(): LatestDeskproAppContext<Data, Settings> => {
  const value = useContext<DeskproAppContextValue<Data, Settings>>(DeskproAppContext);

  return {
    context: value?.context ?? null,
  };
};


