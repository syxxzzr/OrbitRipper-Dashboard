<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import { Card, CardContent } from '@/components/ui/card'
import { Film } from 'lucide-vue-next'
import type { VideoFormat } from '@/types/control-flow'

interface Props {
  data: {
    format: VideoFormat
    bitrate: number
    frames: number
  }
}

const props = defineProps<Props>()
</script>

<template>
  <Card>
    <CardContent class="flex flex-row items-center space-x-4">
      <Film :size="45" class="bg-accent opacity-80 rounded-sm p-1" />
      <div class="flex flex-col space-y-1.5">
        <p class="text-xl">Source Video</p>
        <div class="text-sm opacity-80">
          <p>{{ props.data.format }} {{ props.data.bitrate }}fps</p>
          <p>{{ props.data.frames }} Frames</p>
        </div>
      </div>
    </CardContent>
  </Card>
  <Handle :position="Position.Right" type="source" />
</template>
