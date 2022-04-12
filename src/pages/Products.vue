<template>
  <div class="products-page">
    <sort />
    <filters />
    <div class="products-list-outer">
      <div class="products-list-container">
        <div
          class="product-container"
          v-for="product in products"
          :key="product.id + product.title"
        >
          <product :product="product" />
        </div>
      </div>
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
      if (this.$store.state.filters.length) {
        return this.$store.getters.getProducts.filter((product) =>
          Object.values(product).some((value) => {
            return this.$store.state.filters.some(
              (filter) =>
                filter ===
                (typeof value === "string" ? value.toUpperCase() : value)
            );
          })
        );
      }
      return this.$store.getters.getProducts;
    },
  },
};
</script>

<style lang="stylus" scoped>
.products-page
 display flex
 flex-direction column
 margin-top 60px

.products-list-outer
 display flex
 justify-content center

.products-list-container
 display flex
 flex-direction row
 flex-wrap wrap
 justify-content left
 width 1400px

@media screen and (max-width 1400px)
  .products-list-container
     width 1120px
@media screen and (max-width 1120px)
  .products-list-container
     width 840px
@media screen and (max-width 840px)
  .products-list-container
     width 560px
@media screen and (max-width 560px)
  .products-list-container
     width 280px
</style>
