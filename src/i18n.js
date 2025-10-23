import { createI18n } from 'vue-i18n'
import messages from '@/locales/index.js'

function getBrowserLang() {
  const lang = navigator.language || navigator.languages[0] || 'pt'
  return lang.split('-')[0] 
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language') || getBrowserLang(),
  fallbackLocale: 'pt',
  messages
})
