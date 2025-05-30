<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

import { useFrontendStore } from '@/stores/useFrontendStore.ts'

const frontendStore = useFrontendStore()
const { locale } = useI18n()

onMounted(() => {
  locale.value = frontendStore.locale
  document.documentElement.classList.toggle('dark', frontendStore.themeDark)

  watchEffect(() => (locale.value = frontendStore.locale))
  watchEffect(() => document.documentElement.classList.toggle('dark', frontendStore.themeDark))
})
</script>

<template>
  <main>
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <Header />
        <main class="flex flex-1 px-5 py-2 space-x-2 space-y-2">
          <RouterView />
        </main>
      </SidebarInset>
    </SidebarProvider>
  </main>
</template>
