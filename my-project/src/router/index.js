import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/views/home/index'
import Shop from '@/views/shop/shop'
import Man from '@/views/man/man'
import Maganize from '@/views/maganize/maganize'
import Share from '@/views/share/share'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
      // children: [
      //   {
      //     path:'/shop'
      //   }
      //
      // ]
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/share',
      component: Share
    },
    {
      path: '/man',
      component: Man
    },
    {
      path: '/maganize',
      component: Maganize
    }
  ]
})
