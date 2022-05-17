<template>
  <div class="app-container">
    <navigation-bar class="navigation-bar" />
    <router-view></router-view>
  </div>
</template>

<script>
import "regenerator-runtime/runtime";
import "../assets/app.styl";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: { NavigationBar },
  methods: {
    dispatchApiCall() {
      this.$store.dispatch("apiCall");
    },
  },
  created() {
    this.dispatchApiCall();
  },
};
</script>

<style lang="stylus" scoped>
.app-container
 padding-bottom 60px
</style>
