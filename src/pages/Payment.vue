<template>
  <div class="payment-container">
    <payment-details :amount="Number($route.params.amount)" />
    <personal-details ref="personalDetails" />
    <cc-form ref="ccForm" />
    <button class="sales-button submit-button" @click="paymentValidation">
      SUBMIT
    </button>
  </div>
</template>

<script>
import PaymentDetails from "../components/PaymentDetails.vue";
import PersonalDetails from "../components/PersonalDetails.vue";
import CcForm from "../components/CcForm.vue";

export default {
  name: "Payment",
  components: { PersonalDetails, PaymentDetails, CcForm },
  methods: {
    paymentValidation() {
      const personalDetails =
        this.$refs.personalDetails.validateAllRequirements();
      const ccForm = this.$refs.ccForm.validateAllRequirements();
      if (personalDetails && ccForm) {
        const email = this.$refs.personalDetails.inputs.find(
          (input) => input.name === "emailaddress"
        ).value;
        this.$router.push({
          name: "EndPurchase",
          params: { email },
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.payment-container
 display flex
 flex-direction column
 align-items center

.submit-button
  margin-top 110px
  padding 15px 80px
  border none
</style>
