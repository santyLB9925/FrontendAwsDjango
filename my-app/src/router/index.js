import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Registro from '@/components/Registro'
import Lista from '@/components/Lista'
import Edit from '@/components/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/registroAlumno',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/alumnos/edit',
      name: 'Edit',
      component: Edit
    },
     {
      path: '/lista',
      name: 'Lista',
      component: Lista
    },
  ],
  mode:'history'
})
