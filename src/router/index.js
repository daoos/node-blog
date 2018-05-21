import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    }
  ]
})
