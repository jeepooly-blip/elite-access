import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import it from './locales/it.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import ar from './locales/ar.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ru from './locales/ru.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  es: { translation: es },
  pt: { translation: pt },
  ar: { translation: ar },
  zh: { translation: zh },
  ja: { translation: ja },
  ru: { translation: ru },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'de', 'it', 'es', 'pt', 'ar', 'zh', 'ja', 'ru'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
