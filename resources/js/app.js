

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Import Route
import { routes } from './routes'

//Import User class
import User from './helpers/User';
window.User = User

const router = new VueRouter({
    routes,
    mode: "history"
})



const app = new Vue({
    el: '#app',
    router
});
