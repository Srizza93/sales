<template>
  <div class="app-container">
    <div class="scroll-arrow" @click="scrollUp">
      <chevron class="scroll-arrow_svg" />
    </div>
    <navigation-bar class="navigation-bar" />
    <router-view></router-view>
  </div>
</template>

<script>
import "regenerator-runtime/runtime";
import "../assets/app.styl";
import NavigationBar from "./components/NavigationBar.vue";
import Chevron from "../assets/chevron.svg";

export default {
  name: "App",
  components: { NavigationBar, Chevron },
  data() {
    return {
      windowYPosition: 0,
    };
  },
  methods: {
    dispatchApiCall() {
      this.$store.dispatch("apiCall");
    },
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    toggleArrow() {
      const arrow = document.querySelector(".scroll-arrow");
      if (
        this.windowYPosition > window.scrollY &&
        !arrow.classList.contains("show-arrow")
      ) {
        arrow.classList.add("show-arrow");
      }
      if (
        (this.windowYPosition <= window.scrollY &&
          arrow.classList.contains("show-arrow")) ||
        window.scrollY === 0
      ) {
        arrow.classList.remove("show-arrow");
      }
      this.windowYPosition = window.scrollY;
    },
  },
  created() {
    this.dispatchApiCall();
  },
  mounted() {
    document.addEventListener("scroll", this.toggleArrow);
  },
};
</script>

<style lang="stylus" scoped>
.app-container
 padding-bottom 60px

.scroll-arrow
  display flex
  justify-content center
  align-items center
  position fixed
  top 60px
  left calc(50% - 15px)
  width 30px
  height 30px
  padding 10px
  border-radius 50%
  background-color #136c47
  opacity 0
  transition-duration 2s
  cursor pointer

.scroll-arrow_svg
  fill white
  width 15px
  transform rotate(90deg)

.show-arrow
  opacity .4

.scroll-arrow:hover
  opacity 1
</style>
