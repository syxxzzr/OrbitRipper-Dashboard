<script setup lang="ts">
import { Breadcrumb, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'
import SidebarTrigger from '@/components/SidebarTrigger.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
</script>

<template>
  <header
    class="flex h-12 shrink-0 items-center transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-9"
  >
    <SidebarTrigger class="m-2" />
    <Breadcrumb>
      <BreadcrumbList class="text-base">
        <span class="text-[var(--color-muted-foreground)] select-none">|</span>
        <BreadcrumbPage>
          {{ $route.name }}
        </BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
    <div class="text-[var(--color-muted-foreground)]"></div>
    <ThemeSwitcher class="ml-auto mr-2" />
  </header>
</template>

<style scoped></style>
