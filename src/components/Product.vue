<template>
  <div class="product-container">
    <img
      class="product-container_image"
      :src="product.image"
      :alt="product.category"
    />
    <span class="product-container_price"
      >{{ fixedPrice }}
      <span class="product-container_price_currency">EUR</span></span
    >
    <div class="product-container_buttons-container">
      <button
        class="product-container_buttons-container_button"
        @click="toggleInfo"
      >
        Info
      </button>
      <button
        class="product-container_buttons-container_button product-container_buttons-container_button-add"
        v-if="!productIsInCart(product)"
        @click="addToCart(product)"
      >
        Add
      </button>
      <button
        class="product-container_buttons-container_button product-container_buttons-container_button-add product-in-cart"
        v-else
      >
        In Cart
      </button>
    </div>
    <div class="product-container_info-container">
      <div class="product-container_info-container_ratings">
        <div class="product-container_info-container_ratings_star-container">
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
</template>

<script>
import Star from "../../assets/star-solid.svg";

export default {
  name: "Product",
  components: { Star },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fixedPrice() {
      return this.$props.product.price.toFixed(2);
    },
  },
  methods: {
    toggleInfo(event) {
      const button = event.target;
      const box = Array.from(button.parentElement.parentElement.children)
        .find((el) => el.classList.contains("product-container_info-container"))
        .classList.toggle("open-info");
      button.classList.toggle("clicked-button");
    },
    addToCart(product) {
      if (this.productIsInCart(product)) {
        return;
      }
      this.$store.commit("addItemToCart", product);
    },
    productIsInCart(product) {
      return Array.from(this.$store.state.cartItems).includes(product);
    },
    capitalizeProductCategory(category) {
      return category.substring(0, 1).toUpperCase() + category.substring(1);
    },
    roundedProductRate(rate) {
      return Math.floor(rate);
    },
  },
};
</script>

<style lang="stylus" scoped>
.product-container
 display flex
 flex-direction column
 width 250px
 height min-content
 padding 10px
 margin 15px
 border-radius 5px
 background-color white

.product-container_image
 width 100%
 height 330px
 object-fit contain

.product-container_price
   margin 15px 0
   font-size 35px

.product-container_price_currency
 font-size 14px

.product-container_buttons-container
 display flex
 flex-direction row

.product-container_buttons-container_button
 width 50px
 padding 10px
 margin 10px 5px 0 0
 border none
 border-radius 15px
 font-weight bold
 white-space nowrap
 color white
 background-color #14cc80
 cursor pointer

.product-container_buttons-container_button:hover
 opacity .7

.product-container_buttons-container_button-add
 width 65px

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

.open-info
 display flex

.product-in-cart
 background-color red

.clicked-button
 background-color #136c47
</style>
