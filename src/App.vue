<script setup lang="ts">
import { useFrontendStore } from '@/stores/useFrontendStore.ts'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

const userStore = useFrontendStore()
</script>

<template>
  <main :class="{ dark: userStore.useDarkTheme }">
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <RouterView />
      </SidebarInset>
    </SidebarProvider>
  </main>
</template>
