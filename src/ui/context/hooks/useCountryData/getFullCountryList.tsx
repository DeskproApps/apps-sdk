import type { DropdownItemType } from "@deskpro/deskpro-ui";
import { Icon } from "@deskpro/deskpro-ui";
import useCountryData from "./useCountryData";
import { toAlpha2Code } from "./toAlpha2Code";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FlagIcon, isISO3166 } from "../../../components/FlagIcon";

export const useGetFullCountryList = () => {
  const intl = useIntl();
  const { countryNames, loading } = useCountryData(toAlpha2Code(intl.locale));

  const allOptions: DropdownItemType<string | undefined>[] = useMemo(
    () => [
      {
        type: "value" as const,
        key: "GB-pinned",
        value: "GB",
        label: `${countryNames["GB"]} +${getCountryCallingCode("GB")}`,
        icon: <Icon icon={<FlagIcon isoCode={"GB"} />} />,
      },
      {
        type: "value" as const,
        key: "US-pinned",
        value: "US",
        label: `${countryNames["US"]} +${getCountryCallingCode("US")}`,
        icon: <Icon icon={<FlagIcon isoCode={"US"} />} />,
      },
      {
        type: "divider" as const,
      },
      ...getCountries()
        .map((country) => {
          const countryName = countryNames[country] ?? "";
          return {
            type: "value" as const,
            key: country,
            label: `${countryName} +${getCountryCallingCode(country)}`,
            value: country,
            icon: isISO3166(country) ? <Icon icon={<FlagIcon isoCode={country} />} /> : faGlobe,
          };
        })
        .sort((a, b) => (a.value > b.value ? 1 : -1)),
    ],
    [countryNames]
  );

  if (loading) return [];

  return allOptions;
};
