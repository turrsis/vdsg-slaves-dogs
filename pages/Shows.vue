<template>
    <v-sheet v-designer.true elevation="5" class="py-1">
        <v-container fluid>
            <v-row align-content="stretch">
                <v-card
                    v-for="(show, i) in shows"
                    :key="i"
                    min-width="344"
                    max-width="344"
                    class="mx-auto"
                >
                    <v-list-item>
                        <v-list-item-avatar color="yellow" />
                        <v-list-item-content>
                            <v-list-item-title class="headline">{{ show.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ show.date }}</v-list-item-subtitle>
                            <v-list-item-subtitle>{{ show.country }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
  
                    <v-img
                        :src="`/public/empty.jpg`"
                        :aspect-ratio="16/9"
                        height="200"
                        contain
                    />  
                    <v-card-actions>
                        <v-btn
                            text
                            color="deep-purple accent-4"
                            :to="'/show/' + show.id"
                        >
                            Read
                        </v-btn>
                        <v-spacer />
                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
import dbApi from '~data/api.js'
export default {
    data () { return {
        shows: dbApi.getShows(),
    }},
}
</script>