import { registerLocale } from "i18n-iso-countries/index";
import en from "i18n-iso-countries/langs/en.json";

// Register en always
registerLocale(en);

export { default } from "./useCountryData";

export { useGetFullCountryList } from "./getFullCountryList";
