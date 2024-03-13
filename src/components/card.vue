<script setup>
const props = defineProps({
  cardImg: String,
  cardText: String,
});
</script>
<template>
  <div class="containt">
    <div class="shadow"></div>
    <img :src="cardImg" alt="photo" />
    <p>{{ cardText }}</p>
  </div>
</template>
<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
}

.containt {
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  z-index: 1;
}

p {
  font-size: 36px;
  line-height: 36px;
  padding: 30px;
  position: relative;
  z-index: 2;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 500px;
  left: 0;
  top: 0;
  z-index: 1;

  background: linear-gradient(
    180deg,
    rgba(29, 29, 29, 0) 60.72%,
    rgba(29, 29, 29, 0.5) 75.95%
  );
}
</style>
