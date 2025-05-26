import { createI18n } from 'vue-i18n'

interface localeConfig {
  'language-name': string
  messages: Record<string, string>
}

const locales = import.meta.glob('./locales/*.json', { eager: true }) as Record<
  string,
  { default: localeConfig }
>
const localeNameList: Record<string, string> = {}

const messages: Record<string, Record<string, string>> = {}
for (const [path, localeConfig] of Object.entries(locales)) {
  const localeKeyReg = path.match(/([a-z]{2}-[a-z]{2})\.json$/i)
  if (!localeKeyReg) {
    continue
  }
  const localeKey = localeKeyReg[1].toLowerCase()
  localeNameList[`$${localeKey}`] = localeConfig.default['language-name']
  messages[localeKey] = localeConfig.default.messages
}

for (const localeKey of Object.keys(messages)) {
  messages[localeKey] = { ...messages[localeKey], ...localeNameList }
}

const i18n = createI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages,
})

export type AvailableLocales = keyof typeof messages
export default i18n
