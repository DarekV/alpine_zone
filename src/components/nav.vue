<script></script>

<template>
  <div class="header-fixed">
    <v-container class="v-container-margin">
      <v-row class="header-bar">
        <v-col cols="4" lg="7" md="5">
          <router-link to="home">
            <h1>Logo</h1>
          </router-link>
        </v-col>
        <v-col>
          <ul>
            <li><a href="#">Sommets</a></li>
            <li><a href="#">Témoignages</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Galerie</a></li>
          </ul>
          <div class="burger">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
}

.header-fixed {
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
  z-index: 1000;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  font-family: var(--font-family-regular);
  font-size: 20px;
  color: #fff;
  transition: 0.3s ease-in;
  &:hover {
    font-family: var(--font-family-bold);
    color: var(--color-yellow);
  }
}

.burger {
  display: none;
  width: 30px;
  height: 24px;
  float: right;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .burger {
    display: flex;
  }

  ul {
    display: none;
  }
}

.burger-line {
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 50px;
}
</style>
