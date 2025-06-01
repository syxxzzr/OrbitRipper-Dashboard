<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import NodeBrock from '@/components/ControlFlow/nodes/NodeBrock.vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CirclePlay } from 'lucide-vue-next'

interface Props {
  id: string
  data: {
    format: VideoFormat
  }
}
const props = defineProps<Props>()
function onConnect() {
  props.data.format
}
</script>

<template>
  <Card class="w-70 h-34 gap-4">
    <CardHeader>
      <CardTitle>core</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-row items-center space-x-4">
      <CirclePlay :size="45" color="#41B883" class="bg-green-500/10 rounded-sm p-1" />
      <p class="text-xl">1 Tasks Running</p>
    </CardContent>
  </Card>
  <Handle :position="Position.Right" />
</template>
