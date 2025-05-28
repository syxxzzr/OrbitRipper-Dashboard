<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-vue-next'
import { cn } from '@/lib/utils.ts'
import type { HTMLAttributes } from 'vue'
import { useFrontendStore } from '@/stores/useFrontendStore.ts'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const { availableLocales } = useI18n()
const frontendStore = useFrontendStore()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" :class="cn('w-9 h-9', props.class)">
        <Languages />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup v-model="frontendStore.locale">
        <DropdownMenuRadioItem
          v-for="localeKey in availableLocales"
          :value="localeKey"
          :key="localeKey"
          >{{ $t(`$${localeKey}`) }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
