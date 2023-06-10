<template>
  <h1>Overview is here</h1>
  <p>{{ secondName }}</p>
  <!-- <p>{{ firstName }}</p> -->
  <p>{{ car }}</p>
  <button @click="onChangeSomething">Click me</button>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const firstName = ref("skybert");
    const secondName = ref({
      name: "misa",
      something: "product",
    });
    let car = reactive({
      price: 10000,
      name: "Mec",
    });
    console.log(secondName); // thay doi
    console.log(car); // ko thay doi
    function onChangeSomething() {
      secondName.value = {
        name: "Nguyen Quan",
        something: "ok",
      };
      car = {
        price: 300000,
        name: "BMW",
      };
      // console.log("running here ...");
      // car.price = 20000;
      // secondName.value.name = "aaa";
      // firstName.value = "Nguyen Quan";
      // console.log(secondName);
      //  console.log(firstName);
      // console.log(car);
    }
    return {
      car,
      firstName,
      secondName,
      onChangeSomething,
    };
  },
};
</script>
