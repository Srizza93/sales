<template>
  <div class="products-page">
    <sort />
    <filters />
    <div class="products-list-container">
      <product
        v-for="product in products"
        :key="product.id + product.title"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Filters from "../components/Filters.vue";
import Product from "../components/Product.vue";
import Sort from "../components/Sort.vue";

export default {
  name: "Products",
  components: { Filters, Product, Sort },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>

<style lang="stylus" scoped>
.products-page
 display flex
 flex-direction column
 margin-top 150px

.products-list-container
  display grid
  grid-template-columns repeat(auto-fill, 250px)
  justify-content space-evenly
  grid-gap 30px
  margin 0 30px

@media screen and (max-width 300px)
 .products-list-container
  grid-template-columns repeat(auto-fill, 100%)
  grid-gap 15px
  margin 0 15px
</style>
