import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import UserList from '@/components/UserList.vue'
import UserForm from '@/components/UserForm.vue'
import UserEdit from '@/components/UserEdit.vue'
import ResumePage from '@/components/ResumePage.vue'
import MediaPage from '@/components/MediaPage.vue'
import GridPage from '@/components/GridPage.vue'
import FlexPage from '@/components/FlexPage.vue'
import ButtonDemoPage from '@/components/ButtonDemoPage.vue'
import StatusPage from '@/components/StatusPage.vue'
import AngelsGateway from '@/components/AngelsGateway.vue'
import AngelsDetail from '@/components/AngelsDetail.vue'
import AngelsFinal from '@/components/AngelsFinal.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/users', name: 'UserList', component: UserList },
    { path: '/users/new', name: 'UserForm', component: UserForm },
    { path: '/users/edit/:id', name: 'UserEdit', component: UserEdit },
    { path: '/profile', name: 'ResumePage', component: ResumePage },
    { path: '/media', name: 'MediaPage', component: MediaPage },
    { path: '/grid', name: 'GridPage', component: GridPage },
    { path: '/flex', name: 'FlexPage', component: FlexPage },
    { path: '/buttons', name: 'ButtonDemoPage', component: ButtonDemoPage },
    { path: '/status', name: 'StatusPage', component: StatusPage },
    { path: '/angels', name: 'AngelsGateway', component: AngelsGateway },
    { path: '/angels/detail', name: 'AngelsDetail', component: AngelsDetail },
    { path: '/angels/final', name: 'AngelsFinal', component: AngelsFinal },
  ]
})

export default router
