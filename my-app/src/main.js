import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Login from '@/components/Login'
 
Vue.use(VueAxios, axios)
 
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  Login,
  render: h => h(App)
}).$mount('#app')