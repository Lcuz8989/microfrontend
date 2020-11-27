import { createRouter, createWebHistory } from 'vue-router'
import Login from '../authenticateVue/Front-End/login.vue'
import Signup from '../authenticateVue/Front-End/signup.vue'
import PasswordRecovery from '../authenticateVue/Front-End/resetPasswordUno.vue'
import SavePassword from '../authenticateVue/Front-End/resetPasswordDue.vue'

const routerHistory = createWebHistory ()

const router = createRouter ({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/signup',
            component: Signup
        },
        {
            path: '/recoverypassword',
            component: PasswordRecovery
        },
        {
            path: '/changepassword',
            component: SavePassword
        }
    ]
})

export default router

