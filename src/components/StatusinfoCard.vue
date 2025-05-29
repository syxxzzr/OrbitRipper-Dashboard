<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CirclePlay, CircleX } from 'lucide-vue-next'
</script>

<template>
  <Card class="w-70">
    <CardHeader>
      <CardTitle>{{ $t('task-status') }}</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-row items-center space-x-4">
      <CirclePlay :size="38" color="#41B883" class="bg-green-500/10 rounded-sm p-1" />
      <p class="text-lg">1 Tasks Running</p>
    </CardContent>
  </Card>
</template>
