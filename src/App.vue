<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

import { useFrontendStore } from '@/stores/useFrontendStore.ts'

const frontendStore = useFrontendStore()

onMounted(() => {
  const { locale } = useI18n()
  locale.value = frontendStore.language
})
</script>

<template>
  <main :class="{ dark: frontendStore.useDarkTheme }">
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <RouterView />
      </SidebarInset>
    </SidebarProvider>
  </main>
</template>
