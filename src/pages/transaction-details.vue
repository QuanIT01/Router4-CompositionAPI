<template>
  <div v-if="transaction">
    <h1>{{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading transaction {{ $route.params.id }} ...</div>
</template>
<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch(" http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data));
  },
};
</script>
