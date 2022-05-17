<template>
  <div class="loading-container">
    <div class="loading-animation">
      <div class="loading-animation_circle-container">
        <div
          :class="'loading-animation_circle-container_circle bullet' + n"
          v-for="n in 12"
          :key="n + 'loading-animation'"
        ></div>
      </div>
    </div>
    <div class="processing-container">
      <span>Processing</span>
      <div>
        <span
          :class="'period-' + n"
          v-for="n in 3"
          :key="n + 'period-animation'"
          >.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  methods: {
    setBulletsPosition() {
      for (let i = 0; i < 12; i++) {
        const bullet = document.querySelector(`.bullet${i + 1}`);
        bullet.style.top = 46 + 50 * Math.cos((2 * Math.PI * i) / 12) + "px";
        bullet.style.left = 46 + 50 * Math.sin((2 * Math.PI * i) / 12) + "px";
      }
    },
  },
  mounted() {
    this.setBulletsPosition();
  },
};
</script>

<style lang="stylus" scoped>
.loading-container
 position fixed
 bottom 0
 display flex
 flex-direction column
 justify-content center
 align-items center
 height 100vh
 width 100vw
 z-index 999999999999
 background-color #6b00ea
 color white
 font-size 24px


.loading-animation
 display flex
 flex-direction row
 width 100px
 height 100px
 border-radius 50%
 -webkit-animation loading-circle 5s linear infinite

 @keyframes loading-circle {
   0% {
     transform rotate(0deg)
   }
   100% {
     transform rotate(360deg)
   }
 }

.loading-animation_circle-container
 position relative
 display inline-block

.loading-animation_circle-container_circle
 position absolute
 width 8px
 height 8px
 border-radius 50%
 background-color white

.processing-container
 display flex
 flex-direction row
 margin-top 25px

.period-1
 -webkit-animation period-animation 2s linear infinite
.period-2
 -webkit-animation period-animation 2s linear .5s infinite
.period-3
 -webkit-animation period-animation 2s linear 1s infinite

@keyframes period-animation {
  0% {
   opacity 1
  }

   50% {
    opacity 0
   }

  100% {
   opacity 1
  }
}
</style>
