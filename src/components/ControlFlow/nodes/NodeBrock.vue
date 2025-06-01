<script setup lang="ts">
interface Props {}

const props = defineProps<Props>()
</script>

<template>
  <div class="bg-secondary border-2 border-secondary-foreground rounded-lg overflow-hidden">
    <div :class="`p-1 text-sm bg-blue-400 text-secondary opacity-60`">| hello</div>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
