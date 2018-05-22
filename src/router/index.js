import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import Home from '@/components/Home'
import Reading from '@/components/Reading/Reading'
import Writing from '@/components/Writing/Writing'

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
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: 'Reading',
          component: Reading
        },
        {
          path: 'Writing',
          component: Writing
        }
      ]
    }
  ]
})
