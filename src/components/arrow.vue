<script setup></script>
<template>
  <div>
    <div class="line line-1"></div>
    <div class="line line-2"></div>
  </div>
</template>
<style scoped>
.line {
  width: 16px;
  height: 3px;
  background-color: var(--color-yellow);
}
.line-1 {
  transform: rotate(50deg);
  position: relative;
  top: -4px;
}

.line-2 {
  transform: rotate(-50deg);
  position: relative;
  top: 4px;
}
</style>
