import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pt from "./pt.json";

export const languages = ["en", "pt"];

const resources = {
  [languages[0]]: {
    translation: en,
  },
  [languages[1]]: {
    translation: pt,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: languages[0],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
