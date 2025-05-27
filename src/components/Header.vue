<script setup lang="ts">
import { Breadcrumb, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import LanguageSwitcher from '@/components/LocaleSwitcher.vue'
</script>

<template>
  <header
    class="flex h-12 shrink-0 items-center transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-9"
  >
    <SidebarTrigger class="m-2" />
    <Breadcrumb>
      <BreadcrumbList class="text-base">
        <span>|</span>
        <BreadcrumbPage>
          {{ $t($route.meta.key) }}
        </BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
    <div></div>
    <ThemeSwitcher class="ml-auto mr-2" />
    <LanguageSwitcher />
  </header>
</template>

<style scoped></style>
