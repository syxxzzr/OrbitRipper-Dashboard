<script setup lang="ts">
import { PanelLeftClose, PanelLeftOpen } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar, open } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    :class="cn('w-7 h-7 text-[var(--sidebar-foreground)]', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeftClose v-if="open" class="w-5 h-5" />
    <PanelLeftOpen v-else class="w-5 h-5" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
