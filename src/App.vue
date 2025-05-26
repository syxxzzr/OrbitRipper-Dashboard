<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

import { useFrontendStore } from '@/stores/useFrontendStore.ts'

const frontendStore = useFrontendStore()

onMounted(() => {
  const { locale } = useI18n()
  locale.value = frontendStore.locale
  watch(locale, () => {
    if (frontendStore.locale !== locale.value) {
      frontendStore.locale = locale.value
    }
  })
})
</script>

<template>
  <main>
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <RouterView />
      </SidebarInset>
    </SidebarProvider>
  </main>
</template>
