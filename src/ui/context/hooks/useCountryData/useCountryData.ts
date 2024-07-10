import { getName, getNames } from "i18n-iso-countries/index";
import { useMemo, useState } from "react";
import { loadLocale } from "./loadLocale";
import type { SupportedAlpha2, UseCountryData } from "./types";

function useCountryData(locale: SupportedAlpha2): UseCountryData {
  const [loading, setLoading] = useState(false);
  const [countryNames, setCountryNames] = useState(getNames("en"));

  useMemo(async () => {
    setLoading(true);
    await loadLocale(locale);
    setLoading(false);
    setCountryNames(getNames(locale));
  }, [locale]);

  const getCountryName = (countryCode: string | number) => {
    return getName(countryCode, locale) as string;
  };

  return {
    loading,
    countryNames,
    getCountryName,
  };
}

export default useCountryData;
