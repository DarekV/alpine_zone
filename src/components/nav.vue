<template>
  <ul>
    <li><a href="#">Sommets</a></li>
    <li><a href="#">Témoignages</a></li>
    <li><a href="#">Guides</a></li>
    <li><a href="#">Galerie</a></li>
  </ul>
</template>

<script></script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  font-family: var(--font-family-regular);
  font-size: 20px;
}
</style>
