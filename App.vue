<template>
    <v-app id="app" class="mx-1">
        <AppLayout loading="loading" />
        <Contact />
        <DogShortDialog />
    </v-app>
</template>

<script>
import Contact from './pages/Contact.vue'
import DogShortDialog from './components/dogs/DogShortDialog.vue'
import AppLayout from './AppLayout.vue'

export default {
    title: 'HelloWorld',
    name: 'App',
    components: { AppLayout, DogShortDialog, Contact },
}
</script>

<style>
</style>
