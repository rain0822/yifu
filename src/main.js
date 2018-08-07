import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import router from './router'

Vue.use(Buefy);
Vue.use(Vuex);

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
