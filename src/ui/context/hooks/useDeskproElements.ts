import { useContext } from "react";
import {
  ClearElements,
  RegisterElement,
  DeRegisterElement,
  DeskproAppContextValue,
} from "../types";
import { DeskproAppContext } from "../context";
import { AppElement } from "../../../client/types";
import { useInitialisedDeskproAppClient } from "./useInitialisedDeskproAppClient";

export const useDeskproElements = (
  cb: (utils: {
    registerElement: RegisterElement;
    deRegisterElement: DeRegisterElement;
    clearElements: ClearElements;
  }) => void,
  deps: any[] = []
): void => {
  const value = useContext<DeskproAppContextValue>(DeskproAppContext);

  const registerElement: RegisterElement = (id: string, element: AppElement) => {
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
      value.registeredElements.forEach((id) => value.client?.deregisterElement(id));
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
