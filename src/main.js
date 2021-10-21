import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store/index.js'



import Login from './components/Login'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);


const VuexStore = new Vuex.Store(store);
const routes=[
  {path: "/login", component: Login},
]
const router = new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router,
  store:VuexStore
}).$mount('#app')
