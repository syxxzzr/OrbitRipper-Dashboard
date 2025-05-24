<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar.vue'
import SidebarTrigger from '@/components/SidebarTrigger.vue'
</script>

<template>
  <main>
    <SidebarProvider>
      <Sidebar />
      <SidebarTrigger />
    </SidebarProvider>
  </main>
</template>
