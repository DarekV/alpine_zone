<script setup>
import { defineProps, ref } from "vue";
import Arrow from "/src/components/arrow.vue";

const props = defineProps({
  buttonP: String,
});
</script>
<template>
  <a href="">
    <p class="button-p">{{ buttonP }}</p>
    <Arrow />
  </a>
</template>
<style scoped>
a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px solid var(--color-yellow);
  border-radius: 50px;
  padding: 16px 20px;
  min-width: 300px;
  max-width: 400px;
  z-index: 99;
}

.button-p {
  font-family: var(--font-family-bold);
  font-size: 22px;
}

@media screen and (max-width: 600px) {
  a {
    max-width: none;
  }
  .button-p {
    font-size: 20px;
  }
}
</style>
