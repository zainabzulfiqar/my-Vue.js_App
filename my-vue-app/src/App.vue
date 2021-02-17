<template>
  <div id="app">
    <!-- <FormTemplate msg="this is your vue js app"/> -->
    <app-header></app-header>
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PunchBag msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import FormTemplate from './components/formTemplate.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import PunchBag from './components/PunchBag.vue'
import header from './components/header.vue'
export default {
  name: 'App',
  components: {
    'app-header':header,
    // HelloWorld,
    // PunchBag,
    // FormTemplate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font: size 2%; ;
  color: #2c3e50;
  margin-top: 10px;
  margin-bottom: 0%;
}
</style>
