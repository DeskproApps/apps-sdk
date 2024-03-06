import { useState, useMemo } from "react";
import { faCheck, faCaretDown, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Stack, DivAsInput, Dropdown } from "@deskpro/deskpro-ui";
import { isPrimitive, getDisplayValue, getFilteredOptions } from "./utils";
import { NO_FOUND } from "./constants";
import type { PropsWithChildren } from "react";
import type {
  AnyIcon,
  DropdownProps,
  DropdownValueType,
  DropdownTargetProps,
  DivAsInputWithDisplayProps,
} from "@deskpro/deskpro-ui";

type Props<T> = Pick<
  DropdownProps<T, HTMLElement>,
  "closeOnSelect" | "containerHeight" | "containerMaxHeight" | "placement" | "disabled"
> & {
  value?: T | T[];
  initValue?: T | T[];
  id?: string;
  error?: DivAsInputWithDisplayProps["error"];
  options: Array<DropdownValueType<T>>;
  onChange?: (value: T | T[] | undefined) => void;
  placeholder?: DivAsInputWithDisplayProps["placeholder"];
  showInternalSearch?: boolean;
  noFoundText?: string;
};

const Select = <T,>({
  id,
  error,
  value,
  initValue,
  options,
  onChange,
  disabled,
  placeholder,
  showInternalSearch,
  noFoundText = NO_FOUND,
  children,
  ...props
}: PropsWithChildren<Props<T>>) => {
  const [input, setInput] = useState<string>("");
  const [selected, setSelected] = useState(initValue);

  const displayValue = useMemo(
    () => getDisplayValue(value || selected, options as Array<DropdownValueType<T|undefined>>),
    [value, selected, options]
  );

  const currentOptions = useMemo(() => {
    return getFilteredOptions(
      options as Array<DropdownValueType<T|undefined>>,
      selected,
      input,
      noFoundText,
    );
  }, [options, selected, input, noFoundText]);

  const setValues = (value: T | T[], selectedOption: DropdownValueType<T>) => {
    if (isPrimitive(value)) {
      setSelected(selectedOption.value);
      onChange && onChange(selectedOption.value);
    } else if (Array.isArray(value)) {
      const newValue = value.includes(selectedOption.value)
        ? value.filter((v) => v !== selectedOption.value)
        : [...value, selectedOption.value];
      setSelected(newValue);
      onChange && onChange(newValue);
    }
  };

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

        if (value) {
          setValues(value, selectedOption as DropdownValueType<T>);
        } else {
          setValues(selected as T | T[], selectedOption as DropdownValueType<T>);
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
      {({ targetRef, targetProps }: DropdownTargetProps<HTMLDivElement>) =>
        children ? (
          <div ref={targetRef} {...targetProps}>
            {children}
          </div>
        ) : (
          <DivAsInput
            {...(!id ? {} : { id: id })}
            placeholder={placeholder || "Select Value"}
            variant="inline"
            rightIcon={faCaretDown as AnyIcon}
            error={error}
            ref={targetRef}
            {...targetProps}
            value={
              !Array.isArray(displayValue) ? (
                displayValue
              ) : isPrimitive(displayValue[0]) ? (
                displayValue[0]
              ) : (
                <Stack gap={6} wrap="wrap" style={{ marginBottom: 6 }}>
                  {displayValue}
                </Stack>
              )
            }
            style={{ paddingRight: 0, cursor: !disabled ? "pointer" : "not-allowed" }}
          />
        )
      }
    </Dropdown>
  );
};

export { Select };
