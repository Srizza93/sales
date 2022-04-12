<template>
  <div
    class="navigation-container"
    v-bind:class="{ 'blur-container': menuIsOpen }"
  >
    <router-link to="/">
      <svg-logo />
    </router-link>
    <div class="navigation-container_links-container">
      <router-link
        class="navigation-container_links-container_router-page"
        v-for="page in pages"
        :key="page.id + page.name"
        :to="page.path"
        >{{ page.name }}</router-link
      >
    </div>
    <div class="navigation-container_menu-container">
      <button
        class="navigation-container_links-container_router-page navigation-menu"
        @click="toggleMenu"
      >
        Menu
      </button>
      <div
        class="navigation-container_menu-container_dropdown"
        v-bind:class="{ 'open-menu': menuIsOpen }"
      >
        <div class="navigation-container_menu-container_dropdown_sub-container">
          <router-link
            class="navigation-container_links-container_router-page navigation-container_menu-container_dropdown_link"
            v-for="page in pages"
            :key="page.id + page.name"
            :to="page.path"
            >{{ page.name }}</router-link
          >
          <close-button class="close-button" @click="toggleMenu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgLogo from "../../assets/logo.svg";
import closeButton from "../../assets/close.svg";

export default {
  name: "NavigationBar",
  components: { svgLogo, closeButton },
  data() {
    return {
      menuIsOpen: false,
      pages: [
        {
          id: 1,
          name: "Home",
          path: "/",
        },
        {
          id: 2,
          name: "Products",
          path: "/products",
        },
        {
          id: 3,
          name: "Categories",
          path: "/categories",
        },
        {
          id: 4,
          name: "Cart",
          path: "/cart",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
      const app = document.querySelector(".app-container");
      if (this.menuIsOpen) {
        app.classList.add("blur-app");
        return;
      }
      app.classList.remove("blur-app");
    },
  },
};
</script>

<style lang="stylus" scoped>
.navigation-container
  position fixed
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  width 100%
  padding 5px 20px
  z-index 99999

.navigation-container_links-container_router-page
  padding 5px 10px
  margin 0 10px
  border-radius 15px
  font-size 20px
  color #14CC80
  text-decoration none

.navigation-container_links-container_router-page:hover
  background-color #24342e40

.navigation-menu
  border none
  cursor pointer

.navigation-container_menu-container_dropdown
 position fixed
 max-width 250px
 top 0
 right -250px
 height 100vh
 transition-duration .7s
 transition-timing-function linear
 background-color white
 z-index 999999

.open-menu
 right 0

.navigation-container_menu-container_dropdown_link:first-child
 margin-top 50px

.navigation-container_menu-container_dropdown_sub-container
 display flex
 flex-direction column
 padding 20px 40px
 position relative

.close-button
 position absolute
 top 0
 right 0
 margin 10px
 cursor pointer
</style>

<style lang="stylus">
.blur-container > *:not(.navigation-container_menu-container)
 filter blur(4px)

.blur-app > *:not(.navigation-bar)
 filter blur(4px)

@media screen and (max-width 750px)
 .navigation-container_links-container
   display none
</style>
