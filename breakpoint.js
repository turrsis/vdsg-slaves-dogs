function breakpointIndex (bp_name) {
    switch (bp_name || 'md') {
    case 'xs': return 0
    case 'sm': return 1
    case 'md': return 2
    case 'lg': return 3
    case 'xl': return 4
    }
}
export default {
    methods: {
        breakpointNumber () {
            return breakpointIndex(this.$vuetify.breakpoint.name)
        },
        breakpointAttr (xs, sm, md, lg, xl) {
            return arguments[breakpointIndex(this.$vuetify.breakpoint.name)]
        },
        breakpointVisible (xs, sm, md, lg, xl, mode) {
            return arguments[breakpointIndex(this.$vuetify.breakpoint.name)]
                ? 'd-' + (mode || 'flex')
                : 'd-none'
        },
        breakpointSize (xs, sm, md, lg, xl) {
            let arg = arguments[breakpointIndex(this.$vuetify.breakpoint.name)]
            switch (arg) {
            case -2: return 'x-small'
            case -1: return 'small'
            case 0: return 'size-default'
            case 1: return 'large'
            case 2: return 'x-large'
            }
        }
    }
}