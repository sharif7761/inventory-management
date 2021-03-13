

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

// Sweet Alert starts
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.Toast = Toast;


// Sweet Alert ends

const router = new VueRouter({
    routes,
    mode: "history"
})



const app = new Vue({
    el: '#app',
    router
});
