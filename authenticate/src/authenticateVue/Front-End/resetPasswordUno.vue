<style lang="scss">
@import './css/style.css';
@import '~bootstrap';
</style>

<template>
<div class="reset">
<h1>Recupera Password</h1>
    <form method="post">
    <input type="email" name="email" placeholder="Email" required="required" v-model="user.email"/>
        <button type="submit" class="btn btn-primary btn-block btn-large" v-on:click="send()">Invia</button>
    </form>
</div>
</template>

<script>
import authenticateBFF from '../desktopBFF/authenticateBFF'

export default {
  data: () => ({
    user: {
      email: ""
    },
  }),
  methods: {
    send(){
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

