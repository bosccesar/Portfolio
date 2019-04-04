import Vue from 'vue'
import Router from 'vue-router'
// import Admin from '@/components/pages/Admin'
import HeaderWelcome from '@/components/HeaderWelcome'
// import HeaderAdmin from '@/components/HeaderAdmin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      name: 'Welcome',
      components: {
        headerWelcome: HeaderWelcome
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      components: {
        // headerAdmin: HeaderAdmin,
        // bodyAdmin: Admin
      }
    }
  ]
})
