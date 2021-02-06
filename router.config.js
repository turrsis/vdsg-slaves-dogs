//import Vue from 'vue'
import utils from "~common/utils/utils.cli.js"
const header = utils.interopDefault(import('./components/Header.vue'
/* webpackChunkName: "components_header" */
))
const footer = utils.interopDefault(import('./components/Footer.vue'
/* webpackChunkName: "components_footer" */
))

export default {
    mode: 'history',
    base: '/',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        name: 'home',
        components: {
            header: () => header,
            default: () => utils.interopDefault(import('./pages/Home.vue')),
            footer: () => footer,
        }
    }, {
        path: '/litters',
        name: 'litters',
        components: {
            header: () => header,
            default: () => utils.interopDefault(import('./pages/Litters.vue')),
            footer: () => footer,
        }
    }, {
        path: '/dogs/:filter',
        name: 'dogs',
        components: {
            header: () => header,
            default: () => utils.interopDefault(import('./pages/Dogs.vue')),
            footer: () => footer,
        },
        props: { default: true }
    }, {
        path: '/shows',
        name: 'shows',
        components: {
            header: () => header,
            default: () => utils.interopDefault(import('./pages/Shows.vue')),
            footer: () => footer,
        }
    }, {
        path: '/contact',
        name: 'contact',
        components: {
            header: () => header,
            default: () => utils.interopDefault(import('./pages/Contact.vue')),
            footer: () => footer,
        }
    }, {
        path: '/about',
        name: 'about',
        components: {
            header: () => header,
            default: () => utils.interopDefault(import('./pages/About.vue')),
            footer: () => footer,
        }
    }, {
        path: '*',
        name: 'Error'
    }]
}