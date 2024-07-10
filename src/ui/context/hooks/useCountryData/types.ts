import type { LocalizedCountryNames } from "i18n-iso-countries";
import type supportedLangs from "./supportedLangs";

export type SupportedAlpha2 = typeof supportedLangs[number];

export type UseCountryData = {
  loading: boolean;
  getCountryName: (countryCode: string | number) => string;
  countryNames: LocalizedCountryNames<{ select: "official" }>;
};
