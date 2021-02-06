export default {
    namespaced: true,
    state: {
        dogCard: null,
        contact: false,
    },
    mutations: {
        openContact (state) {
            state.contact = true
        },
        closeContact (state) {
            state.contact = false
        },
        openDogCard (state, payload) {
            state.dogCard = {}
            state.dogCard.data = payload
        },
        closeDogCard (state) {
            state.dogCard = null
        },
    }
}
