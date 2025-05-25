import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

import i18n from '@/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const pinia = createPinia()
pinia.use(persist)
app.use(pinia)

app.use(i18n)

app.mount('#app')
