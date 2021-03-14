let login = require('./components/auth/login').default
let register = require('./components/auth/register').default
let forgot = require('./components/auth/forgot').default
let logout = require('./components/auth/logout').default

let home = require('./components/home').default

let storeEmployee = require('./components/employee/create').default
let employee = require('./components/employee/index').default

export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forgot', component: forgot, name: 'forgot' },
    { path: '/logout', component: logout, name: 'logout' },

    { path: '/home', component: home, name: 'home' },


    { path: '/store-employee', component: storeEmployee, name: 'storeEmployee' },
    { path: '/employee', component: employee, name: 'employee' },

]
