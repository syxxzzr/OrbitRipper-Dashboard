<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { Button } from '@/components/ui/button'
import { Sun, Moon, SunMoon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { useFrontendStore, type ThemeSchema } from '@/stores/useFrontendStore.ts'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const frontendStore = useFrontendStore()

const themeCycleList: ThemeSchema[] = ['auto', 'light', 'dark']
let themeIndex = themeCycleList.indexOf(frontendStore.theme)
function themeToggle() {
  themeIndex++
  themeIndex %= themeCycleList.length
  frontendStore.theme = themeCycleList[themeIndex]
}

const themeIcon = computed(() => {
  switch (frontendStore.theme) {
    case 'auto':
      return SunMoon
    case 'dark':
      return Moon
    case 'light':
      return Sun
    default:
      return SunMoon
  }
})
</script>

<template>
  <Button
    variant="outline"
    :class="cn('w-9 h-9 text-[var(--sidebar-foreground)]', props.class)"
    @click="themeToggle"
  >
    <component :is="themeIcon" />
  </Button>
</template>
