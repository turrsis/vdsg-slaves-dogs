<template>
    <component :is="currentLayout" />
</template>

<script>
export default {
    name: 'AppLayout',
    props: {
        layout: {
            type: String,
            default: 'default'
        },
        loading: {
            type: String,
            default: null
        },
        prefix: {
            type: String,
            default: ''
        },
        path: {
            type: String,
            default: 'layouts'
        }
    },
    data () {
        return {
            layoutName: 'default'
        }
    },
    computed: {
        currentLayout () {
            if (!this.layoutName) return
            const ln = this.prefix + this.layoutName
            return () => import(`./${this.path}/${ln}.vue` /* webpackChunkName: "layout-[request]" */)
        }
    },
    watch: {
        '$route': {
            immediate: true,
            handler (route) {
                const newLayout = route.meta.layout
                if (!newLayout && !this.$route.name) { this.layoutName = this.loading; return }
                if (!newLayout) { this.layoutName = this.layout || 'default'; return }
                this.layoutName = newLayout
            }
        }
    }
}
</script>