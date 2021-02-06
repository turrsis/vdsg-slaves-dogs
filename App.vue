<template>
    <div id="app">
        <AppLayout loading="loading" />
    </div>
</template>

<script>
import AppLayout from './AppLayout.vue'

export default {
    title: 'Dogs',
    name: 'App',
    components: { AppLayout },
}
</script>

<style>
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
    margin-left: 10px;
}
</style>
