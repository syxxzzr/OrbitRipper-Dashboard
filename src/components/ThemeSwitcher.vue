<script setup lang="ts">
import { computed, watchEffect, type HTMLAttributes } from 'vue'
import { Button } from '@/components/ui/button'
import { Sun, Moon, SunMoon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { useColorMode, useCycleList } from '@vueuse/core'
import { useFrontendStore } from '@/stores/useFrontendStore.ts'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const frontendStore = useFrontendStore()
const theme = useColorMode()

const { state, next } = useCycleList(['light', 'dark', 'auto'] as const, {
  initialValue: frontendStore.theme,
})

watchEffect(() => (theme.value = state.value))
watchEffect(() => (frontendStore.theme = state.value))

const themeIcon = computed(() => {
  switch (state.value) {
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
    :class="cn('w-8 h-8 text-[var(--sidebar-foreground)]', props.class)"
    @click="next()"
  >
    <component :is="themeIcon" />
  </Button>
</template>
