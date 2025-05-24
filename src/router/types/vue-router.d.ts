import { RouteMeta as OriginalRouteMeta } from 'vue-router'
import type { FunctionalComponent } from 'vue'

declare module 'vue-router' {
  interface RouteMeta extends OriginalRouteMeta {
    identifier: string
    renderOnSidebar?: boolean
    icon?: FunctionalComponent
  }
}
