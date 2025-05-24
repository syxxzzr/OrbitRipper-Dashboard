import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TasksView from '@/views/TasksView.vue'
import WorkersView from '@/views/WorkersView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/dashboard', component: DashboardView },
    { path: '/projects', component: ProjectsView },
    { path: '/tasks', component: TasksView },
    { path: '/workers', component: WorkersView },
    { path: '/settings', component: SettingsView },

    { path: '/', redirect: '/dashboard' },
  ],
})

export default router
