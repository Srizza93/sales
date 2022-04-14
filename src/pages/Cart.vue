<template>
  <div class="cart-container">
    <div
      class="item-container"
      v-for="item in cartItems"
      :key="'cart-' + item.id + item.title"
    >
      <zoom-image :photo="item" />
      <star
        v-for="star in roundedProductRate(item.rating.rate)"
        :key="star + '-star'"
      />
      <h1>
        {{ roundedProductRate(item.rating.rate) }}
      </h1>
      <div class="item-container_main-details">
        <span>{{ item.title }}</span>
        <span>{{ item.rating.count }}</span>
        <span>{{ capitalizeProductCategory(item.category) }}</span>
      </div>
      <span>{{ item.description }}</span>
      <div class="item-container_prices">
        <span>{{ item.price }} Eur</span>
        <span>{{ pricePerQuantity(item.price, item.quantity) }} Eur</span>
      </div>
      <div class="item-container_buttons-container">
        <chevron class="chevron" @click="decreaseQuantiy(item)" />
        <span>{{ item.quantity }}</span>
        <chevron class="chevron chevron-right" @click="increaseQuantiy(item)" />
      </div>
    </div>
  </div>
</template>

<script>
import Chevron from "../../assets/chevron.svg";
import Star from "../../assets/star-solid.svg";
import ZoomImage from "../components/ZoomImage.vue";

export default {
  name: "Cart",
  components: { Chevron, Star, ZoomImage },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
  },
  methods: {
    capitalizeProductCategory(category) {
      return category.substring(0, 1).toUpperCase() + category.substring(1);
    },
    roundedProductRate(rate) {
      return Math.round(rate);
    },
    decreaseQuantiy(item) {
      item.quantity--;
    },
    increaseQuantiy(item) {
      item.quantity++;
    },
    pricePerQuantity(price, quantity) {
      return (price * quantity).toFixed(2);
    },
  },
};
</script>

<style lang="stylus" scoped>
.cart-container
 display flex
 flex-direction column
 margin-top 190px

.item-container
 display flex
 flex-direction row
 max-width 100%
 margin 40px 10px
 border-radius 5px
 background-color white

.item-container_main-details
 display flex
 flex-direction column

.item-container_buttons-container,
.item-container_prices
 display flex
 flex-direction row

.chevron
 width 30px
 height 30px
 padding 3px
 border 2px solid #14cc80
 border-radius 50%
 fill black
 cursor pointer

.chevron-right
 transform rotate(180deg)

.chevron:hover
 border 2px solid black
 fill #14cc80
</style>
