import Vue from 'vue'
import Router from 'vue-router'
// import Admin from '@/components/pages/Admin'
import Header from '@/components/Header'
import NavBarLeft from '@/components/NavBarLeft'
import NavBarRight from '@/components/NavBarRight'
import Body from '@/components/Body'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      name: 'Welcome',
      components: {
        Header: Header,
        NavBarLeft: NavBarLeft,
        NavBarRight: NavBarRight,
        Body: Body
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
