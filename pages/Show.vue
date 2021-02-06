<template>
    <v-sheet v-designer.true elevation="5" class="py-1">
        <v-sheet elevation="5" class="ma-2">
            <v-card>
                <v-list-item>
                    <v-list-item-avatar color="yellow" />
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{ show.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ show.date }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ show.country }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-sheet>
        <v-sheet elevation="5" class="ma-2">
            <v-container fluid>
                <v-row>
                    <v-img 
                        v-for="i in 10"
                        :key="i"
                        :src="`/public/empty.jpg`"
                        :aspect-ratio="16/9"
                        height="300px"
                        width="300px"
                        contain
                    />
                </v-row>
            </v-container>
        </v-sheet>
    </v-sheet>
</template>

<script>
import dbApi from '~data/api.js'
export default {
    props: {
        id: {
            type: String,
        }
    },
    data () { return {
        show: dbApi.getShow(this.id),
    }},
}
</script>