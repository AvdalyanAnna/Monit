export default {
    state: {
        login:false,
        registration:false,
        removePassword:false

    },
    mutations: {
        SET_LOGIN(state,payload){
            state.login = payload;
        },
        SET_REGISTRATION(state,payload){
            state.registration = payload;
        },
        SET_REMOVE_PASSWORD(state,payload){
            state.removePassword = payload;
        },
        SET_CLOSE_MODALS(state){
            state.login = false;
            state.registration = false;
            state.removePassword = false;
        }
    },
    actions: {
        SET_LOGIN({commit},payload){
            commit("SET_LOGIN",payload);
        },
        SET_REGISTRATION({commit},payload){
            commit("SET_REGISTRATION",payload);
        },
        SET_REMOVE_PASSWORD({commit},payload){
            commit("SET_REMOVE_PASSWORD",payload);
        },
        SET_CLOSE_MODALS({commit}){
            commit("SET_CLOSE_MODALS");
        }
    },
    getters: {
        GET_LOGIN(state){
            return state.login;
        },
        GET_REGISTRATION(state){
            return state.registration;
        },
        GET_REMOVE_PASSWORD(state){
            return state.removePassword;
        },
    },
}