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
            <div class="product-container_info-container_ratings">
              <div
                class="product-container_info-container_ratings_star-container"
              >
                <span
                  class="product-container_info-container_ratings_star-container_number"
                >
                  {{ product.rating.rate }}</span
                >
                <star
                  v-for="star in roundedProductRate(product.rating.rate)"
                  :key="star + '-star'"
                />
              </div>
              <div class="product-container_info-container_ratings_amount">
                <span
                  class="product-container_info-container_ratings_amount_number"
                  >{{ product.rating.count }}</span
                >
                <span>Reviews</span>
              </div>
            </div>
            <span class="product-container_info-container_category">{{
              capitalizeProductCategory(product.category)
            }}</span>
            <span>{{ product.title }}</span>
            <p class="product-container_info-container_description">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "../components/Filters.vue";
import Sort from "../components/Sort.vue";
import Star from "../../assets/star-solid.svg";

export default {
  name: "Products",
  components: { Filters, Sort, Star },
  methods: {
    toggleInfo(event) {
      const button = event.target;
      const box = Array.from(button.parentElement.children)
        .find((el) => el.classList.contains("product-container_info-container"))
        .classList.toggle("open-info");
      button.classList.toggle("clicked-button");
    },
    capitalizeProductCategory(category) {
      return category.substring(0, 1).toUpperCase() + category.substring(1);
    },
    roundedProductRate(rate) {
      return Math.round(rate);
    },
  },
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

.product-container
 display flex
 flex-direction column
 width 250px
 height min-content
 padding 10px
 margin 15px
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
 margin 10px 0
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
  margin-top 30px

.product-container_info-container_ratings
 display flex
 flex-direction row
 align-items baseline
 margin-bottom 10px

.product-container_info-container_ratings_star-container
 display flex
 flex-direction row
 align-items center
 margin-right 15px

.product-container_info-container_ratings_star-container_number,
.product-container_info-container_ratings_amount_number
 font-size 20px
 font-weight bold
 margin-right 5px

.product-container_info-container_category
 margin-bottom 10px

.product-container_info-container_description
 margin 10px 0

.product-container_image
 width 100%
 height 330px
 object-fit contain

.open-info
 display flex

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
