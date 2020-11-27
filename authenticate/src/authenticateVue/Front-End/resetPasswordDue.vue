<style lang="scss">
@import './css/style.css';
@import '~bootstrap';
</style>

<template>
<div class="reset">
<h1>Imposta Password</h1>
    <form method="post">
    <input type="password" name="password" placeholder="Password" required="required" v-model="user.password"/>
    <input type="password" name="confermaPassword" placeholder="Conferma password" required="required" v-model="user.confermaPassword"/>
        <button type="submit" class="btn btn-primary btn-block btn-large" v-on:click="save()">Salva</button>
    </form>
</div>
</template>

<script>
import authenticateBFF from '../desktopBFF/authenticateBFF'

export default {
  data: () => ({
    user: {
      password: "",
      confermaPassword: ""
    },
  }),
  methods: {
    save(){
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

