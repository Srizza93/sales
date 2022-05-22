<template>
  <div class="categories">
    <div class="categories_list">
      <span class="categories_list_title">CATEGORIES</span>
      <router-link
        class="categories_list_router-link"
        v-for="(category, index) in categoryList"
        :key="index + category"
        :to="'/products'"
        @click="commitFilter(category)"
        >{{ category }}</router-link
      >
    </div>
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
.categories
  display flex
  justify-content center
  margin-top 150px

.categories_list
  display flex
  flex-direction column
  align-items center
  width 90%
  max-width 500px
  padding 40px 0 20px 0
  border-radius 15px
  background-color white

.categories_list_title
 font-size 24px
 color #14cc80

.categories_list_router-link
 width 100%
 padding 20px 10px
 font-size 20px
 text-align center
 text-decoration none
 color black

.categories_list_router-link:hover
 background-color #6b00ea
 color white

@media screen and (max-width 300px)
  .categories_list_title
   font-size 20px

  .categories_list_router-link
   font-size 16px
</style>
