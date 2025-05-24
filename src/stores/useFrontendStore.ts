import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
export type ThemeType = 'system' | 'light' | 'dark'

export const useFrontendStore = defineStore(
  'FrontendSetting',
  () => {
    // theme
    const theme: Ref<ThemeType> = ref('system')

    const useDarkTheme = computed(() =>
      theme.value === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : theme.value === 'dark',
    )

    return { theme, useDarkTheme }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
