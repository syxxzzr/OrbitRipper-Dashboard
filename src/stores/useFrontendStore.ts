import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'

export type ThemeType = 'system' | 'light' | 'dark'
export type LocateLanguage = 'en-us' | 'zh-cn'

export const useFrontendStore = defineStore(
  'FrontendSetting',
  () => {
    // theme
    const theme: Ref<ThemeType> = ref('system')

    // language
    const language: Ref<LocateLanguage> = ref('zh-cn')

    const useDarkTheme = computed(() =>
      theme.value === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : theme.value === 'dark',
    )

    return { theme, language, useDarkTheme }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
