import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'

export type ThemeSchema = 'auto' | 'light' | 'dark'

export const useFrontendStore = defineStore(
  'FrontendSetting',
  () => {
    // theme
    const theme: Ref<ThemeSchema> = ref('auto')

    // locale
    const locale: Ref<string> = ref('en-us')

    const themeDark: Ref<boolean> = computed(() =>
      theme.value === 'auto'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : theme.value === 'dark',
    )

    return { theme, locale, themeDark }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
