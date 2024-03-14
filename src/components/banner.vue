<script>
export default {
  props: {
    imageUrl: String,
  },
};
</script>

<template>
  <div
    class="fixed-background"
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
  ></div>
</template>

<style>
.fixed-background {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 40vh;
  margin: 160px 0;
  position: relative;
  z-index: 1;
}
</style>
