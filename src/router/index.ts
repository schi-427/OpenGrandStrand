import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksHubView from '../views/WorkViews/WorksHubView.vue'
import BlogView from '../views/BlogView.vue'
import PressCenterView from '../views/PressCenterView.vue'
import ContactView from '../views/ContactView.vue'
import WorkLayout from '../components/layouts/WorkLayout.vue'
import OpenDataView from '@/views/WorkViews/OpenDataView.vue'
import GovTransparencyView from '@/views/WorkViews/GovTransparencyView.vue'
import ProjectsInfrastructureView from '@/views/WorkViews/ProjectsInfrastructureView.vue'
import AccountabilityEthicsView from '@/views/WorkViews/AccountabilityEthicsView.vue'
import PublicCommsView from '@/views/WorkViews/PublicCommsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/works',
      component: WorkLayout,
      children:
        [
          {
            path: '',
            component: WorksHubView,
          },
          {
            path: 'open-data',
            component: OpenDataView,
          },
          {
            path: 'gov-transparency',
            component: GovTransparencyView,
          },
          {
            path: 'projects-infrastructure',
            component: ProjectsInfrastructureView,
          },
          {
            path: 'accountability-ethics',
            component: AccountabilityEthicsView,
          },
          {
            path: 'public-comms',
            component: PublicCommsView,
          }
        ],
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/press',
      name: 'press',
      component: PressCenterView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router