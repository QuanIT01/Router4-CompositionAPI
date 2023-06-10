<template>
  <h1>Overview is here</h1>
  <!-- <p>{{ secondName }}</p> -->
  <!-- <p>{{ firstName }}</p> -->
  <!-- <p>{{ car }}</p> -->
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFiled" :key="index">
      {{ customer }}
    </li>
  </ul>
  <!-- <button @click="onChangeSomething">Click me</button> -->
</template>
<script>
import { computed, ref, reactive } from "vue";

export default {
  setup() {
    const searchText = ref("");
    // const secondName = ref({
    //   name: "misa",
    //   something: "product",
    // });
    // let car = reactive({
    //   price: 10000,
    //   name: "Mec",
    // });
    const customers = reactive(["Something", "Nguyen quan", "Haui"]);
    const customersFiled = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );
    // console.log(secondName); // thay doi
    // console.log(car); // ko thay doi
    // function onChangeSomething() {
    //   secondName.value = {
    //     name: "Nguyen Quan",
    //     something: "ok",
    //   };
    //   car = {
    //     price: 300000,
    //     name: "BMW",
    //   };
    //   // console.log("running here ...");
    //   // car.price = 20000;
    //   // secondName.value.name = "aaa";
    //   // firstName.value = "Nguyen Quan";
    //   // console.log(secondName);
    //   //  console.log(firstName);
    //   // console.log(car);
    // }
    return {
      customersFiled,
      searchText,
      // secondName,
      // onChangeSomething,
    };
  },
};
</script>
