<template>
  <div class="categories-container">
    <h2>CATEGORIES</h2>
    <router-link
      class="router-link"
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

.router-link
 margin 15px 0
 font-size 20px
 text-decoration none
 color #14cc80
</style>
