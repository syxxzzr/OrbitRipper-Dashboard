<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import { Card, CardContent } from '@/components/ui/card'
import { Film } from 'lucide-vue-next'
</script>

<template>
  <Card>
    <CardContent class="flex flex-row items-center space-x-4">
      <Film :size="45" class="bg-accent opacity-80 rounded-sm p-1" />
      <div class="flex flex-col space-y-1.5">
        <p class="text-xl">Source Video</p>
        <div class="text-sm opacity-80">
          <p>YUV420P8 30fps</p>
          <p>01:22:31</p>
        </div>
      </div>
    </CardContent>
  </Card>
  <Handle :position="Position.Right" type="source" />
</template>
