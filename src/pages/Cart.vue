<template>
  <div class="cart-container">
    <router-link
      class="sales-button"
      :to="'/payment/' + totalToPay"
      v-if="atLeastOneItemInCart()"
      >PAY NOW</router-link
    >
    <div class="no-products-container" v-else>
      <span>THERE ARE NO PRODUCTS IN YOUR CART</span>
      <router-link class="no-products-container_router-link" to="/products/"
        >GO BACK TO OUR PRODUCTS LIST</router-link
      >
      <span v-if="cartItems.length">OR ADD MORE ITEMS BELOW</span>
    </div>
    <div
      class="item-container"
      v-for="item in cartItems"
      :key="'cart-' + item.id + item.title"
    >
      <zoom-image :photo="item" />
      <div class="information-container">
        <div class="item-container_information-container_details-container">
          <div class="information-container_details-container_main-details">
            <div
              class="information-container_details-container_main-details_star-container"
            >
              <star
                v-for="star in roundedProductRate(item.rating.rate)"
                :key="star + '-star'"
              />
              <span>{{ item.rating.count }}</span>
            </div>
            <span
              class="information-container_details-container_main-details_info information-container_details-container_main-details_info-title"
              >{{ item.title }}</span
            >
            <span
              class="information-container_details-container_main-details_info"
              >{{ capitalizeProductCategory(item.category) }}</span
            >
          </div>
          <p>{{ item.description }}</p>
        </div>
        <div class="information-container_purchase-container">
          <div class="information-container_buttons-container">
            <chevron class="chevron" @click="decreaseQuantiy(item)" />
            <span class="information-container_buttons-container_quantity">{{
              item.quantity
            }}</span>
            <chevron
              class="chevron chevron-right"
              @click="increaseQuantiy(item)"
            />
          </div>
          <span
            v-if="item.quantity"
            class="information-container_purchase-container_final-price"
            >{{ pricePerQuantity(item.price, item.quantity) }} Euro</span
          >
          <button
            class="sales-button information-container_purchase-container_button"
            @click="removeItem(item)"
            v-else
          >
            REMOVE ITEM
          </button>
        </div>
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
    totalToPay() {
      return Array.from(this.$store.state.cartItems).reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },
  },
  methods: {
    roundedProductRate(rate) {
      return Math.round(rate);
    },
    capitalizeProductCategory(category) {
      return category.substring(0, 1).toUpperCase() + category.substring(1);
    },
    atLeastOneItemInCart() {
      const cartItems = Array.from(this.$store.state.cartItems);
      return !cartItems.every((item) => item.quantity === 0);
    },
    decreaseQuantiy(item) {
      if (item.quantity > 0) {
        item.quantity--;
      }
    },
    increaseQuantiy(item) {
      item.quantity++;
    },
    removeItem(item) {
      this.$store.commit("deleteItemInCart", item);
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
 align-items center
 margin-top 150px

.no-products-container
  display flex
  flex-direction column
  align-items center
  justify-content center
  padding 20px 30px
  border-radius 15px
  line-height 30px
  color white
  background-color #6b00ea

.no-products-container_router-link
  color white

.no-products-container_router-link:hover
  text-decoration none

.item-container
 display flex
 flex-direction row
 width 90%
 max-width 1000px
 padding 30px
 margin 40px 10px
 border-radius 5px
 background-color white
 word-break break-word

.information-container
 display flex
 flex-direction column
 width 100%
 padding 0 30px

.item-container_information-container_details-container
 display flex
 flex-direction column

.information-container_details-container_main-details
 display flex
 flex-direction column

.information-container_details-container_main-details_info
 margin 10px 0

.information-container_details-container_main-details_info-title
 font-weight bold

.information-container_details-container_main-details_star-container
 display flex
 flex-direction row

.information-container_buttons-container
 display flex
 flex-direction row
 align-items center

.information-container_buttons-container_quantity
 margin 0 15px
 font-size 24px

.information-container_purchase-container
 display flex
 flex-direction row
 align-items center
 gap 15px
 margin-top auto

.information-container_purchase-container_final-price
 margin-left auto
 font-size 26px
 font-weight bold

.information-container_purchase-container_button
  border none
  margin-left auto

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

@media screen and (max-width 700px)
 .item-container
  flex-direction column
  align-items center

 .photo-container
   margin-bottom 30px

@media screen and (max-width 400px)
 .item-container
   padding 15px

 .information-container
   padding 0

 .information-container_purchase-container
   flex-direction column
   align-items baseline

 .information-container_purchase-container_button
   margin 0

 .information-container_buttons-container
   margin-bottom 30px

 .information-container_buttons-container_quantity
  margin 0 5px
</style>
