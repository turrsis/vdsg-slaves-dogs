<template>
    <v-footer v-designer.true app dark class="mx-xs-0 mx-sm-6 mx-md-12 mx-lg-12 mx-xl-12">
        <v-row align-content="stretch" no-gutters dark>
            <v-col class="text-center pa-0 d-none d-sm-flex" cols="6">
                &copy;{{ new Date().getFullYear() }} — <strong>{{ data.company.name }}</strong>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6" lg="6"
                   xl="6"
            >
                <v-btn
                    v-for="(item, key) in data.company.social"
                    :key="key"
                    :href="item.href"
                    target="_blank"
                    class="flex-grow-1 ma-0"
                    icon
                >
                    <v-icon small>{{ socialIcons[key] }}</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import dbApi from '~data/api.js'
export default {
    data () { return {
        data: dbApi.getCommon(),
        socialIcons: {
            phone: 'mdi-phone',
            mail: 'mdi-at',
            facebook: 'mdi-facebook',
            instagram: 'mdi-instagram',
            skype: 'mdi-skype',
            twitter: 'mdi-twitter'
        }
    }}
}
</script>