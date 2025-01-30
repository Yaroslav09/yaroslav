import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(Backend)
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Bind i18n to React
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    backend: {
      // Translation files path
      loadPath: "locales/{{lng}}/{{ns}}.json",
      // loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
    ns: ["portfolio"], // Namespaces to load
    defaultNS: "portfolio", // Default namespace
  });

export default i18n;
