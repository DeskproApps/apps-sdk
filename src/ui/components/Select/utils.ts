import { NO_FOUND } from "./constants";
import type { DropdownItemType, DropdownValueType } from "@deskpro/deskpro-ui";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isString = (value: any): value is string => {
  return typeof value === "string";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumber = (value: any): value is number => {
  return typeof value === "number" && !isNaN(value);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPrimitive = (value: any): value is string|number => {
  return isString(value) || isNumber(value);
}

const getDisplayValue = <T,>(value: T|T[], options: Array<DropdownValueType<T>>) => {
  if (!Array.isArray(options) || !options.length) {
    return "";
  }

  if (!isNumber(value) && !isString(value) && !Array.isArray(value)) {
    return "";
  }

  if (Array.isArray(value)) {
    const filteredOptions = options
      .filter((o) => value.includes(o.value))
      .map((o) => o.label);

    if (!value.length) {
      return "";
    }

    if (isPrimitive(filteredOptions[0])) {
      return filteredOptions.join(", ");
    }

    return filteredOptions;
  } else {
    const o = options.find((o) => o.value === value);
    return o?.label ?? "";
  }
};

const getFilteredOptions = <T,>(
  options: Array<DropdownValueType<T>>,
  value: T|T[],
  input?: string,
  noFoundText?: string,
): Array<DropdownItemType<T>> => {
  const searchInput: string = input || "";
  const noFound = noFoundText || NO_FOUND;

  if (!Array.isArray(options) || !options.length) {
    return [{ type: "header", label: noFound }];
  }

  const filteredOptions = options
    .filter((o) => {
      const label = o?.label;
      const description = o?.description;
      const search = isPrimitive(label) ? `${label}` : description || "";

      return !search
        ? true
        : (isString(search) ? search.toLowerCase() : search).includes(searchInput.toLowerCase());
    })
    .map((o) => ({
      ...o,
      selected: Array.isArray(value)
        ? value.includes(o.value)
        : o.value === value,
    }));

  if (!Array.isArray(filteredOptions) || !filteredOptions.length) {
    return [{ type: "header", label: noFound }];
  } else {
    return filteredOptions;
  }
};

export { getDisplayValue, getFilteredOptions, isPrimitive };
