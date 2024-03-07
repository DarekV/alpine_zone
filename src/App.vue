<script setup>
import headerVue from "/src/components/header.vue";
const title = "Alpine Zone";
</script>
<template>
  <headerVue :title="title" />
</template>

<style scoped>
h1 {
  color: red;
}
</style>
