<template>
  <div>Home</div>
</template>

<script>
import "regenerator-runtime/runtime";

export default {
  name: "Home",
  methods: {
    dispatchApiCall() {
      this.$store.dispatch("apiCall");
    },
  },
  created() {
    this.dispatchApiCall();
  }
};
</script>

<style></style>
