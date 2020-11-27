<style lang="scss">
@import './css/style.css';
@import '~bootstrap';
</style>

<template>
    <div class="alert alert-danger invisible" role="alert" id="errore">
    Inserire tutti i campi !
</div>
<div class="alert alert-success invisible" role="alert" id="successo">
    Registrazione avvenuta con successo !
</div>
		<div class="signup">
<h1>Registrati</h1>
    <form method="post">
      <input type="text" name="username" placeholder="Username" required="required" v-model="user.username"/>
      <input type="email" name="email" placeholder="Email" required="required" v-model="user.email"/>
      <input type="password" name="password" placeholder="Password" required="required" v-model="user.password" />
      <input type="password" name="confermaPassword" placeholder="Conferma password" required="required"/>
      <input type="text" name="codAlbo" placeholder="Codice iscrizione albo" required="required" v-model="user.codAlbo" />
      <button type="button" class="btn btn-primary btn-block btn-large" v-on:click="signup()">Registrati</button>
    </form>
</div>
</template>

<script>
import authenticateBFF from '../desktopBFF/authenticateBFF'

export default {
  name: "Signup",
  data: () => ({
    user: {
      username: "",
      email: "",
      password: "",
      codAlbo: ""
    },
  }),
  methods: {
    signup(){
      var user = this.user;
      authenticateBFF.signup(user)
        .then(result => {console.log(result);
                        $("#successo").attr('class', 'alert alert-success visible')});
                        this.$router.push('/')
        .catch(error => {console.error(error);
                        $("#errore").attr('class', 'alert alert-danger visible')});
    }
    },
};
</script>