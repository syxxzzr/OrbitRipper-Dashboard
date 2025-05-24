import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { useFrontendStore } from '@/stores/useFrontendStore.ts'

const app = createApp(App)

app.use(router)

const pinia = createPinia()
pinia.use(persist)
app.use(pinia)

import('@/locales/en-us.json')
const frontendStore = useFrontendStore()
const i18n = createI18n({
  locale: frontendStore.language,
  fallbackLocale: 'en-us',
  messages: {
    'en-us': await import('@/locales/en-us.json'),
    'zh-cn': await import('@/locales/zh-cn.json'),
  },
})
app.use(i18n)

app.mount('#app')
