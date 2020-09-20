import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/components/PostViewer'
import Writer from '@/components/Writer'
import Admin from '@/views/Admin.vue'
import Blog from '@/views/Blog.vue'
import Article from '@/views/Article.vue'
import Login from '@/components/Login'
import store from '@/vuex/store'

import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta)

const requireAuth = () => (from, to, next) => {
  if (store.getters.getUser) return next() // isAuth === true면 페이지 이동
  next('/login') // isAuth === false면 다시 로그인 화면으로 이동
}

const routes= [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title: 'Gracias - Shania Gracia Fanbase'}
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: requireAuth(),
    meta: {title: 'Gracias - Dashboard'}
  },
  {
    path: '/blog/',
    name: 'Blog',
    component: Blog,
    meta: {title: 'Gracias - News'}
  },
  {
    path: '/post/:key',
    name: 'post',
    component: Article,
    meta: {title: 'Gracias - News Article'}
  },
  {
    path: '/edit/:key',
    name: 'edit',
    component: Edit
  },
  {
    path: '/writer',
    name: 'writer',
    component: Writer,
    beforeEnter: requireAuth()
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {title: 'Gracias'}
  },
  {
    path: '/updater',
    name: 'updater',
    component: Writer,
    beforeEnter: requireAuth()
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router