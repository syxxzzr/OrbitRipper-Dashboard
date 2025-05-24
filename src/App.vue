<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <main>
    <SidebarProvider>
      <SideBar />
    </SidebarProvider>
  </main>
</template>
