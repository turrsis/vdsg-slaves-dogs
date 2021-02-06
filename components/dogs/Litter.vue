<template>
    <v-sheet v-designer.true elevation="5">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="12" md="3" lg="5" xl="5">
                    <v-row justify="space-between" style="height:100%">
                        <v-col cols="2" sm="4" md="12" lg="12" xl="12">
                            {{ litter.letter }}
                        </v-col>
                        <v-col cols="5" sm="4" md="12" lg="12" xl="12">
                            <v-icon>mdi-clock-outline</v-icon> {{ litter.dateOfBirth }}
                        </v-col>
                        <v-col cols="5" sm="4" md="12" lg="12" xl="12">
                            <v-icon color="blue">mdi-gender-male</v-icon>{{ litter.genders.male }}
                            <v-icon color="purple">mdi-gender-female</v-icon>{{ litter.genders.female }}
                            (<v-icon>mdi-gender-male-female</v-icon>{{ litter.genders.total }})
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="9" lg="7" xl="7">
                    <Pedigree
                        :dog="pedigree"
                        :responsive="[
                            this.$vuetify.breakpoint.name == 'xs',
                            true,
                            true]"
                    />
                </v-col>
            </v-row>
        </v-container>
        <v-sheet
            v-for="(puppy, index) in litter.puppies"
            :key="index"
            elevation="5"
            class="ma-3"
        >
            <v-container fluid>
                <v-row>
                    <v-col style="min-width:80px;max-width:80px">
                        <v-row align-content="space-between" style="height:100%">
                            <v-btn
                                class="ma-2"
                                :color="puppy.nickname"
                                text-color="white"
                                min-width="80px"
                                x-small
                            >
                                <v-icon small>{{ puppy.gender ? 'mdi-gender-male' : 'mdi-gender-female' }}</v-icon>
                                {{ puppy.gender ? ' male ' : 'female' }}
                            </v-btn>
                            <v-btn
                                class="ma-2"
                                :color="puppy.reserved ? 'grey lighten-4' : 'green accent-2'"
                                text-color="white"
                                min-width="80px"
                                x-small
                            >
                                {{ puppy.reserved ? 'reserved' : 'available' }}
                            </v-btn>
                        </v-row>
                    </v-col>
                    <v-col>
                        <vueper-slides
                            arrows-outside
                            :bullets-outside="false"
                            :visible-slides="countPhotosForItem"
                            :slide-multiple="countPhotosForItem"
                            fixed-height="200px"
                            :gap="3"
                            :dragging-distance="200"
                        >
                            <vueper-slide 
                                v-for="(photo, photoIndex) in puppy.photos"
                                :key="photoIndex"
                            >
                                <template v-slot:content>
                                    <v-img 
                                        :src="`/public/${litter.id}/puppies/${photo}`"
                                        :aspect-ratio="16/9"
                                        height="200px"
                                        contain
                                    />
                                </template>
                            </vueper-slide>
                        </vueper-slides>
                    </v-col>
                    <v-col style="min-width:40px;max-width:40px" />
                </v-row>
            </v-container>
        </v-sheet>
    </v-sheet>
</template>
<script>
//https://github.com/antoniandre/vueper-slides
//https://github.com/Wlada/vue-carousel-3d
import dbApi from '~data/api.js'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Pedigree from '../dogs/Pedigree.vue'
export default {
    components: {
        VueperSlides,
        VueperSlide,
        Pedigree
    },
    props: {
        litterId: {
            type: String,
        }
    },
    data () { return {
        litter: dbApi.getLitter(this.litterId),
    }},
    computed: {
        countPhotosForItem () {
            return this.breakpointAttr(1, 2, 3, 4, 5)
        },
        pedigree () {
            return dbApi.getPedigree(this.litter.mother, this.litter.father)
        }
    }
}
</script>
<style lang="less">
</style>