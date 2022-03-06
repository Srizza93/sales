<template>
  <div class="app-container">
    <navigation-bar class="navigation-bar" />
    <router-view></router-view>
  </div>
</template>

<script>
import "../assets/app.styl";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: { NavigationBar },
};
</script>
