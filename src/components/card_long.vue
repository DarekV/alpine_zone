<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  cardImg: String,
  cardText: String,
  cardContent: String,
});
const contentPRef = ref(null);

onMounted(() => {
  nextTick().then(() => {
    ScrollTrigger.create({
      trigger: contentPRef.value,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        setTimeout(() => {
          contentPRef.value.classList.add("active");
          contentPRef.value
            .closest(".content")
            .querySelector(".shadow")
            .classList.add("active");
        }, 1000);
      },
      onLeave: () => {
        contentPRef.value.classList.remove("active");
        contentPRef.value
          .closest(".content")
          .querySelector(".shadow")
          .classList.remove("active");
      },
      onEnterBack: () => {
        setTimeout(() => {
          contentPRef.value.classList.add("active");
          contentPRef.value
            .closest(".content")
            .querySelector(".shadow")
            .classList.add("active");
        }, 1000);
      },
      onLeaveBack: () => {
        contentPRef.value.classList.remove("active");
        contentPRef.value
          .closest(".content")
          .querySelector(".shadow")
          .classList.remove("active");
      },
    });
  });
});
</script>
<template>
  <div class="content">
    <div class="shadow"></div>
    <img :src="cardImg" alt="photo" class="card-img" />
    <div class="container-p">
      <p>{{ cardText }}</p>
      <p ref="contentPRef" class="content-p">{{ cardContent }}</p>
    </div>
  </div>
</template>
<style scoped>
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  transition: 1s ease-in-out;
}

.content {
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
  &:hover {
    .content-p {
      max-height: 100%;
      margin-top: 15px;
    }

    .shadow {
      opacity: 1;
    }

    .card-img {
      transform: scale(1.03);
    }
  }
}

.container-p {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  padding: 30px;
}

p {
  font-size: 36px;
  line-height: 36px;
}

.content-p {
  font-size: 18px;
  line-height: 20px;
  margin-top: 0;
  max-height: 0;
  overflow: hidden;
  display: flex;
  align-items: end;
  transition: 0.5s ease-in-out;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 500px;
  left: 0;
  top: 0;
  z-index: 1;
  pointer-events: none;
  transition: 0.5s ease-in-out;
  opacity: 0.2;
  background: linear-gradient(
    180deg,
    rgba(29, 29, 29, 0) 50.72%,
    rgba(29, 29, 29, 0.7) 80%
  );
}

@media screen and (max-width: 900px) {
  .content-p.active {
    max-height: 100%;
    margin-top: 15px;
  }

  .shadow.active {
    opacity: 1;
  }
}
</style>
