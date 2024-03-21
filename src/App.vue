<script setup>
import footerContent from "/src/components/footer.vue";
</script>
<template>
  <router-view :key="$route.fullPath"></router-view>
  <footer>
    <footerContent />
  </footer>
</template>

<style scoped></style>
