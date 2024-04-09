import type { Dispatch, SetStateAction } from "react";
import { useCallback, useMemo, useState } from "react";

export interface UseBoolean {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export function useBoolean(defaultValue: boolean = false): UseBoolean {
  const [value, setValue] = useState(defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return useMemo(
    () => ({
      value,
      setValue,
      setTrue,
      setFalse,
      toggle,
    }),
    [setFalse, setTrue, toggle, value]
  );
}
