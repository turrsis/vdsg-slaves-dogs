<template>
    <v-sheet v-designer.true>
        <v-sheet v-if="Object.keys(females).length" elevation="5" class="mb-3">
            <v-card-title>
                <v-icon color="red lighten-3">mdi-gender-female</v-icon>
                females
            </v-card-title>
            <v-sheet class="px-2 pt-2" color="red lighten-5">
                <DogShort
                    v-for="(dog, index) in females"
                    :key="index"
                    :dog="dog"
                    class="mb-2"
                />
            </v-sheet>
        </v-sheet>
        <v-sheet v-if="Object.keys(males).length" elevation="5">
            <v-card-title>
                <v-icon color="cyanlighten-3">mdi-gender-male</v-icon>
                males
            </v-card-title>
            <v-sheet class="px-2 pt-2" color="cyan lighten-5">
                <DogShort
                    v-for="(dog, index) in males"
                    :key="index"
                    :dog="dog"
                    class="mb-2"
                />
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
import dbApi from '~data/api.js'
import DogShort from '../components/dogs/DogShort.vue'
export default {
    components: {
        DogShort
    },
    props: {
        filter: {
            type: String,
        }
    },
    computed: {
        males () {
            return dbApi.getDogsList(this.filterInternal('male'))
        },
        females () {
            return dbApi.getDogsList(this.filterInternal('female'))
        }
    },
    methods: {
        filterInternal (gender) {
            let result = { gender: gender }
            if (this.filter == 'our-dogs') {
                // do nothing
            } else if (this.filter == 'champions') {
                result.prefix = 'VICTORIOUS STAR'
            } else if (this.filter == 'veterans') {
                result.owner = 'saga-simurana'
                result.isVeteran = true
            } else {
                result.prefix = 'nothing'
            }
            return result
        }
    }
}
</script>