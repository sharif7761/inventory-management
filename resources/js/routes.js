let login = require('./components/auth/login').default
let register = require('./components/auth/register').default
let forgot = require('./components/auth/forgot').default
let home = require('./components/home').default

export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forgot', component: forgot, name: 'forgot' },
    { path: '/home', component: home, name: 'home' },
]
