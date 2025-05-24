import { createRouter, createWebHistory } from 'vue-router'

import { LayoutDashboard, ClipboardList, PencilRuler, Gpu, Settings } from 'lucide-vue-next'
import DashboardView from '@/views/DashboardView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TasksView from '@/views/TasksView.vue'
import WorkersView from '@/views/WorkersView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { renderOnSidebar: true, icon: LayoutDashboard },
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
      meta: { renderOnSidebar: true, icon: ClipboardList },
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: TasksView,
      meta: { renderOnSidebar: true, icon: PencilRuler },
    },
    {
      path: '/workers',
      name: 'Workers',
      component: WorkersView,
      meta: { renderOnSidebar: true, icon: Gpu },
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView,
      meta: { renderOnSidebar: true, icon: Settings },
    },

    { path: '/', redirect: '/dashboard' },
  ],
})

export default router
