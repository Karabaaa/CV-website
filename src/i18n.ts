import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "fr", // Langue par défaut
  fallbackLng: "en", // Langue de secours
  interpolation: {
    escapeValue: false, // React échappe déjà par défaut
  },
});

export default i18n;
