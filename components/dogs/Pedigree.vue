<template>
    <v-row
        v-designer.true
        no-gutters
        :justify="dog.name ? 'end' : undefined"
    >
        <div
            v-if="dog.name"
            :class="rootClass"
            style="width:100%; margin-top:-1px;border: gray solid 1px;"
            @click="clickAction"
        >
            <v-icon small :color="dog.isMale ? 'blue' : 'purple'">
                {{ dog.isMale ? 'mdi-gender-male' : 'mdi-gender-female' }}
            </v-icon>
            {{ dog.prefix }} {{ dog.name }} {{ dog.suffix }}
        </div>
        <!--<v-btn
            v-if="dog.name"
            x-small
            block
            outlined
            :class="rootClass"
            style="margin: -1px 0px 0px 0px"
            @click="$store.commit('dialogs/openDogCard', dog)"
        >
            <v-icon small :color="dog.isMale ? 'blue' : 'purple'">
                {{ dog.isMale ? 'mdi-gender-male' : 'mdi-gender-female' }}
            </v-icon>
            {{ dog.prefix }} {{ dog.name }} {{ dog.suffix }}
        </v-btn>-->

        <div v-if="hasParents" :style="parentsStyle">
            <Pedigree :dog="dog.mother" :responsive="responsive.slice(1)" />
        </div>
        <div v-if="hasParents" :style="parentsStyle">
            <Pedigree :dog="dog.father" :responsive="responsive.slice(1)" />
        </div>
    </v-row>
</template>
<script>

export default {
    name: 'Pedigree',
    components: { },
    props: {
        responsive: {
            type: Array,
            default: () => [false, false, false]
        },
        dog: {
            type: Object,
        }
    },
    computed: {
        isTree () {
            return this.responsive[0]
        },
        rootClass () {
            return this.isTree
                ? ['justify-start', 'overline']
                : ['justify-center', 'overline']
            //return this.isTree ? 'justify-start' : 'justify-center'
        },
        parentsStyle () {
            return {
                width: (this.isTree ? '90%' : '50%'),
            }
        },
        hasParents() {
            return this.responsive.length > 0
                && this.dog.father != undefined
                && this.dog.mother != undefined
        }
    },
    methods: {
        clickAction() {
            this.$store.commit('dialogs/openDogCard', this.dog)
        }
    }
}
</script>
<style lang="less" scoped>
</style>