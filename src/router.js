import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Show from './views/Show.vue'
import Space from './views/Space.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/space',
      name: 'space',
      component: Space
    }
  ]
})
