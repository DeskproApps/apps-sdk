import { useContext } from "react";
import { DeskproAppContextValue, DeskproAppTheme } from "../types";
import { DeskproAppContext } from "../context";

export const useDeskproAppTheme = (): DeskproAppTheme => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  if (!value?.theme) {
    throw new Error("Deskpro app theme is not yet initialised and therefore cannot be used");
  }

  return {
    theme: value.theme,
  };
};
