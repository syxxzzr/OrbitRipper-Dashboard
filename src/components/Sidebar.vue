<script setup lang="ts">
import { Orbit } from 'lucide-vue-next'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useRouter } from 'vue-router'

const routes = useRouter().getRoutes()
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarContent>
      <SidebarHeader>
        <a class="flex justify-center">
          <Orbit class="group-data-[collapsible=]:hidden" />
          <span class="text-lg whitespace-nowrap group-data-[collapsible=icon]:hidden">
            {{ $t('orbit-ripping') }}
          </span>
        </a>
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupContent class="mb-auto">
          <SidebarMenu>
            <template v-for="route in routes">
              <SidebarMenuItem v-if="route.meta.renderOnSidebar" :key="route.path">
                <SidebarMenuButton class="py-5" asChild>
                  <RouterLink :to="route.path">
                    <component :is="route.meta.icon" />
                    <span class="text-center">{{ $t(route.meta.identifier) }}</span>
                  </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </template>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
