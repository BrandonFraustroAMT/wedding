<script setup lang="ts">
import { type Content } from "@prismicio/client";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SliderSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

import { onMounted } from 'vue';

onMounted(() => {
  const applyAnimations = () => {
    if (window.innerWidth >= 690) {
      gsap.fromTo(
        '.img1',
        { y: -100 }, // Estado inicial
        {
          y: 100, // Estado final
          scrollTrigger: {
            trigger: '.img1',
            start: "top 70%",
            end: 'top top',
            scrub: true,
            markers: false,
          },
        }
      );
      gsap.fromTo(
        '.img3',
        { y: 100 }, // Estado inicial
        {
          y: -100, // Estado final
          scrollTrigger: {
            trigger: '.img3',
            start: "top 90%",
            end: 'top top',
            scrub: true,
            markers: false,
          },
        }
      );
      gsap.fromTo(
        '.img4',
        { y: -80 }, // Estado inicial
        {
          y: 100, // Estado final
          scrollTrigger: {
            trigger: '.img4',
            start: "top 70%",
            end: 'top top',
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }
  applyAnimations();
  
  window.addEventListener('resize', applyAnimations);
  
  // Cleanup event listener on unmount
  return () => {
    window.removeEventListener('resize', applyAnimations);
  };
});

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="slider-slice">
      <div class="slider-slice__container">
        <div class="slider-slice__images img1" >
          <PrismicImage :field="slice.primary.image_one" />
        </div>
        <div class="slider-slice__images img2" >
          <PrismicImage :field="slice.primary.image_two" />
        </div>
        <div class="slider-slice__images img3" >
          <PrismicImage :field="slice.primary.image_three" />
        </div>
        <div class="slider-slice__images img4" >
          <PrismicImage :field="slice.primary.image_four" />
        </div>
        <!-- <div class="slider-slice__images" >
          <PrismicImage :field="slice.primary.image_five" />
        </div>
        <div class="slider-slice__images" >
          <PrismicImage :field="slice.primary.image_six" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<style>
  .slider-slice {
    width: 100%;
    margin: 40px 0;
    height: 100vh;
  }

  .slider-slice__container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .slider-slice__images {
    width: 20%;
    height: 25%;
  }
  .slider-slice__images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 690px) {
    .slider-slice__images {
      width: 22%;
      height: 45%;
    }
  }
  @media (min-width: 940px) {
    .slider-slice__images {
      width: 22%;
      height: 60%;
    }
  }
  @media (min-width: 1280px) {
    .slider-slice__images {
      width: 20%;
      height: 65%;
    }
  }
  @media (min-width: 1440px) {
    
  }
</style>
