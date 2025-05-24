<script setup lang="ts">
import SidebarTrigger from '@/components/SidebarTrigger.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
</script>

<template>
  <header
    class="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-9"
  >
    <SidebarTrigger class="m-2" />
    <ThemeSwitcher class="ml-auto mr-2" />
  </header>
</template>

<style scoped></style>
