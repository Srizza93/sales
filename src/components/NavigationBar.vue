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
            @click="toggleMenu"
          >
            <span>{{ page.name }}</span>
            <img
              class="navigation-container_menu-container_dropdown_sub-container_logo"
              :src="getImgUrl(page.logo)"
              :alt="page.name"
            />
          </router-link>
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
          logo: "icon-home.png",
        },
        {
          id: 2,
          name: "Products",
          path: "/products",
          logo: "products-icon.png",
        },
        {
          id: 3,
          name: "Categories",
          path: "/categories",
          logo: "categories-icon.png",
        },
        {
          id: 4,
          name: "Cart",
          path: "/cart",
          logo: "cart-icon.png",
        },
      ],
    };
  },
  methods: {
    hideBar(event) {
      const bar = document.querySelector(".navigation-container");
      if (window.pageYOffset > 300) {
        if (!bar.classList.contains("hide-bar")) {
          bar.classList.add("hide-bar");
        }
      } else {
        if (bar.classList.contains("hide-bar")) {
          bar.classList.remove("hide-bar");
        }
      }
    },
    getImgUrl(pic) {
      const path = require.context("../../assets", false, /\.png$/);
      return path("./" + pic);
    },
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
  mounted() {
    document.addEventListener("scroll", this.hideBar);
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
  height 65px
  padding 5px 20px
  transition-duration 1s
  opacity 1
  z-index 99999

.hide-bar
  opacity 0

.navigation-container_links-container_router-page
  display inline-flex
  justify-content space-between
  align-items center
  padding 5px 10px
  margin 20px 10px
  border-radius 15px
  font-size 20px
  color #14CC80
  background-color transparent
  text-decoration none

.navigation-container_links-container_router-page:hover
  background-color #24342e40

.navigation-container_menu-container_dropdown_link
 display flex
 flex-direction row

.navigation-menu
  border none
  cursor pointer

.navigation-container_menu-container_dropdown
 position fixed
 width 100%
 max-width 300px
 top 0
 right -300px
 height 100vh
 transition-duration .7s
 transition-timing-function linear
 background-color white
 z-index 999999

.open-menu
 right 0

.navigation-container_menu-container_dropdown_sub-container
 display flex
 flex-direction column
 padding 60px 40px
 position relative

.navigation-container_menu-container_dropdown_sub-container_logo
 display block
 width 50px
 height 50px
 padding 10px
 border-radius 15px
 background-color #136c47

.close-button
 position absolute
 top 0
 right 0
 margin 10px
 cursor pointer

@media screen and (max-width 750px)
 .navigation-container_links-container
   display none

@media screen and (max-width 400px)
 .navigation-container_menu-container_dropdown
   max-width 400px
   left 100%

  .open-menu
   left 0

@media screen and (max-width 300px)
  .navigation-container_menu-container_dropdown_link
    flex-direction column

  .navigation-container_menu-container_dropdown_sub-container_logo
    margin-top 15px

  .navigation-container_menu-container_dropdown_sub-container
    padding 60px 20px
</style>

<style lang="stylus">
.blur-container > *:not(.navigation-container_menu-container)
 filter blur(4px)

.blur-app > *:not(.navigation-bar)
 filter blur(4px)
</style>
