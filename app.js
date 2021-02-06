import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router.js'
import { sync } from 'vuex-router-sync'
import vuetify from '~metadata/vuetify/index.js'

export function createApp () {
    const store = createStore()
    const router = createRouter()
    sync(store, router)

    const app = new Vue({
        vuetify,
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}
