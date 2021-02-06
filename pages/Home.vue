<template>
    <v-sheet v-designer.true class="pa-0 ma-0 py-1">
        <v-sheet elevation="5" class="ma-0 my-2">
            <v-card-title class="justify-center">
                О нас
            </v-card-title>
            <v-card-text>
                Мы создали нашу компанию в 2000 году, 
                и с момента основания «saga-simurana» всегда оставалась(лся) прекрасным местом как для животных, так и для их хозяев. 
                Мы стараемся расширять список предлагаемых услуг, с тем, чтобы быть лучшими в г. Житомир. 
                Наш профессиональных подход и искренняя любовь к животным помогли нам заслужить безупречную репутацию.
            </v-card-text>
        </v-sheet>
        <v-lazy
            v-model="vLazyModels.litters"
            :options="{ threshold: .5 }"
            min-height="200"
            transition="fade-transition"
        >
            <v-sheet elevation="5" class="ma-0 my-2">
                Наши щенки
                <Litters class="ma-0 pa-0" />
            </v-sheet>
        </v-lazy>
        <v-lazy
            v-model="vLazyModels.photos"
            :options="{ threshold: .5 }"
            min-height="200"
            transition="fade-transition"
        >
            <v-sheet elevation="5" class="ma-0 my-2">
                Наши фотки
                <v-container fluid>
                    <v-row>
                        <v-img 
                            v-for="(photo, photoIndex) in photos"
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
        <v-lazy
            v-model="vLazyModels.else1"
            :options="{ threshold: .5 }"
            min-height="200"
            transition="fade-transition"
        >
            <v-sheet elevation="5" class="ma-0 my-2" height="300px">
                <v-card-title class="justify-center">
                    SOMETHING ELSE
                </v-card-title>
            </v-sheet>
        </v-lazy>
        
        <v-lazy
            v-model="vLazyModels.else2"
            :options="{ threshold: .5 }"
            min-height="200"
            transition="fade-transition"
        >
            <v-sheet elevation="5" class="mx-0 my-2" height="300px">
                <v-card-title class="justify-center">
                    SOMETHING ELSE 2
                </v-card-title>
            </v-sheet>
        </v-lazy>
    </v-sheet>
</template>

<script>
import Litters from './Litters.vue'
export default {
    components: {
        Litters,
    },
    data () { return {
        vLazyModels: {
            news: false,
            photos: false,
            else1: false,
            litters: false,
            else2: false,
        },
        photos: [
            'dog_01.jpg',
            'dog_02.jpg',
            'dog_03.jpg',
            'dog_04.jpg',
            'dog_05.jpg',
            'dog_06.jpg',
            'dog_07.jpg',
            'dog_08.jpg',
            'dog_09.jpg',
            'dog_10.jpg',
            'dog_11.jpg',
            'dog_12.jpg',
            'dog_13.jpg',
            'dog_14.jpg',
            'dog_15.jpg',
            'dog_16.jpg',
            'dog_17.jpg',
            'dog_18.jpg',
            'dog_19.jpg',
            'dog_20.jpg',
            'dog_21.jpg',
            'dog_22.jpg',
            'dog_23.jpg',
        ],
    }}
}
</script>
