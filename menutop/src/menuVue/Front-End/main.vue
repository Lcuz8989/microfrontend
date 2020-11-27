<style lang="scss">
@import '~bootstrap';
</style>

<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li v-for="item in menu" :key="item" class="nav-item active">
        <a class="nav-link" href="#" v-bind:id="item" v-on:click='menuClicked($event)'>{{item}} <span class="sr-only">{{item}}</span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cerca</button>
    </form>
  </div>
</nav>
</div>
</template>

<script>
import menuBFF from '../desktopBFF/menuBFF'
import Event from '../Bus/event.js'

export default {
  data: () => ({
    menu: [],
  }),
  methods: {
    menuClicked(item){
      var event = Event.menuClicked(item);
      item.target.dispatchEvent(event);
    }
    },
    mounted: function(menu){
    menuBFF.chiamateMenu().then(resolve => { this.menu = resolve});
    },  
};
</script>

