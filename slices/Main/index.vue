<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.MainSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="main-slice">
      <!-- SLIDER -->
      <div class="main-slice__slider">
        <Carousel :autoplay="3000" :wrap-around="true">
          <Slide v-for="(item, index) in slice.primary.groupmain" :key="index">
            <div class="main-slice__slider-image">
              <PrismicImage :field="item.image" />
            </div>
          </Slide>
        
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
      <div class="main-slice__container">
        <div class="main-slice__title">
          <i>
            <h2>
              <PrismicRichText :field="slice.primary.tittle" />
            </h2>
          </i>
        </div>
        <div class="main-slice__subtitle">
          {{ slice.primary.subtittle }}
        </div>
        <div class="main-slice__description">
          <i>
            {{ slice.primary.description }}s
          </i>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
  .main-slice {
    width: 100%;
    height: 100vh;
    overflow: hidden; /* Asegura que no haya desbordamiento */
  }

  .main-slice__slider {
    width: 100%;
    height: 100%;
    display: flex; /* Usar flexbox para asegurar que los hijos ocupen el 100% */
    justify-content: center;
    align-items: center;
  }

  .main-slice__slider-image {
    width: 100%;
    height: auto;
  }

  .main-slice__slider-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .main-slice__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    top: -70%;
    margin: 0 10px;
  }
  .main-slice__title {
    margin: 35px 0;
  }
  .main-slice__title h2 {
    color: #fff;
    font-size: 1.5rem;
    font-family: 'Belleza', sans-serif;
    font-weight: 200;
    text-shadow: #fff 1px 0px 10px;
  }

  .main-slice__subtitle {
    margin: 35px 0;
    font-family: 'Gistesy', sans-serif;
    font-size: 3rem;
    line-height: 5rem;
    color: #fff;
    text-shadow: #fff 1px 0px 10px;
  }

  .main-slice__description {
    margin: 35px 0;
    font-size: 1rem;
    color: #fff;
    font-family: 'Belleza', sans-serif;
    text-align: center;
    text-shadow: #fff 1px 0px 10px;
  }

  @media (min-width: 640px) {
    .main-slice__title h2 {
      font-size: 1.5rem;
    }

    .main-slice__subtitle {
      font-size: 4rem;
    }

    .main-slice__description {
      font-size: 1rem;
    }
  }

  @media (min-width: 900px) {
    .main-slice__title h2 {
      font-size: 2rem;
    }

    .main-slice__subtitle {
      font-size: 5rem;
    }

    .main-slice__description {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1440px) {
    .main-slice__title h2 {
      font-size: 2rem;
    }

    .main-slice__subtitle {
      font-size: 6rem;
    }

    .main-slice__description {
      font-size: 1.5rem;
    }
  }
</style>