<script setup lang="ts">
import { ref } from 'vue'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button, type ButtonVariants } from '@/components/ui/button'
import { toast } from 'vue-sonner'
import { Loader2 } from 'lucide-vue-next'

import type { PrimitiveProps } from 'reka-ui'
import type { Row } from '@tanstack/vue-table'

import { useI18n } from 'vue-i18n'

interface Props extends PrimitiveProps {
  selected: Row<ProjectInfo>[]
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
}

const { t } = useI18n()
const props = withDefaults(defineProps<Props>(), {
  as: Button,
})
const open = ref(false)
const isLoading = ref(false)

async function deleteProjects() {
  isLoading.value = true
  setTimeout(() => {
    open.value = false
    isLoading.value = false
    toast(t('delete-success'), {
      description: t('delete-success-info', { count: props.selected.length }),
    })
  }, 3000)
  console.log(props.selected)
}
</script>

<template>
  <AlertDialog v-model:open="open">
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
        <Button @click="deleteProjects" :disabled="isLoading">
          <Loader2 v-if="isLoading" class="animate-spin" />
          {{ $t('confirm') }}
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
