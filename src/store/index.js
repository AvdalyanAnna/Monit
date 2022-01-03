import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)
import modals from "@/store/modals";

export default new Vuex.Store({
    modules: {
        modals
    },
    state: {}
})