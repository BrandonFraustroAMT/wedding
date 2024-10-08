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
    height: 100vh; /* Asegura que el contenedor del slider ocupe toda la pantalla */
  }

  .main-slice__slider-image {
    width: 100%;
    height: 100%;
    display: flex; /* Asegura que el contenido interno se alinee correctamente */
    justify-content: center; /* Centra el contenido horizontalmente */
    align-items: center; /* Centra el contenido verticalmente */
  }

  .main-slice__slider-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;/* Asegura que las imágenes cubran todo el área del contenedor */
  }
  .carousel, .carousel__slide, .carousel__viewport, .carousel__track {
    width: 100%;
    height: 100%;
  }

  .carousel__slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-slice__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    top: -80%;
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
    width: 80%;
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
    .main-slice__container {
      top: -70%;
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