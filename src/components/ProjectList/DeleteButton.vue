<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button, type ButtonVariants } from '@/components/ui/button'
import type { PrimitiveProps } from 'reka-ui'
import type { Row } from '@tanstack/vue-table'

interface onConfirmFunction {
  (selectedRow: Row<ProjectInfo>[]): void
}

interface Props extends PrimitiveProps {
  selected: Row<ProjectInfo>[]
  onConfirm: onConfirmFunction
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  as: Button,
})
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger
      :variant="props.variant"
      :size="props.size"
      :as="props.as"
      :asChild="props.asChild"
      v-bind="$attrs"
    >
      <slot />
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ $t('delete-hint-title') }}</AlertDialogTitle>
        <AlertDialogDescription>
          {{ $t('delete-hint-description', { count: props.selected.length }) }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{{ $t('cancel') }}</AlertDialogCancel>
        <AlertDialogAction @click="props.onConfirm(props.selected)">
          {{ $t('confirm') }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
