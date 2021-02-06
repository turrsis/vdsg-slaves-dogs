import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleDefault from './modules/default.js'
import moduleDialogs from './modules/dialogs.js'

export function createStore () {
    return new Vuex.Store({
        modules: {
            default: moduleDefault,
            dialogs: moduleDialogs,
        }
    })
}

/*if (module.hot) {
    module.hot.accept([
        './modules/default.js',
        './modules/dialogs.js',
    ], () => {
        store.hotUpdate({
            modules: {
                default: require('./modules/default.js').default,
                dialogs: require('./modules/dialogs.js').default,
            }
        })
    })
}*/