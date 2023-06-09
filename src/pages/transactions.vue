<template>
  <h1>Transactions is here...</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <router-link
      :to="{
        name: `transaction-details-route`,
        params: { id: transactions.id },
      }"
      >{{ transaction.name }}</router-link
    >
    <dir class="price">Price: {{ transaction.price }}</dir>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Đi siêu thị ngày 23/05",
          price: 1000000,
        },
        {
          id: 2,
          name: "Thanh toán tiền nhà 09/06",
          price: 2000000,
        },
        {
          id: 3,
          name: "Thanh toán momo 10/06",
          price: 3000000,
        },
      ],
    };
  },
};
</script>
