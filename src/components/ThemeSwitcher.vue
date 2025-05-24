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
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    :class="cn('w-7 h-7 text-[var(--sidebar-foreground)]', props.class)"
    @click="switchTheme"
  >
    <Sun v-if="frontendStore.theme === 'light'" class="w-5 h-5" />
    <Moon v-else-if="frontendStore.theme === 'dark'" class="w-5 h-5" />
    <SunMoon v-else class="w-5 h-5" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
