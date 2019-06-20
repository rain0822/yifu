import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Show from './views/Show.vue'
import Space from './views/Space.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Contact from './views/Contact.vue'
import Partner from './views/Partner.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/show',
      name: 'show',
      component: Show
    }, {
      path: '/space',
      name: 'space',
      component: Space
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/news',
      name: 'news',
      component: News
    }, {
      path: '/partner',
      name: 'partner',
      component: Partner
    }
  ]
})
