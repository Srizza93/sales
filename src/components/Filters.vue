<template>
  <div class="filters-container">
    <div
      class="filters-container_filter-div"
      v-for="(filter, index) in filters"
      :key="index + filter"
      @click="deleteFilter(filter)"
    >
      <close-button class="close-button" />
      <span>{{ filter }}</span>
    </div>
  </div>
</template>

<script>
import closeButton from "../../assets/close.svg";

export default {
  name: "Filters",
  components: { closeButton },
  computed: {
    filters() {
      return this.$store.state.filters;
    },
  },
  methods: {
    deleteFilter(filter) {
      this.$store.commit("deleteFilter", filter);
    },
  },
};
</script>

<style lang="stylus" scoped>
.filters-container
 display flex
 flex-direction row
 justify-content center

.filters-container_filter-div
 display flex
 flex-direction row
 align-items center
 padding 10px 30px
 margin 10px
 border-radius 15px
 font-weight bold
 color white
 background-color #14cc80
 cursor pointer

.filters-container_filter-div:hover
 opacity .7

.close-button
 margin-right 10px
 fill white
</style>
