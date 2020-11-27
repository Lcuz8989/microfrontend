import { createApp } from 'vue';

import loginMount from 'authenticate/LoginPage';
import { mount as signup } from 'authenticate/SignupPage';
import { mount as recovery } from 'authenticate/RecoveryPage';
//import router from 'authenticate/Router';
import menuMount from 'menutop/MenuTop';
//console.log(router);

const login = createApp(loginMount);
//login.use(router);
login.mount('#login');

const menu = createApp(menuMount);
menu.mount('#menu');

console.log('Home');