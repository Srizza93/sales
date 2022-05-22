<template>
  <div class="photo-container" @mousemove="zoomIn" @mouseleave="zoomOut">
    <img
      class="photo-container_image"
      :src="photo.image"
      :alt="photo.category"
    />
    <div class="photo-container_zoom-square"></div>
    <div
      class="photo-container_zoom"
      :style="{
        backgroundImage: `url(${photo.image})`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ZoomImage",
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    zoomIn(event) {
      const photoContainer = event.target.closest(".photo-container");
      const zoomSquare = Array.from(photoContainer.children).find((e) =>
        e.classList.contains("photo-container_zoom-square")
      );
      const zoomContainer = Array.from(photoContainer.children).find((e) =>
        e.classList.contains("photo-container_zoom")
      );
      if (!zoomSquare.classList.contains("show-hidden-element")) {
        zoomSquare.classList.add("show-hidden-element");
        zoomContainer.classList.add("show-hidden-element");
      }
      this.moveSquare(event, zoomSquare, photoContainer, zoomContainer);
    },
    moveSquare(event, zoomSquare, photoContainer, zoomContainer) {
      const photoRects = photoContainer.getBoundingClientRect();
      let cx = zoomContainer.offsetWidth / zoomSquare.offsetWidth;
      let cy = zoomContainer.offsetHeight / zoomSquare.offsetHeight;
      let x = event.clientX - photoRects.left - zoomSquare.offsetWidth / 2;
      let y = event.clientY - photoRects.top - zoomSquare.offsetHeight / 2;
      if (event.clientX < photoRects.left + zoomSquare.offsetWidth / 2) {
        x = 0;
      }
      if (event.clientX > photoRects.right - zoomSquare.offsetWidth / 2) {
        x = photoContainer.offsetWidth - zoomSquare.offsetWidth;
      }
      if (event.clientY < photoRects.top + zoomSquare.offsetHeight / 2) {
        y = 0;
      }
      if (event.clientY > photoRects.bottom - zoomSquare.offsetHeight / 2) {
        y = photoContainer.offsetHeight - zoomSquare.offsetHeight;
      }
      zoomSquare.style.left = x + "px";
      zoomSquare.style.top = y + "px";
      zoomContainer.style.backgroundSize =
        photoContainer.offsetWidth * cx +
        "px " +
        photoContainer.offsetHeight * cy +
        "px";
      zoomContainer.style.backgroundPosition =
        "-" + x * cx + "px -" + y * cy + "px";
    },
    zoomOut(event) {
      const photoContainer = event.target.closest(".photo-container");
      const zoom = Array.from(photoContainer.children).find((e) =>
        e.classList.contains("photo-container_zoom")
      );
      const zoomSquare = Array.from(photoContainer.children).find((e) =>
        e.classList.contains("photo-container_zoom-square")
      );
      zoom.classList.remove("show-hidden-element");
      zoomSquare.classList.remove("show-hidden-element");
    },
  },
};
</script>

<style lang="stylus" scoped>
.photo-container
 display flex
 position relative
 width min-content
 height min-content

.photo-container_image
 width: 300px;
 height: 240px;
 cursor pointer

.photo-container_zoom-square
 display none
 position absolute
 width 40px
 height 40px
 background-color blue
 opacity .3
 cursor pointer

.photo-container_zoom
 display none
 position absolute
 top 0
 left 300px
 width 300px
 height 300px
 z-index 999
 background-color white
 background-repeat no-repeat

.show-hidden-element
 display block

@media screen and (max-width 700px)
  .photo-container_zoom
    top 240px
    left 0
    width 200px
    height 200px

@media screen and (max-width 350px)
  .photo-container_image
    width 200px
    height 140px

  .photo-container_zoom
    top 150px

@media screen and (max-width 250px)
  .photo-container_image
    width 125px
    height 85px

  .photo-container_zoom
    top 100px
    width 125px
    height 125px
</style>
