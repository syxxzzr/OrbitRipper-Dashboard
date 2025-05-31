import type { IntlDateTimeFormat, IntlNumberFormat, LocaleMessages, VueMessageType } from 'vue-i18n'

export declare type LocaleMessageList = {
  [key: string]: LocaleMessages<VueMessageType>
}

export declare type LocaleDateTimeFormatList = {
  [key: string]: IntlDateTimeFormat
}

export declare type LocaleNumberFormatList = {
  [key: string]: IntlNumberFormat
}

export declare interface LocaleConfig {
  'language-name': string
  'datetime-formats'?: IntlNumberFormat
  'number-formats'?: IntlNumberFormat
  messages: LocaleMessages<VueMessageType>
}
