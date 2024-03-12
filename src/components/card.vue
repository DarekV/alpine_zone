<script setup>
const props = defineProps({
  cardImg: String,
  cardText: String,
});
</script>
<template>
  <div class="containt">
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
  padding: 30px;
  position: relative;
  z-index: 1;
}
</style>
