import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksHubView from '../views/WorksHubView.vue'
import BlogView from '../views/BlogView.vue'
import PressCenterView from '../views/PressCenterView.vue'
import ContactView from '../views/ContactView.vue'
import OpenDataView from '@/views/WorkViews/OpenDataView.vue'
import GovTransparencyView from '@/views/WorkViews/GovTransparencyView.vue'
import ProjectsInfrastructureView from '@/views/WorkViews/ProjectsInfrastructureView.vue'

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
      name: 'works',
      component: WorksHubView,
    },
    {
      path: '/works/open-data',
      name: 'works-open-data',
      component: OpenDataView,
    },
        {
      path: '/works/gov-transparency',
      name: 'works-gov-transparency',
      component: GovTransparencyView,
    },
        {
      path: '/works/Projects-Infrastructure',
      name: 'works-projects-Infrastructure',
      component: ProjectsInfrastructureView,
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