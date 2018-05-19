import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase/init'

//Use vuex with Vue
Vue.use(Vuex)

//export the store 
export const store = new Vuex.Store({
    //Vuex state variables appended with vuex in front
    state:{
            vuex_current_user: null,
            vuex_msgs: [],
            vuex_name: null,
            user_name: "Kumail",
            vuex_email: null,
            vuex_password: null,
            db,
            vuex_user_application: null 
        },
    getters:{
        get_vuex_email(state){
            return state.vuex_email;
        },
        get_vuex_user_application(state){
            return state.vuex_user_application
        }
    },
    //TODO: Implement Getters and Setters 
    mutations: {
        update_vuex_email (state, email) {
            state.vuex_email = email
            },
        update_vuex_password (state, pass) {
            state.vuex_password = pass
            },
        update_vuex_current_user (state, usr) {
            state.vuex_current_user = usr
            }
        }      
})