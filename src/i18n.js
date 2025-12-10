import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import esTranslations from './locales/es.json'
import frTranslations from './locales/fr.json'
import deTranslations from './locales/de.json'
import urTranslations from './locales/ur.json'
import itTranslations from './locales/it.json'
import ptTranslations from './locales/pt.json'
import nlTranslations from './locales/nl.json'
import plTranslations from './locales/pl.json'
import ruTranslations from './locales/ru.json'
import zhTranslations from './locales/zh.json'
import jaTranslations from './locales/ja.json'
import koTranslations from './locales/ko.json'
import arTranslations from './locales/ar.json'
import hiTranslations from './locales/hi.json'
import trTranslations from './locales/tr.json'
import svTranslations from './locales/sv.json'
import noTranslations from './locales/no.json'
import daTranslations from './locales/da.json'
import fiTranslations from './locales/fi.json'
import csTranslations from './locales/cs.json'
import elTranslations from './locales/el.json'
import heTranslations from './locales/he.json'
import thTranslations from './locales/th.json'
import viTranslations from './locales/vi.json'
import idTranslations from './locales/id.json'
import msTranslations from './locales/ms.json'
import bnTranslations from './locales/bn.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations },
      de: { translation: deTranslations },
      ur: { translation: urTranslations },
      it: { translation: itTranslations },
      pt: { translation: ptTranslations },
      nl: { translation: nlTranslations },
      pl: { translation: plTranslations },
      ru: { translation: ruTranslations },
      zh: { translation: zhTranslations },
      ja: { translation: jaTranslations },
      ko: { translation: koTranslations },
      ar: { translation: arTranslations },
      hi: { translation: hiTranslations },
      tr: { translation: trTranslations },
      sv: { translation: svTranslations },
      no: { translation: noTranslations },
      da: { translation: daTranslations },
      fi: { translation: fiTranslations },
      cs: { translation: csTranslations },
      el: { translation: elTranslations },
      he: { translation: heTranslations },
      th: { translation: thTranslations },
      vi: { translation: viTranslations },
      id: { translation: idTranslations },
      ms: { translation: msTranslations },
      bn: { translation: bnTranslations }
    },
    lng: (typeof window !== 'undefined' && localStorage.getItem('language')) || 'en', // default language or from localStorage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already escapes values
    }
  })

export default i18n

