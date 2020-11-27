<style lang="scss">
@import './css/style.css';
@import '~bootstrap';
</style>

<template>
<div class="login">
<h1>Login</h1>
    <div><router-link v-if="!authenticated" to="/signup" class="router-link">Registrati</router-link>
        <router-view/></div>
    <form method="post">
    <input type="text" name="username" placeholder="Username" required="required" v-model="user.username"/>
        <input type="password" name="password" placeholder="Password" required="required" v-model="user.password" />
        <button type="submit" class="btn btn-primary btn-block btn-large" v-on:click="login()">Login</button>
    </form>
    <div><router-link to="/recoverypassword" class="router-link">Password dimenticata ?</router-link>
        <router-view/></div>
</div>
</template>

<script>
import authenticateBFF from '../desktopBFF/authenticateBFF'

export default {
  name: 'Login',
  data: () => ({
    user: {
      username: "",
      password: ""
    },
    authenticated: false,
  }),
  methods: {
    login(){
      var user = this.user;
      authenticateBFF.login(user)
        .then(result => {
          console.log(result);
            this.$router.replace({ name: ""})
            sessionStorage.token = "Bearer "+result.token;
        })
        .catch(error => {
            console.error(error);
            $("#alert").attr('class', 'alert alert-danger visible');
        });
    }
    },
};
</script>

