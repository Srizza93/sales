<template>
  <div class="filters-container">
    <div
      class="filters-container_filter-div"
      v-for="(filter, index) in filters"
      :key="index + filter"
      @click="deleteFilter(filter)"
    >
      <close-button class="close-button" />
      <span class="filters-container_filter-div_text">{{ filter }}</span>
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
 flex-wrap wrap
 justify-content center
 margin 30px 0

.filters-container_filter-div
 display flex
 flex-direction row
 align-items center
 width 90%
 max-width 300px
 padding 10px 30px
 margin 10px
 border-radius 15px
 text-align center
 font-weight bold
 white-space nowrap
 color white
 background-color #136c47
 cursor pointer

.filters-container_filter-div:hover
 opacity .7

.close-button
 flex-basis 20%
 margin-right 10px
 fill white

.filters-container_filter-div_text
 flex-basis 80%
 text-overflow ellipsis
 overflow hidden
</style>
