<script setup lang="ts">
import { Button } from '@/components/ui/button'

import { Text, ArrowDownWideNarrow, ArrowUpWideNarrow } from 'lucide-vue-next'

import type { PrimitiveProps } from 'reka-ui'
import type { Column } from '@tanstack/vue-table'

interface Props extends PrimitiveProps {
  localeKey: string
  column: Column<ProjectInfo>
}

const props = defineProps<Props>()

function getSorted() {
  switch (props.column.getIsSorted()) {
    case false:
      return Text
    case 'asc':
      return ArrowUpWideNarrow
    case 'desc':
      return ArrowDownWideNarrow
  }
}
</script>

<template>
  <div class="flex flex-row items-center space-x-2">
    <p>{{ $t(props.localeKey) }}</p>
    <Button
      variant="ghost"
      @click="
        () => {
          console.log(props.column.getIsSorted())
          props.column.toggleSorting(props.column.getIsSorted() === 'asc')
        }
      "
      class="h-6 w-6"
    >
      <component :is="getSorted()" />
    </Button>
  </div>
</template>
