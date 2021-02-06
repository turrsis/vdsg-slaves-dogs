<template>
    <v-sheet v-designer.true elevation="5">
        <v-container fluid>
            <v-row align-content="stretch">
                <v-col cols="12" sm="6" md="2" lg="2" xl="2">
                    <v-row justify="space-between" style="height:100%">
                        <v-col cols="2" sm="12" md="12" lg="12" xl="12">
                            {{ litter.letter }}
                        </v-col>
                        <v-col cols="5" sm="12" md="12" lg="12" xl="12">
                            <v-icon>mdi-clock-outline</v-icon> {{ litter.dateOfBirth }}
                        </v-col>
                        <v-col cols="5" sm="12" md="12" lg="12" xl="12">
                            <v-icon color="blue">mdi-gender-male</v-icon>{{ litterGendersCount.male }}
                            <v-icon color="purple">mdi-gender-female</v-icon>{{ litterGendersCount.female }}
                            (<v-icon>mdi-gender-male-female</v-icon>{{ litterGendersCount.total }})
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="6" md="5" lg="6" xl="6">
                    <v-card height="200px" class="pa-2" hover :to="'/litter/' + litter.id">
                        <v-img 
                            :src="`/public/${litter.id}/${litter.photo}`"
                            :aspect-ratio="16/9"
                            contain
                            height="100%"
                        />
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="5" lg="4" xl="4">
                    <Pedigree
                        :dog="pedigree"
                        :responsive="[
                            true,
                            true,
                            //true,
                        ]"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
import dbApi from '~data/api.js'
import Pedigree from '../dogs/Pedigree.vue'
export default {
    components: {
        Pedigree
    },
    props: {
        litter: {
            type: Object,
        }
    },
    data () { return {
        
    }},
    computed: {
        litterGendersCount () {
            return dbApi.getLitterGenderCount(this.litter.id)
        },
        pedigree () {
            return dbApi.getPedigree(this.litter.mother, this.litter.father)
        }
    }
}
</script>