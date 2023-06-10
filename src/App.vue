<template>
  <h1>Hello Dom</h1>
  <base-nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    BaseNav: Nav,
  },
  // created() {
  //   console.log(document.querySelector("h1"));
  // },
  // mounted() {
  //   console.log(document.querySelector("h1"));
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
