import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import configRouter from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/index.css'

Vue.use(VueRouter)
Vue.config.warnExpressionErrors = false

const router = new VueRouter({
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router)
sync(store, router)

router.redirect({
  '*': '/home/index',
  '/home': '/home/index'
})

router.start(Vue.extend(App), '#app')
window.router = router
