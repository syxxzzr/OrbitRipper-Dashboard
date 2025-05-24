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
      meta: { renderOnSidebar: true, identifier: 'dashboard', icon: LayoutDashboard },
    },
    {
      path: '/projects',
      component: ProjectsView,
      meta: { renderOnSidebar: true, identifier: 'projects', icon: ClipboardList },
    },
    {
      path: '/tasks',
      component: TasksView,
      meta: { renderOnSidebar: true, identifier: 'tasks', icon: PencilRuler },
    },
    {
      path: '/workers',
      component: WorkersView,
      meta: { renderOnSidebar: true, identifier: 'workers', icon: Gpu },
    },
    {
      path: '/settings',
      component: SettingsView,
      meta: { renderOnSidebar: true, identifier: 'settings', icon: Settings },
    },

    { path: '/', redirect: '/dashboard' },
  ],
})

export default router
