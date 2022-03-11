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
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      rows: [
        {
          id: 1,
          alt: "coffee",
          img: "backg1.jpg",
        },
        {
          id: 2,
          alt: "field",
          img: "backg2.jpg",
        },
        {
          id: 3,
          alt: "mountain",
          img: "backg3.jpg",
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const assets = require.context("../../assets", false, /\.jpg$/);
      return assets("./" + pic);
    },
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
 width 100%
 height 100vh
 object-fit fill
</style>
