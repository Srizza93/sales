<template>
  <div class="end-purchase">
    <loading class="loading-comp" />
    <div class="outcome-container">
      <div
        class="outcome-container_message"
        v-bind:class="{ 'payment-failed': randomOutcome.failed }"
      >
        <span>{{ randomOutcome.outcome }}</span>
        <span>{{ randomOutcome.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";

export default {
  name: "EndPurchase",
  components: { Loading },
  data() {
    return {
      randomOutcome: "",
      message: [
        {
          outcome: "PAYMENT SUCCESSFUL!!!",
          message: `We have sent an email to ${this.$route.params.email}`,
          failed: false,
        },
        {
          outcome: "PAYMENT FAILED",
          message: `Please try again with a different credit card, or try later`,
          failed: true,
        },
      ],
    };
  },
  methods: {
    loadPayment() {
      const loadingComp = document.querySelector(".loading-comp");
      const outcome = document.querySelector(".outcome-container");
      loadingComp.classList.add("hide-comp");
      outcome.classList.add("show-outcome");
    },
    setRandomOutcome() {
      this.randomOutcome = this.message[Math.round(Math.random(1))];
    },
  },
  mounted() {
    setTimeout(this.loadPayment.bind(this), 4000);
    this.setRandomOutcome();
  },
};
</script>

<style lang="stylus" scoped>
.end-purchase
 display flex
 justify-content center
 align-items center
 min-width 100vw
 min-height calc(100vh - 65px)

.loading-comp
 display flex

.outcome-container
 display none
 justify-content center
 align-items center

.outcome-container_message
 display flex
 flex-direction column
 padding 40px 60px
 margin 30px
 border-radius 15px
 background-color rgba(20,204,128,0.3)
 text-align center
 line-height 2

.payment-failed
 background-color rgba(245,0,0,0.3)

.hide-comp
 display none

.show-outcome
 display flex
</style>
