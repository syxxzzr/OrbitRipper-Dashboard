import { createI18n } from 'vue-i18n'
import type {
  LocaleConfig,
  LocaleDateTimeFormatList,
  LocaleMessageList,
  LocaleNumberFormatList,
} from '@/types/i18n.ts'

const locales = import.meta.glob('./locales/*.json', { eager: true }) as Record<
  string,
  { default: LocaleConfig }
>
const localeNameList: Record<string, string> = {}

const messages: LocaleMessageList = {}
const datetimeFormats: LocaleDateTimeFormatList = {}
const numberFormats: LocaleNumberFormatList = {}

for (const [path, localeConfig] of Object.entries(locales)) {
  const localeKeyReg = path.match(/([a-z]{2}-[a-z]{2})\.json$/i)
  if (!localeKeyReg) {
    continue
  }
  const localeKey = localeKeyReg[1]
  localeNameList[`$${localeKey}`] = localeConfig.default['language-name']
  messages[localeKey] = localeConfig.default.messages

  if (localeConfig.default['datetime-formats']) {
    datetimeFormats[localeKey] = localeConfig.default['datetime-formats'] || {}
  }

  if (localeConfig.default['number-formats']) {
    numberFormats[localeKey] = localeConfig.default['number-formats'] || {}
  }
}

for (const localeKey of Object.keys(messages)) {
  messages[localeKey] = { ...messages[localeKey], ...localeNameList }
}

console.log({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages,
  datetimeFormats,
  numberFormats,
})

const i18n = createI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages,
  datetimeFormats,
  numberFormats,
})

export type AvailableLocales = keyof typeof messages
export default i18n
