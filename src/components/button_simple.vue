<script setup>
import { defineProps } from "vue";

const props = defineProps({
  buttonP: String,
});
</script>
<template>
  <div class="a">
    <p class="button-p">{{ buttonP }}</p>
  </div>
</template>
<style scoped>
.a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--color-yellow);
  border-radius: 50px;
  padding: 16px 20px;
  z-index: 99;
}

.button-p {
  font-family: var(--font-family-bold);
  font-size: 22px;
}

@media screen and (max-width: 600px) {
  .a {
    max-width: none;
  }
  .button-p {
    font-size: 20px;
  }
}
</style>
