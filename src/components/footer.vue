<script setup></script>
<template>
  <div class="footer">
    <v-container class="v-container-margin">
      <v-row>
        <v-col cols="12" md="3">
          <h2>logo</h2>
        </v-col>
        <v-col cols="12" md="6">
          <div class="wrapper">
            <nav>
              <ul>
                <li><a href="">Sommets</a></li>
                <li><a href="">témoignages</a></li>
                <li><a href="">Guides</a></li>
                <li><a href="">Galerie</a></li>
              </ul>
            </nav>
            <div class="newsletter">
              <p class="newsletter-p">Abonnez vous !</p>
              <div class="newsletter-input-container">
                <input
                  type="text"
                  placeholder="newsletter"
                  class="newsletter-input"
                />
                <button class="newsletter-button">
                  <p>X</p>
                </button>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3" class="socials-container">
          <div class="socials">
            <img src="/src/img/facebook.png" alt="facebook" />
            <img src="/src/img/instagram.png" alt="instagram" />
            <img src="/src/img/linkedin.png" alt="linkedin" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.footer {
  background-color: var(--background-black);
  padding: 30px 0 60px;
  margin-top: 160px;
}

ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
}

a {
  text-decoration: none;
  font-family: var(--font-family-regular);
  font-size: 20px;
  color: #fff;
}

li {
  list-style: none;
}

.newsletter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.newsletter-p {
  font-family: var(--font-family-regular);
  font-size: 20px;
  color: #fff;
  font-size: 20px;
}

.newsletter-input-container {
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.newsletter-input {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 10px 20px;
}

.newsletter-input:focus {
  outline: none;
}

.newsletter-button {
  width: 50px;
  height: 41px;
  background-color: var(--color-yellow);
  & p {
    color: var(--background-black);
  }
}

.socials-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 35px;
}

.socials {
  width: 60%;
  max-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  & img {
    width: 25px;
    height: 25px;
  }
}

@media screen and (max-width: 600px) {
  .newsletter {
    flex-direction: column;
    align-items: flex-start;
  }

  .newsletter-input-container {
    width: 100%;
    margin-top: 20px;
  }
}

@media screen and (max-width: 900px) {
  .socials-container {
    justify-content: flex-start;
    margin-top: 50px;
    padding-top: 0;
  }
}
</style>
