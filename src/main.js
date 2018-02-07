import Vue from 'vue'
import VueRouter  from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    // Does history mode work on WebView Cordova?
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return {
            x: 0, y: 700
        }
    }
})

router.beforeEach((to, from, next) => {
    console.log('global router beforeEach', to.path, from.path)
    next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
