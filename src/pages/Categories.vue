<template>
  <div class="categories-container">
    <span class="categories-container_title">CATEGORIES</span>
    <router-link
      class="categories-container_router-link"
      v-for="(category, index) in categoryList"
      :key="index + category"
      :to="'/products'"
      @click="commitFilter(category)"
      >{{ category }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Categories",
  computed: {
    categoryList() {
      return new Set(this.$store.getters.getCategories);
    },
  },
  methods: {
    commitFilter(category) {
      this.$store.commit("addFilter", category.toUpperCase());
    },
  },
};
</script>

<style lang="stylus" scoped>
.categories-container
  display flex
  flex-direction column
  align-items center
  min-height calc(100vh - 60px)
  margin-top 150px

.categories-container_title
 font-size 24px
 color #14cc80

.categories-container_router-link
 margin 15px 0
 font-size 20px
 text-decoration none
 color black

.categories-container_router-link:hover
 opacity .7
</style>
