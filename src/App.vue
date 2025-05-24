<script setup lang="ts">
import { useFrontendStore } from '@/stores/useFrontendStore.ts'

import { SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import SidebarTrigger from '@/components/SidebarTrigger.vue'

const userStore = useFrontendStore()
</script>

<template>
  <main :class="{ dark: userStore.useDarkTheme }">
    <SidebarProvider>
      <Sidebar />
      <SidebarTrigger />
      <ThemeSwitcher />
    </SidebarProvider>
  </main>
</template>
