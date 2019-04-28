import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Home from '@/components/Home/Home.vue'
import Test from '@/components/Test.vue'
import Users from '@/components/Users/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{ path: '/users', name: 'users', component: Users }]
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
