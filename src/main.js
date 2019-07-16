import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import VueCarousel3d from 'vue-carousel-3d'
import Moment from 'vue-moment'
import VueYoutube from 'vue-youtube'

Vue.use(Buefy);
Vue.use(Vuex);
Vue.use(VueCarousel3d);
Vue.use(Moment);
Vue.use(VueYoutube);

Vue.config.productionTip = false;

/*const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

store.commit('increment');*/

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
