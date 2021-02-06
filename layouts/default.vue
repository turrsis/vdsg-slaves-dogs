<template>
    <div
        v-designer.layout.true
    >
        <header>
            <router-view name="header" />
        </header>
        <article>
            <router-view />
        </article>
        <footer>
            <router-view name="footer" />
        </footer>
    </div>
</template>

<style lang="less" scoped>
</style>