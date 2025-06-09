import { createRouter, createWebHistory } from 'vue-router'

import { LayoutDashboard, ClipboardList, PencilRuler, Gpu, Settings } from 'lucide-vue-next'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { key: 'dashboard', renderOnSidebar: true, icon: LayoutDashboard },
    },
    {
      path: '/projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: { key: 'projects', renderOnSidebar: true, icon: ClipboardList },
    },
    {
      path: '/tasks',
      component: () => import('@/views/TasksView.vue'),
      meta: { key: 'tasks', renderOnSidebar: true, icon: PencilRuler },
    },
    {
      path: '/workers',
      component: () => import('@/views/WorkersView.vue'),
      meta: { key: 'workers', renderOnSidebar: true, icon: Gpu },
    },
    {
      path: '/settings',
      component: () => import('@/views/SettingsView.vue'),
      meta: { key: 'settings', renderOnSidebar: true, icon: Settings },
    },

    { path: '/', redirect: '/dashboard' },
  ],
})

export default router
