<template>
  <div class="sort-container">
    <div
      class="sort-container-button"
      v-for="sort in sortOptions"
      :key="sort.id + sort.type"
      @click="sortProducts(sort)"
    >
      <span>{{ sort.level }} {{ sort.type }}</span>
      <sort-up class="svg-sort" v-if="sort.clicked" />
      <sort-down v-else class="svg-sort sort-off" />
    </div>
  </div>
</template>

<script>
import sortUp from "../../assets/sort-up.svg";
import sortDown from "../../assets/sort-down.svg";

export default {
  name: "Sort",
  components: { sortUp, sortDown },
  data() {
    return {
      sortOptions: [
        {
          id: 1,
          type: "price",
          level: "Highest",
          sign: "+",
          clicked: false,
        },
        {
          id: 2,
          type: "price",
          level: "Lowest",
          sign: "-",
          clicked: false,
        },
        {
          id: 3,
          type: "rating",
          level: "Highest",
          sign: "+",
          clicked: true,
        },
        {
          id: 4,
          type: "rating",
          level: "Lowest",
          sign: "-",
          clicked: false,
        },
      ],
    };
  },
  methods: {
    sortProducts(sort) {
      this.sortOptions.forEach((sort) => (sort.clicked = false));
      sort.clicked = true;
      if (sort.clicked) {
        this.$store.state.sort.type = sort.type;
        this.$store.state.sort.sign = sort.sign;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.sort-container
 display flex
 flex-direction row
 justify-content center
 align-items center
 margin-bottom 50px
 background-color #136c47

.sort-container-button
 display flex
 flex-direction row
 align-items center
 max-width 200px
 color black
 background-color white
 padding 10px 30px
 margin 10px 20px
 border-radius 15px
 font-weight bold
 cursor pointer

.sort-container-button:hover
 opacity .7

.svg-sort
 overflow visible
 margin-left 10px

.sort-off
 color #C9CDD1

@media screen and (max-width 750px)
 .sort-container
   flex-direction column
</style>
