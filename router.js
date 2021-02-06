import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './router.config.js'

Vue.use(Router)

if (module.hot) {
    module.hot.accept([
        './router.config.js',
        './router.js'
    ], function(module) {      
        console.log('Accepting the updated router.js module!')
        location.reload()
    })
}
export function createRouter() {
    return new Router(RouterConfig)
}
