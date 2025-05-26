<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { ThemeType } from '@/stores/useFrontendStore.ts'
import { Sun, Moon, SunMoon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useFrontendStore } from '@/stores/useFrontendStore.ts'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const frontendStore = useFrontendStore()

const themeList: ThemeType[] = ['system', 'light', 'dark']
let themeIndex = themeList.indexOf(frontendStore.theme)
function switchTheme() {
  themeIndex++
  themeIndex %= themeList.length
  frontendStore.theme = themeList[themeIndex]
}
</script>

<template>
  <Button
    variant="ghost"
    :class="cn('w-8 h-8 text-[var(--color-primary-foreground)]', props.class)"
    @click="switchTheme"
  >
    <Sun v-if="frontendStore.theme === 'light'" class="w-6.5 h-6.5" />
    <Moon v-else-if="frontendStore.theme === 'dark'" class="w-6.5 h-6.5" />
    <SunMoon v-else class="w-6.5 h-6.5" />
  </Button>
</template>
