<script setup lang="ts">
import { type Content } from "@prismicio/client";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.VisionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

import { onMounted } from 'vue';

onMounted(() => {
  gsap.fromTo(
    '.vision-slice__phrase2',
    { scale: 0.5 }, // Estado inicial
    {
      scale: 2, // Estado final
      scrollTrigger: {
        trigger: '.vision-slice__phrase2',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        markers: false,
      },
    }
  );
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="vision-slice"
  >
    <div class="vision-slice__container">
      <div class="vision-slice__column ubication-slice__img" >
        <PrismicImage :field="slice.primary.imagedecoration" />
      </div>
      <div class="vision-slice__column vision-slice__phrase1" >
        {{ slice.primary.phrase1 }}
      </div>
      <div class="vision-slice__column vision-slice__phrase2" >
        {{ slice.primary.prhase2 }}
      </div>
    </div>
  </section>
</template>

<style>
  .vision-slice {
    background-image: url('../../assets/img/Fondo2.png');
    background-color: #F7F2E7;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 50% top 100%;
    height: 100%;
  }

  .vision-slice__container {
    padding: 160px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .vision-slice__phrase1 {
    padding: 20px 0;
    font-size: 15px;
    font-family: 'Belleza', sans-serif;
    text-align: center;
  }

  .vision-slice__phrase2 {
    padding-top: 40px;
    font-size: 20px;
    font-family: 'Gistesy', sans-serif;
  }

  @media (min-width: 640px) {
    .vision-slice__phrase1 {
      font-size: 20px;
    }

    .vision-slice__phrase2 {
      font-size: 25px;
    }
  }
  @media (min-width: 940px) {
    .vision-slice__phrase1 {
      font-size: 26px;
    }

    .vision-slice__phrase2 {
      font-size: 30px;
    }
  }
</style>