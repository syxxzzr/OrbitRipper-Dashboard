<script setup lang="ts">
import { LayoutDashboard, ClipboardList, PencilRuler, Gpu, Settings } from 'lucide-vue-next'
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

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: PencilRuler,
  },
  {
    title: 'Tasks',
    url: '/tasks',
    icon: ClipboardList,
  },
  {
    title: 'Workers',
    url: '/workers',
    icon: Gpu,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
]
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarContent>
      <SidebarHeader>
        <a class="flex justify-center">
          <span class="text-lg"> Orbit Ripping </span>
        </a>
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupContent class="mb-auto">
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton class="py-5" asChild>
                <RouterLink :to="item.url">
                  <component :is="item.icon" />
                  <span class="text-center">{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
