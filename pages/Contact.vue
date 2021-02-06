<template>
    <v-dialog v-model="$store.state.dialogs.contact" v-designer.true max-width="50%">
        <v-card>
            <v-system-bar window>
                <span>Contacts</span>
                <v-spacer />
                <v-icon @click="$store.commit('dialogs/closeContact')">mdi-close</v-icon>
            </v-system-bar>
            <v-card-title class="headline">
                {{ data.company.country }}<br>
                {{ data.company.employees.owner.name }}
            </v-card-title>
            <v-card-subtitle>
                {{ data.company.employees.owner.phone }} <br>
            </v-card-subtitle>
            <v-card-text />
            <v-card-actions class="flex-wrap">
                <v-btn
                    v-for="(item, key) in data.company.social"
                    :key="key"
                    outlined
                    :href="item.href"
                    target="_blank"
                    class="flex-grow-1 ma-0"
                >
                    <v-icon small>{{ socialIcons[key] }}</v-icon>
                    {{ item.text }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
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