import {mapActions} from "vuex";

export default {
    methods:{
        ...mapActions({
            SET_LOGIN:"SET_LOGIN",
            SET_REGISTRATION:"SET_REGISTRATION",
            SET_REMOVE_PASSWORD:"SET_REMOVE_PASSWORD",
            SET_CLOSE_MODALS:"SET_CLOSE_MODALS",
        }),
        openLogin(){
            this.SET_CLOSE_MODALS();
            this.SET_LOGIN(true);
        },
        openRegistration(){
            this.SET_CLOSE_MODALS();
            this.SET_REGISTRATION(true);
        },
        openRemovePassword(){
            this.SET_CLOSE_MODALS();
            this.SET_REMOVE_PASSWORD(true);
        },
        closeModals(){
            this.SET_CLOSE_MODALS();
        }
    }
}