<template>
  <div class="home-container">
    <div
      class="row-container"
      v-for="(row, index) in rows"
      :key="row.id + row.alt"
      :row="index + 1"
    >
      <img class="row-container_img" :src="getImgUrl(row.img)" :alt="row.alt" />
    </div>
    <div class="row-container_ad" v-bind:class="{ 'hide-ad': hideAdtext }">
      <span class="row-container_ad_title">{{ rows[currentRow - 1].ad }}</span>
      <router-link class="row-container_ad_offer" to="/products">
        BUY FOR JUST
        <span class="row-container_ad_offer_price"
          >{{ rows[currentRow - 1].price }}€</span
        ></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      hideAdtext: false,
      currentRow: 1,
      rows: [
        {
          id: 1,
          alt: "coffee",
          img: "backg1.jpg",
          ad: 'Apple MacBook Air 13,3"',
          price: 199,
        },
        {
          id: 2,
          alt: "field",
          img: "backg2.jpg",
          ad: "Monstera Clara",
          price: 1.99,
        },
        {
          id: 3,
          alt: "mountain",
          img: "backg3.jpg",
          ad: "Holidays to Lanzarote",
          price: 499,
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.jpg$/);
      return assets("./" + pic);
    },
    trackRow() {
      const actualRow = document.querySelector(`[row='${this.currentRow}']`);
      const adText = document.querySelector(".row-container_ad");
      const adsLength = document.querySelectorAll(".row-container").length;
      if (!adText || !actualRow) {
        return;
      }
      if (
        window.pageYOffset + adText.offsetTop >=
          actualRow.offsetTop + actualRow.offsetHeight - adText.offsetHeight &&
        this.currentRow < adsLength
      ) {
        this.currentRow++;
      }
      if (
        window.pageYOffset + adText.offsetTop <=
          actualRow.offsetTop - adText.offsetTop + adText.offsetTop / 2 &&
        this.currentRow > 1
      ) {
        this.currentRow--;
      }
      this.toggleAdText(actualRow, adText);
    },
    toggleAdText(actualRow, adText) {
      if (
        window.pageYOffset + adText.offsetTop <
          actualRow.offsetTop + actualRow.offsetHeight * 0.1 ||
        window.pageYOffset + adText.offsetTop >
          actualRow.offsetTop + actualRow.offsetHeight / 3
      ) {
        this.hideAdtext = true;
      } else {
        this.hideAdtext = false;
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.trackRow);
  },
};
</script>

<style lang="stylus" scoped>
.home-container
 display flex
 flex-direction column

.row-container
 display flex
 scroll-snap-align start

.row-container_img
 width 100vw
 height 100vh
 object-fit cover

.row-container_ad
  display flex
  flex-direction column
  align-items center
  position fixed
  top 25%
  left 50%
  transform: translateX(-50%);
  opacity 1
  text-align center
  transition-duration .5s

.row-container_ad_title
  font-family Franklin Gothic Medium
  font-size 40px

.row-container_ad_offer
  min-width 250px
  padding 10px 20px
  border-radius 15px
  color white
  text-decoration none
  background-color #6b00ea
  cursor pointer

.row-container_ad_offer:hover
  opacity .7

.row-container_ad_offer_price
 font-weight bold
 font-size 18px

.hide-ad
 opacity 0
</style>
