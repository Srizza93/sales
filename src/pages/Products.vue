<template>
  <div class="products-page">
    <filters />
    <div class="products-list-container">
      <div
        class="product-container"
        v-for="product in products"
        :key="product.id + product.title"
      >
        <img
          class="product-container_image"
          :src="product.image"
          :alt="product.category"
        />
        <span class="product-container_price"
          >{{ product.price }}
          <span class="product-container_price_currency">EUR</span></span
        >
        <button class="product-container_button" @click="toggleInfo">
          Info
        </button>
        <div class="product-container_info-container">
          <div>
            <span>{{ product.rating.rate }}</span>
            <span>{{ product.rating.count }}</span>
          </div>
          <span>{{ product.title }}</span>
          <span>{{ product.category }}</span>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "../components/Filters.vue";

export default {
  name: "Products",
  components: { Filters },
  methods: {
    toggleInfo(event) {
      const button = event.target;
      const box = Array.from(button.parentElement.children)
        .find((el) => el.classList.contains("product-container_info-container"))
        .classList.toggle("open-info");
      button.classList.toggle("clicked-button");
    },
  },
  computed: {
    products() {
      if (this.$store.state.filters.length) {
        return this.$store.state.products.filter((product) =>
          Object.values(product).some((value) => {
            return this.$store.state.filters.some(
              (filter) =>
                filter ===
                (typeof value === "string" ? value.toUpperCase() : value)
            );
          })
        );
      }
      return this.$store.state.products;
    },
  },
};
</script>

<style lang="stylus" scoped>
.products-page
 display flex
 flex-direction column

.products-list-container
 display flex
 flex-direction row
 flex-wrap wrap
 justify-content center

.product-container
 display flex
 flex-direction column
 width 250px
 padding 10px
 margin 20px
 border-radius 5px
 background-color white

 .product-container_price {
   margin 15px 0
   font-size 35px
 }

.product-container_price_currency
 font-size 14px

.product-container_button
 width 50px
 padding 10px
 margin 15px 0
 border none
 border-radius 15px
 font-weight bold
 color white
 background-color #14cc80
 cursor pointer

.product-container_button:hover
 opacity .7

.clicked-button
 background-color #136c47

.product-container_info-container
  display none
  flex-direction column

.product-container_image
 width 100%
 height 330px
 object-fit contain

.open-info
 display flex
</style>
