<template>
  <div class="payment-details-container">
    <div class="payment-details-container_row">
      <span>Cost:</span>
      <span>{{ cost }} EURO</span>
    </div>
    <div class="payment-details-container_row">
      <span>Fee:</span>
      <span>{{ fee }} EURO</span>
    </div>
    <div class="payment-details-container_row">
      <span>Total Cost:</span>
      <span>{{ totalCost }} EURO</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDetails",
  props: {
    amount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    cost() {
      return this.$props.amount.toFixed(2);
    },
    fee() {
      return Number((this.$props.amount * 0.17).toFixed(2));
    },
    totalCost() {
      return (Number(this.cost) + this.fee).toFixed(2);
    },
  },
};
</script>

<style lang="stylus" scoped>
.payment-details-container
 display flex
 flex-direction column
 width 90%
 max-width 500px
 padding 40px
 border-radius 15px
 background-color #fff

.payment-details-container_row
 display flex
 flex-direction row
 justify-content space-between
 padding 5px 10px
 margin-bottom 15px

.payment-details-container_row:first-child
  margin-top 15px

.payment-details-container_row:last-child
 border-radius 15px
 background-color #136c47
 color white

@media screen and (max-width 300px)
  .payment-details-container
    padding 30px

  .payment-details-container_row
    flex-direction column
</style>
