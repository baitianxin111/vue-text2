import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/views/home/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',    
      component: Home
    }   
  ]
})
