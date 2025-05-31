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
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  countToDelete: number
  onConfirm: Function
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button
        :variant="props.variant"
        :size="props.size"
        :as="props.as"
        :asChild="props.asChild"
        :class="props.class"
      >
        <slot />
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ $t('delete-hint-title') }}</AlertDialogTitle>
        <AlertDialogDescription>
          {{ $t('delete-hint-description', { count: props.countToDelete }) }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{{ $t('cancel') }}</AlertDialogCancel>
        <AlertDialogAction @click="props.onConfirm">
          {{ $t('confirm') }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
