import { createApp } from "vue";
import Signup from './signup.vue';
import Login from './login.vue';

import router from '../../router'

const login = createApp(Login);
login.use(router);
login.mount('#login');

const signup = createApp(Signup);
signup.use(router);
