import { useState, useMemo } from "react";
import {
  faCheck,
  faCaretDown,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Stack, DivAsInput, Dropdown } from "@deskpro/deskpro-ui";
import {
  isPrimitive,
  getDisplayValue,
  getFilteredOptions,
} from "./utils";
import { NO_FOUND } from "./constants";
import type {
  AnyIcon,
  DropdownProps,
  DropdownValueType,
  DropdownTargetProps,
  DivAsInputWithDisplayProps,
} from "@deskpro/deskpro-ui";

type Props<T> = Pick<DropdownProps<T, HTMLElement>, "closeOnSelect"|"containerHeight"|"containerMaxHeight"|"placement"|"disabled"> & {
  initValue: T | T[],
  id?: string,
  error?: DivAsInputWithDisplayProps["error"],
  options: Array<DropdownValueType<T>>,
  onChange?: (value: T|T[]) => void,
  placeholder?: DivAsInputWithDisplayProps["placeholder"],
  showInternalSearch?: boolean,
  noFoundText?: string,
};

const Select = <T,>({
  id,
  error,
  initValue,
  options,
  onChange,
  disabled,
  placeholder,
  showInternalSearch,
  noFoundText = NO_FOUND,
  ...props
}: Props<T>) => {
  const [input, setInput] = useState<string>("");
  const [selected, setSelected] = useState(initValue);

  const displayValue = useMemo(() => getDisplayValue(selected, options), [selected, options]);

  const currentOptions = useMemo(() => {
    return getFilteredOptions(options, selected, input, noFoundText);
  }, [options, selected, input, noFoundText]);

  return (
    <Dropdown
      disabled={disabled}
      showInternalSearch={showInternalSearch}
      fetchMoreText={"Fetch more"}
      autoscrollText={"Autoscroll"}
      selectedIcon={faCheck as AnyIcon}
      externalLinkIcon={faExternalLinkAlt as AnyIcon}
      placement="bottom-start"
      hideIcons
      inputValue={input}
      onSelectOption={(selectedOption) => {
        setInput("");

        if (isPrimitive(selected)) {
          setSelected(selectedOption.value);
          onChange && onChange(selectedOption.value);
        } else if (Array.isArray(selected)) {
          const newValue = selected.includes(selectedOption.value)
            ? selected.filter((v) => v !== selectedOption.value)
            : [...selected, selectedOption.value];

          setSelected(newValue);
          onChange && onChange(newValue);
        }

      }}
      onInputChange={(value) => {
        if (showInternalSearch) {
          setInput(value);
        }
      }}
      options={currentOptions}
      {...props}
    >
      {({ targetRef, targetProps }: DropdownTargetProps<HTMLDivElement>) => {
        return (
          <DivAsInput
            {...(!id ? {} : { id: id })}
            placeholder={placeholder || "Select Value"}
            variant="inline"
            rightIcon={faCaretDown as AnyIcon}
            error={error}
            ref={targetRef}
            {...targetProps}
            value={!Array.isArray(displayValue)
              ? displayValue
              : isPrimitive(displayValue[0])
              ? displayValue[0]
              : (<Stack gap={6} wrap="wrap" style={{ marginBottom: 6 }}>{displayValue}</Stack>)
            }
            style={{ paddingRight: 0, cursor: !disabled ? "pointer" : "not-allowed" }}
          />
        )
      }}
    </Dropdown>
  );
};

export { Select };
