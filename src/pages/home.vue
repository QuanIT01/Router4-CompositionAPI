<template>
  <h1>Overview is here</h1>
  <p>{{ firstName }}</p>
  <button @click="onChangeSomething">Click me</button>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const firstName = ref("skybert");
    function onChangeSomething() {
      console.log("running here ...");
      firstName.value = "Nguyen Quan";
    }
    return {
      firstName,
      onChangeSomething,
    };
  },
};
</script>
