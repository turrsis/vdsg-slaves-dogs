<template>
    <v-sheet v-designer.true elevation="5" class="pa-2 pb-1">
        <LitterShort
            v-for="(litter, index) in litters"
            :key="index"
            style="width:100%"
            class="mb-2"
            :litter="litter"
        />
    </v-sheet>
</template>
<script>
import LitterShort from '../components/dogs/LitterShort.vue'
import dbApi from '~data/api.js'
export default {
    components: {
        LitterShort
    },
    data () { return {
        litters: dbApi.getLitters()
    }}
}
</script>