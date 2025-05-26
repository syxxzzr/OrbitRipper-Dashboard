import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { BasicColorSchema } from '@vueuse/core'
import type { AvailableLocales } from '@/i18n'

export const useFrontendStore = defineStore(
  'FrontendSetting',
  () => {
    // theme
    const theme: Ref<BasicColorSchema> = ref('auto')

    // language
    const locale: Ref<AvailableLocales> = ref('zh-cn')

    return { theme, locale }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
