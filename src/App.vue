<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar'
import SideBar from '@/components/SideBar.vue'
import SidebarTrigger from '@/components/SidebarTrigger.vue'
</script>

<template>
  <main>
    <SidebarProvider>
      <SideBar />
      <SidebarTrigger />
    </SidebarProvider>
  </main>
</template>
