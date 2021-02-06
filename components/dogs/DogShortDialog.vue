<template>
    <v-dialog v-model="dog" v-designer.true max-width="50%">
        <v-system-bar window>
            <span>dog card</span>
            <v-spacer />
            <v-icon @click="$store.commit('dialogs/closeDogCard')">mdi-close</v-icon>
        </v-system-bar>
        <v-sheet>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <DogShort
                            v-if="dog"
                            :dog="dog"
                            :show-detail-button="false"
                            class="mb-1"
                        />
                    </v-col>
                    <v-col cols="12">
                        <Pedigree
                            v-if="dog"
                            :dog="pedigree"
                            :responsive="[
                                false,
                                true,
                                true]"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-dialog>
</template>

<script>
import dbApi from '~data/api.js'
import DogShort from './DogShort.vue'
import Pedigree from '../dogs/Pedigree.vue'
export default {
    name: 'DogShortDialog',
    components: {
        DogShort, Pedigree
    },
    computed: {
        dog: {
            get () {
                return this.$store.state.dialogs.dogCard
                    ? this.$store.state.dialogs.dogCard.data
                    : false
            },
            set (newValue) {},
        },
        pedigree () {
            if (this.dog && this.dog.mother && this.dog.father) {
                return dbApi.getPedigree(this.dog.mother.id || this.dog.mother, this.dog.father.id || this.dog.father)
            }
            return {}
        }
    },
}
</script>