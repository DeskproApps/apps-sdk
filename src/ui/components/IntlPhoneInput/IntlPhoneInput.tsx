import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import Fuse from "fuse.js";
import {
  formatIncompletePhoneNumber,
  getCountryCallingCode,
  isSupportedCountry,
  isValidPhoneNumber,
  parsePhoneNumber,
} from "libphonenumber-js";
import type { CountryCode, PhoneNumber } from "libphonenumber-js";
import { Input, Dropdown, Stack, DivAsInputWithDisplay, H2 } from "@deskpro/deskpro-ui";
import type { AnyIcon, DropdownTargetProps, InputProps } from "@deskpro/deskpro-ui";
import styled from "styled-components";
import type { ISO3166Code } from "../FlagIcon";
import { useGetFullCountryList } from "../../context/hooks/useCountryData/index";
import { useBoolean } from "../../context/hooks/useBoolean";
import { faCheck, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const FULL_PHONE_REGEX = new RegExp(/^\+.+/);
const FIRST_INDEX_ISNT_NUMBER = new RegExp(/^[^0-9|+].*/);

export type PhoneValue = {
  number: string;
  displayNumber: string;
  countryCode: ISO3166Code;
  userId?: string;
  displayName?: string;
  ext?: string;
};

type ChangeInputValueProps = {
  phoneNumber: string;
  countryCode: ISO3166Code;
};

const formatDisplayNumber = (number: PhoneNumber) => {
  return number
    .formatInternational()
    .replace(number.countryCallingCode, "")
    .replace("+ ", "")
    .replace(" x", " ext. "); // todo: this needs to be in a translation file as not all countries use "ext."
};

export const getCallToValue = ({ phoneNumber, countryCode }: ChangeInputValueProps): PhoneValue => {
  let parsedPhoneNumber = phoneNumber;
  if (!parsedPhoneNumber) {
    return { number: "", displayNumber: "", countryCode };
  }

  // remove brackets from extension
  if (parsedPhoneNumber.toLowerCase().includes("(x")) {
    const parts = parsedPhoneNumber.toLowerCase().split("(x");
    parsedPhoneNumber = `${parts[0]} x${parts[1].replaceAll(")", "")}`;
  }

  // remove formatting characters
  parsedPhoneNumber = ["-", "(", ")"]
    .reduce((acc, val) => acc.replaceAll(val, ""), parsedPhoneNumber)
    .replace("ext. ", "x");

  // if first item in input is not a number search and disaplay BY STRING
  if (FIRST_INDEX_ISNT_NUMBER.test(parsedPhoneNumber)) {
    return {
      number: parsedPhoneNumber,
      displayNumber: parsedPhoneNumber,
      countryCode,
    };

    //  if includes the "+" on the phone number but not the whole number
  } else if (FULL_PHONE_REGEX.test(parsedPhoneNumber)) {
    if (isValidPhoneNumber(parsedPhoneNumber)) {
      const number = parsePhoneNumber(parsedPhoneNumber);

      return {
        number: number.number as string,
        displayNumber: formatDisplayNumber(number),
        countryCode: number.country as ISO3166Code,
        ext: number.ext,
      };
    } else {
      const number = formatIncompletePhoneNumber(parsedPhoneNumber);
      return {
        displayNumber: number,
        number: phoneNumber,
        countryCode: countryCode as ISO3166Code,
      };
    }
  } else {
    const typedCountrycode = countryCode as CountryCode;

    if (isValidPhoneNumber(parsedPhoneNumber, typedCountrycode)) {
      const number = parsePhoneNumber(parsedPhoneNumber, typedCountrycode);

      return {
        displayNumber: formatDisplayNumber(number),
        number: number.number as string,
        countryCode: countryCode as ISO3166Code,
        ext: number.ext,
      };
    } else {
      const number = formatIncompletePhoneNumber(parsedPhoneNumber, typedCountrycode);
      return {
        displayNumber: number,
        number: parsedPhoneNumber,
        countryCode: countryCode as ISO3166Code,
      };
    }
  }
};

const InputNoUnderline = styled(Input)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey20};
  }
  :active {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey20};
  }
`;

type IntlPhoneInputProps = Omit<InputProps, "onChange"> & {
  defaultCountryCode?: string;
  value: string;
  onChange: (phone: string, ext?: string) => void;
  fetchMoreText: ReactNode;
  autoscrollText: ReactNode;
  selectedIcon: AnyIcon;
  externalLinkIcon: AnyIcon;
  ext?: null | undefined | string;
};

const SelectComponent = ({
  onChange,
  value,
}: {
  value: string;
  onChange: (val?: CountryCode) => void;
}) => {
  const [searchString, setSearchString] = useState("");

  const allOptions = useGetFullCountryList();

  const optionsFuse = useMemo(() => {
    return new Fuse(allOptions, { keys: ["label"], includeScore: true });
  }, [allOptions]);

  const options = useMemo(
    () =>
      searchString ? optionsFuse.search(searchString).map((options) => options.item) : allOptions,
    [allOptions, optionsFuse, searchString]
  );

  const handleClose = useCallback(() => setSearchString(""), []);
  return (
    <Dropdown
      onClose={handleClose}
      inputValue={searchString}
      showInternalSearch
      onInputChange={setSearchString}
      onSelectOption={({ value }) => {
        if (value && isSupportedCountry(value)) {
          onChange(value as CountryCode);
        }
      }}
      options={options}
      placement="bottom-start"
      selectedIcon={faCheck}
      externalLinkIcon={faExternalLinkAlt}
      fetchMoreText={<H2>Fetch more</H2>}
      autoscrollText={<H2>Jump to most recent</H2>}
      layer="modalPopover"
    >
      {({ targetProps, targetRef }: DropdownTargetProps<HTMLDivElement>) => (
        <Stack
          style={{ width: 40 }}
          ref={targetRef}
          {...targetProps}
          onClick={(e) => {
            // Stops it from immediately closing the dropdown
            e.preventDefault();
            targetProps.onClick && targetProps.onClick(e);
          }}
        >
          <DivAsInputWithDisplay
            variant="inline"
            value={value ? "+" + getCountryCallingCode(value as CountryCode) : ""}
            role="search"
          />
        </Stack>
      )}
    </Dropdown>
  );
};

export function IntlPhoneInput({
  onChange,
  value,
  defaultCountryCode,
  selectedIcon,
  autoscrollText,
  externalLinkIcon,
  fetchMoreText,
  onBlur,
  onFocus,
  ext,
  ...rest
}: IntlPhoneInputProps) {
  const focused = useBoolean(false);
  const [countryCode, setCountryCode] = useState(() =>
    defaultCountryCode && isSupportedCountry(defaultCountryCode)
      ? (defaultCountryCode as ISO3166Code)
      : "GB"
  );

  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (!focused.value) {
      let parsedPhoneNumber = value ?? "";
      let parsedCountryCode = countryCode;
      if (isValidPhoneNumber(value)) {
        const res = getCallToValue({ phoneNumber: ext ? `${value} x${ext}` : value, countryCode });
        parsedPhoneNumber = res.displayNumber;
        parsedCountryCode = res.countryCode;
      }
      if (parsedPhoneNumber !== inputValue) {
        setInputValue(parsedPhoneNumber);
      }
      if (parsedCountryCode !== countryCode) {
        setCountryCode(parsedCountryCode);
      }
    }
  }, [countryCode, defaultCountryCode, ext, focused.value, inputValue, value]);

  const onCountryCodeChange = useCallback(
    (value?: CountryCode) => {
      if (value && isSupportedCountry(value)) {
        setCountryCode(value as ISO3166Code);
        const { ext, number, displayNumber } = getCallToValue({
          phoneNumber: inputValue,
          countryCode: value as ISO3166Code,
        });
        setInputValue(displayNumber);
        onChange(number, ext);
      }
    },
    [inputValue, onChange]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const res = getCallToValue({ phoneNumber: e.target.value, countryCode });
      if (countryCode !== res.countryCode) {
        setCountryCode(res.countryCode);
      }
      onChange(res.number, res.ext);
      setInputValue(e.target.value);
    },
    [countryCode, onChange]
  );

  const onInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { displayNumber, number } = getCallToValue({
        phoneNumber: inputValue,
        countryCode,
      });
      if (isValidPhoneNumber(number)) {
        setInputValue(displayNumber);
      }
      onBlur?.(e);
      focused.setFalse();
    },
    [countryCode, focused, inputValue, onBlur]
  );

  const onInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      focused.setTrue();
      onFocus?.(e);
    },
    [focused, onFocus]
  );

  return (
    <Stack align="center">
      <SelectComponent onChange={onCountryCodeChange} value={countryCode} />
      <InputNoUnderline
        {...rest}
        onChange={onInputChange}
        value={inputValue}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
    </Stack>
  );
}
