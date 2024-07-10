import { toAlpha2 } from "i18n-iso-countries/index";
import supportedLangs from "./supportedLangs";
import type { SupportedAlpha2 } from "./types";

export function toAlpha2Code(locale: string, fallback: SupportedAlpha2 = "en"): SupportedAlpha2 {
  let code = locale;
  if (code.length === 3 || typeof code === "number") {
    code = toAlpha2(code) as string;
  }
  if (code.length > 3) {
    code = code.split("-", 1)[0];
  }
  code = code.toLowerCase();
  // Casting used here as this is a guard
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
  if (supportedLangs.includes(code as SupportedAlpha2)) {
    return code as SupportedAlpha2;
  }
  return fallback;
}
