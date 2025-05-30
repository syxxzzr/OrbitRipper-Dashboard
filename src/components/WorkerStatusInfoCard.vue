<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card class="w-70 h-34 gap-2">
    <CardHeader>
      <CardTitle>{{ $t('worker-status') }}</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-col space-y-1">
      <div class="flex justify-evenly text-sm opacity-65">
        <span>Total</span>
        <span class="select-none">/</span>
        <span>Online</span>
        <span class="select-none">/</span>
        <span>Running</span>
      </div>
      <div class="flex justify-evenly text-2xl">
        <span>10</span>
        <span class="select-none opacity-65">/</span>
        <span>9</span>
        <span class="select-none opacity-65">/</span>
        <span>8</span>
      </div>
    </CardContent>
  </Card>
</template>
