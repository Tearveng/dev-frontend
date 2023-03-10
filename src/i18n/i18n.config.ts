import {en, fr} from '@src/i18n/languages';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
const {languageDetectorPlugin} = require('@src/i18n/languageDectectorPlugin');

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources,
    //language to use if translations in user language are not available
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
