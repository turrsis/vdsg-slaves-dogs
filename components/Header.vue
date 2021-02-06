<template>
    <v-app-bar v-designer.true app dark class="mx-xs-0 mx-sm-6 mx-md-12 mx-lg-12 mx-xl-12">
        <v-btn x-large to="/" text>
            {{ data.company.name }}
        </v-btn>
        <v-spacer />
        <v-toolbar-items
            class="hidden-sm-and-down"
        >
            <v-btn
                v-for="(item, index) in menuItems"
                :key="index"
                :[breakpointSize(-2,-2,0,1,1)]="true"
                v-bind="item.bind || {}"
                text
                v-on="item.on || {}"
            >
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
        <v-menu>
            <template v-slot:activator="{ on }">
                <v-btn
                    class="hidden-md-and-up"
                    icon
                    v-on="on"
                >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in menuItems"
                    :key="index"
                >
                    <v-btn
                        block
                        x-large
                        v-bind="item.bind || {}"
                        v-on="item.on || {}"
                    >
                        {{ item.title }}
                    </v-btn>
                </v-list-item>
                <v-divider />
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import dbApi from '~data/api.js'
export default {
    components: {
    },
    data: () => ({
        data: dbApi.getCommon(),
    }),
    computed: {
        menuItems () {
            let _this = this
            return [
                {title: 'Litters', bind: {to: '/litters'}},
                {title: 'Our Dogs', bind: {to: '/dogs/our-dogs'}},
                {title: 'Champions', bind: {to: '/dogs/champions'}},
                {title: 'Veterans', bind: {to: '/dogs/veterans'}},
                {title: 'Shows', bind: {to: '/shows'}},
                {title: 'About', bind: {to: '/about'}},
                {title: 'Contacts', on: { click () {
                    _this.$store.commit('dialogs/openContact')
                }}}
            ]
        }
    }
}
</script>