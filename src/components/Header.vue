<script setup lang="ts">
import { Breadcrumb, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeSwitcher from '@/components/ThemeToggle.vue'
import LanguageSwitcher from '@/components/LocaleToggle.vue'
</script>

<template>
  <header class="flex items-center h-12">
    <SidebarTrigger class="mx-2" />
    <Breadcrumb>
      <BreadcrumbList class="text-base">
        <span class="select-none">|</span>
        <BreadcrumbPage>
          {{ $t($route.meta.key) }}
        </BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
    <div></div>
    <ThemeSwitcher class="ml-auto mr-2" />
    <LanguageSwitcher class="mr-2" />
  </header>
</template>

<style scoped></style>
