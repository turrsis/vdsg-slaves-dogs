<template>
    <v-sheet v-designer.true elevation="5" class="py-1">
        <v-sheet elevation="5" class="ma-2">
            <v-container fluid>
                <v-row align-content="stretch">
                    <v-col
                        style="min-width:250px;"
                        cols="12"
                        sm="3" 
                        md="4"
                        lg="4"
                        xl="3"
                    >
                        <v-carousel
                            v-if="dog.photos"
                            hide-delimiter-background
                            height="100%"
                        >
                            <v-carousel-item
                                v-for="(photo, photoIndex) in dog.photos"
                                :key="photoIndex"
                            >
                                <v-img 
                                    :src="`/public/dogs/${photo}`"
                                    :aspect-ratio="16/9"
                                    height="100%"
                                    contain
                                />
                            </v-carousel-item>
                        </v-carousel>
                        <v-img
                            v-else 
                            :src="`/public/empty.jpg`"
                            :aspect-ratio="16/9"
                            height="100%"
                            contain
                        />
                    </v-col>
                    <v-col>
                        <v-sheet>
                            <v-card-title style="word-break: normal">
                                <v-icon :color="dog.isMale ? 'blue' : 'purple'">
                                    {{ dog.isMale ? 'mdi-gender-male' : 'mdi-gender-female' }}
                                </v-icon>
                                {{ dog.prefix }} {{ dog.name }} {{ dog.suffix }}
                            </v-card-title>
                            <v-card-subtitle>
                                date of birth : {{ dog.dateOfBirth }}
                            </v-card-subtitle>
                            <v-card-text v-if="awards">
                                {{ awards.titles.join(', ') }}
                            </v-card-text>
                            <v-card-text v-if="awards">
                                {{ awardsString }}
                            </v-card-text>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        <v-sheet elevation="5" class="ma-2">
            <Pedigree
                :dog="pedigree"
                :responsive="[
                    this.$vuetify.breakpoint.name == 'xs',
                    true,
                    true]"
            />
        </v-sheet>
        <v-lazy
            v-model="vLazyPhotosGallery"
            :options="{ threshold: .5 }"
            transition="fade-transition"
        >
            <v-sheet
                v-if="dog.photosGallery"
                elevation="5"
                class="ma-2"
            >
                <v-container fluid>
                    <v-row>
                        <v-img 
                            v-for="(photo, photoIndex) in dog.photosGallery"
                            :key="photoIndex"
                            :src="`/public/dogs/${photo}`"
                            :aspect-ratio="16/9"
                            height="300px"
                            width="300px"
                            contain
                        />
                    </v-row>
                </v-container>
            </v-sheet>
        </v-lazy>
    </v-sheet>
</template>

<script>
import utils from '~common/utils/utils.base.js'
import dbApi from '~data/api.js'
import Pedigree from '../components/dogs/Pedigree.vue'
export default {
    components: {
        Pedigree
    },
    props: {
        id: {
            type: String,
        }
    },
    data () { return {
        vLazyPhotosGallery: false,
        dog: dbApi.getDogById(this.id),
    }},
    computed: {
        awards () {
            return dbApi.getDogAwards(this.dog.id)
        },
        awardsString () {
            if (this.awards) {
                return utils.objectJoin(this.awards.awards, ', ', 'x')
            }
            return ''
        },
        pedigree () {
            return dbApi.getPedigree(this.dog.mother, this.dog.father)
        }
    }
}
</script>
<style lang="less">
</style>