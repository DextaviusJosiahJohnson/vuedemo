import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import blogPage from '@/components/blogPage.vue'
import galleryPage from '@/components/galleryPage.vue'
import aboutPage from '@/components/aboutPage.vue'
import contactPage from '@/components/contactPage.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'blogPage',
      component: blogPage
    },
    {
      path: '/',
      name: 'galleryPage',
      component: galleryPage
    },
    {
      path: '/',
      name: 'aboutPage',
      component: aboutPage
    },
    {
      path: '/',
      name: 'contactPage',
      component: contactPage
    }
  ]
})

export default router
