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
      component: DashboardView,
      meta: { identifier: 'dashboard', renderOnSidebar: true, icon: LayoutDashboard },
    },
    {
      path: '/projects',
      component: ProjectsView,
      meta: { identifier: 'projects', renderOnSidebar: true, icon: ClipboardList },
    },
    {
      path: '/tasks',
      component: TasksView,
      meta: { identifier: 'tasks', renderOnSidebar: true, icon: PencilRuler },
    },
    {
      path: '/workers',
      component: WorkersView,
      meta: { identifier: 'workers', renderOnSidebar: true, icon: Gpu },
    },
    {
      path: '/settings',
      component: SettingsView,
      meta: { identifier: 'settings', renderOnSidebar: true, icon: Settings },
    },

    { path: '/', redirect: '/dashboard' },
  ],
})

export default router
