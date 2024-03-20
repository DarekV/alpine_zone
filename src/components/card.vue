<script setup>
const props = defineProps({
  cardImg: String,
  cardText: String,
});
</script>
<template>
  <div class="containt">
    <div class="shadow"></div>
    <img :src="cardImg" alt="photo" class="card-img" />
    <p v-html="cardText"></p>
  </div>
</template>
<style scoped>
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  transition: 0.8s;
  &:hover {
    transform: scale(1.05);
  }
}

.containt {
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  z-index: 1;
  overflow: hidden;
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
  pointer-events: none;

  background: linear-gradient(
    180deg,
    rgba(29, 29, 29, 0) 60.72%,
    rgba(29, 29, 29, 0.5) 75.95%
  );
}
</style>
