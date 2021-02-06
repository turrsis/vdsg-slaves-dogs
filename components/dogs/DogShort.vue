<template>
    <v-sheet v-designer.true elevation="5">
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
                        <v-card-actions v-show="showDetailButton">
                            <v-spacer />
                            <v-btn
                                :to="'/dog/' + dog.id"
                            >
                                details
                            </v-btn>
                        </v-card-actions>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
import utils from '~common/utils/utils.base.js'
import dbApi from '~data/api.js'
export default {
    name: 'DogShort',
    components: {
    },
    props: {
        dog: {
            type: Object,
        },
        showDetailButton: {
            type: Boolean,
            default: true
        },
    },
    computed: {
        awards () {
            return dbApi.getDogAwards(this.dog.id)
        },
        awardsString () {
            if (this.awards) {
                return utils.objectJoin(this.awards.awards, ', ', 'x')
            }
            return ''
        }
    }
}
</script>