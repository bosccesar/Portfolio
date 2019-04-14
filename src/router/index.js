import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/PageWelcome'
import SoftwareEngineer from '@/pages/PageSoftwareEngineer'
import VideoGamesEngineer from '@/pages/PageVideoGamesEngineer'
import OtherExperiences from '@/pages/PageOtherExperiences'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      name: 'welcome',
      component: Welcome
    },
    { path: '/softwareEngineer',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      name: 'softwareEngineer',
      component: SoftwareEngineer
    },
    { path: '/videoGamesEngineer',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      name: 'videoGamesEngineer',
      component: VideoGamesEngineer
    },
    { path: '/otherExperiences',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      name: 'otherExperiences',
      component: OtherExperiences
    },
    {
      path: '/admin',
      name: 'admin'
      // component: bodyAdmin: Admin
    }
  ]
})
