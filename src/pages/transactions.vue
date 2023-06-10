<template>
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <dir class="price">Price: {{ transaction.price }}</dir>
    </div>
  </div>
  <div v-else>Loading transactions...</div>
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch(" http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
  },
};
</script>
