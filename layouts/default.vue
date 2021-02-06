<template>
    <div
        v-designer.layout.true
        class="px-xs-0 px-sm-6 px-md-12 px-lg-12 px-xl-12"
    >
        <router-view name="header" />

        <v-content class="my-3">
            <router-view />
        </v-content>

        <router-view name="footer" />
    </div>
</template>

<style lang="less" scoped>
</style>