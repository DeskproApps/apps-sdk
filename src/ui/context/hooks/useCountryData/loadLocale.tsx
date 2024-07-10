import { langs, registerLocale } from "i18n-iso-countries/index";
import type { SupportedAlpha2 } from "./types";

export async function loadLocale(locale: SupportedAlpha2): Promise<void> {
  if (langs().includes(locale)) {
    return;
  }
  const localeData = await loadLocaleFile(locale);
  registerLocale(localeData);
}

export function loadLocaleFile(locale: SupportedAlpha2) {
  switch (locale) {
    case "af":
      return import("i18n-iso-countries/langs/af.json");
    case "az":
      return import("i18n-iso-countries/langs/az.json");
    case "bn":
      return import("i18n-iso-countries/langs/bn.json");
    case "cs":
      return import("i18n-iso-countries/langs/cs.json");
    case "de":
      return import("i18n-iso-countries/langs/de.json");
    case "en":
      return import("i18n-iso-countries/langs/en.json");
    case "eu":
      return import("i18n-iso-countries/langs/eu.json");
    case "fr":
      return import("i18n-iso-countries/langs/fr.json");
    case "he":
      return import("i18n-iso-countries/langs/he.json");
    case "hu":
      return import("i18n-iso-countries/langs/hu.json");
    case "is":
      return import("i18n-iso-countries/langs/is.json");
    case "ka":
      return import("i18n-iso-countries/langs/ka.json");
    case "ko":
      return import("i18n-iso-countries/langs/ko.json");
    case "lt":
      return import("i18n-iso-countries/langs/lt.json");
    case "ml":
      return import("i18n-iso-countries/langs/ml.json");
    case "nb":
      return import("i18n-iso-countries/langs/nb.json");
    case "no":
      return import("i18n-iso-countries/langs/no.json");
    case "pt":
      return import("i18n-iso-countries/langs/pt.json");
    case "sd":
      return import("i18n-iso-countries/langs/sd.json");
    case "so":
      return import("i18n-iso-countries/langs/so.json");
    case "sv":
      return import("i18n-iso-countries/langs/sv.json");
    case "tg":
      return import("i18n-iso-countries/langs/tg.json");
    case "tt":
      return import("i18n-iso-countries/langs/tt.json");
    case "ur":
      return import("i18n-iso-countries/langs/ur.json");
    case "zh":
      return import("i18n-iso-countries/langs/zh.json");
    case "am":
      return import("i18n-iso-countries/langs/am.json");
    case "be":
      return import("i18n-iso-countries/langs/be.json");
    case "bs":
      return import("i18n-iso-countries/langs/bs.json");
    case "cy":
      return import("i18n-iso-countries/langs/cy.json");
    case "dv":
      return import("i18n-iso-countries/langs/dv.json");
    case "es":
      return import("i18n-iso-countries/langs/es.json");
    case "fa":
      return import("i18n-iso-countries/langs/fa.json");
    case "gl":
      return import("i18n-iso-countries/langs/gl.json");
    case "hi":
      return import("i18n-iso-countries/langs/hi.json");
    case "hy":
      return import("i18n-iso-countries/langs/hy.json");
    case "it":
      return import("i18n-iso-countries/langs/it.json");
    case "kk":
      return import("i18n-iso-countries/langs/kk.json");
    case "ku":
      return import("i18n-iso-countries/langs/ku.json");
    case "lv":
      return import("i18n-iso-countries/langs/lv.json");
    case "mn":
      return import("i18n-iso-countries/langs/mn.json");
    case "nl":
      return import("i18n-iso-countries/langs/nl.json");
    case "pl":
      return import("i18n-iso-countries/langs/pl.json");
    case "ro":
      return import("i18n-iso-countries/langs/ro.json");
    case "sk":
      return import("i18n-iso-countries/langs/sk.json");
    case "sq":
      return import("i18n-iso-countries/langs/sq.json");
    case "sw":
      return import("i18n-iso-countries/langs/sw.json");
    case "th":
      return import("i18n-iso-countries/langs/th.json");
    case "ug":
      return import("i18n-iso-countries/langs/ug.json");
    case "uz":
      return import("i18n-iso-countries/langs/uz.json");
    case "ar":
      return import("i18n-iso-countries/langs/ar.json");
    case "bg":
      return import("i18n-iso-countries/langs/bg.json");
    case "ca":
      return import("i18n-iso-countries/langs/ca.json");
    case "da":
      return import("i18n-iso-countries/langs/da.json");
    case "el":
      return import("i18n-iso-countries/langs/el.json");
    case "et":
      return import("i18n-iso-countries/langs/et.json");
    case "fi":
      return import("i18n-iso-countries/langs/fi.json");
    case "ha":
      return import("i18n-iso-countries/langs/ha.json");
    case "hr":
      return import("i18n-iso-countries/langs/hr.json");
    case "id":
      return import("i18n-iso-countries/langs/id.json");
    case "ja":
      return import("i18n-iso-countries/langs/ja.json");
    case "km":
      return import("i18n-iso-countries/langs/km.json");
    case "ky":
      return import("i18n-iso-countries/langs/ky.json");
    case "mk":
      return import("i18n-iso-countries/langs/mk.json");
    case "ms":
      return import("i18n-iso-countries/langs/ms.json");
    case "nn":
      return import("i18n-iso-countries/langs/nn.json");
    case "ps":
      return import("i18n-iso-countries/langs/ps.json");
    case "ru":
      return import("i18n-iso-countries/langs/ru.json");
    case "sl":
      return import("i18n-iso-countries/langs/sl.json");
    case "sr":
      return import("i18n-iso-countries/langs/sr.json");
    case "ta":
      return import("i18n-iso-countries/langs/ta.json");
    case "tr":
      return import("i18n-iso-countries/langs/tr.json");
    case "uk":
      return import("i18n-iso-countries/langs/uk.json");
    case "vi":
      return import("i18n-iso-countries/langs/vi.json");
    default:
      throw new Error("Unknown locale");
  }
}
