import { createI18n } from 'vue-i18n'

const messages: Record<string, Record<string, string>> = {
  'en-us': {
    'language-name': 'English',

    'orbit-ripping': 'Orbit Ripping',

    dashboard: 'Dashboard',
    projects: 'Projects',
    tasks: 'Tasks',
    workers: 'Workers',
    settings: 'Settings',

    light: 'light',
    dark: 'dark',
    system: 'system',
  },
  'zh-cn': {
    'language-name': '简体中文',

    dashboard: '仪表盘',
    projects: '项目',
    tasks: '任务',
    settings: '设置',

    light: '浅色模式',
    dark: '深色模式',
    system: '跟随系统',
  },
}

const i18n = createI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages,
})

export default i18n
