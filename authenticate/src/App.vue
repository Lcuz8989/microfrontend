<template>
  <div>
    <div id="nav">
      <nav class="navbar navbar-light bg-light" style="background-color: transparent !important">
        <router-link v-if="!authenticated" to="/">Login</router-link>
        <router-link v-if="!authenticated" to="/signup">Registrati</router-link>
        <router-link v-if="authenticated" to="/" v-on:click="logout()">Logout</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                authenticated: false,
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
                sessionStorage.clear();
            }
        }
    }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: white;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
