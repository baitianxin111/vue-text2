// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import '@/assets/css/app'
import router from '@/router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouse from 'vue-resource'
// import '@/assets/css/app'
import './assets/css/bootstrap.min'
// Vue.use(VueAxios,Axios)
Vue.config.productionTip = false
Vue.use(VueRouse)

// import jsonp from 'jsonp'
// Vue.use(jsonp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
