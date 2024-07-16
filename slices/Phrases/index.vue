<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PhrasesSlice>([
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
    <div class="phrase-slice">
      <div class="phrase-slice__container">
        <div class="phrase-slice__column phrase-slice__text" >
          <h2 class="phrase-slice__title">
            <PrismicRichText :field="slice.primary.tittle_one" />
          </h2>
          <p class="phrase-slice__subtitle">
            <i>
              {{ slice.primary.subtittle_one }}
            </i>
          </p>
        </div>
        <div class="phrase-slice__column phrase-slice__imgage-container" >
          <div class="phrase-slice__img phrase-slice__img1">
            <PrismicImage :field="slice.primary.image_one" />
          </div>
        </div>
        <div class="phrase-slice__column phrase-slice__imgage-container" >
          <div class="phrase-slice__img phrase-slice__img2">
            <PrismicImage :field="slice.primary.image_two" />
          </div>
        </div>
        <div class="phrase-slice__column phrase-slice__text" >
          <h2 class="phrase-slice__title">
            <PrismicRichText :field="slice.primary.tittle_two" />
          </h2>
          <p class="phrase-slice__subtitle">
            <i>
              {{ slice.primary.subtittle_two }}
            </i>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .phrase-slice {
    width: 100%;
    padding: 80px 30px;
  }
  .phrase-slice__container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .phrase-slice__column{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .phrase-slice__text {
    width: 100%;
    padding-bottom: 25px;
  }
  .phrase-slice__imgage-container {
    margin: 10px 0px;
  }

  .phrase-slice__img{
    flex: 1 0 100%; /* Permite que cada imagen ocupe todo el contenedor */
    width: 100%;
    height: 100%;
    position: relative; /* Necesario para posicionar la imagen */
  }
  .phrase-slice__img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .phrase-slice__img1 img {
    border-radius: 10px;
  }
  .phrase-slice__img2 img {
    border-radius: 10px;
  }

  .phrase-slice__title {
    font-family: 'Adelia', sans-serif;
    font-size: 2rem;
    text-align: center;
    line-height: 95px;
    margin: 10px 0;
  }
  .phrase-slice__subtitle {
    font-size: 1rem;
    padding: 0 55px;
    color: #727272;
  }

  @media (min-width: 640px) {
  }

  @media (min-width: 760px) {
    .phrase-slice__title {
      font-size: 2.2rem;
    }
  }

  @media (min-width: 960px) {
    .phrase-slice {
      height: 100vh;
    }
    .phrase-slice__container{
      height: 100%;
      flex-direction: row;
    }
    .phrase-slice__imgage-container {
      width: 30%;
      margin: 0px 3px;
    }
    .phrase-slice__img img{
      padding: 0 1px
    }
    .phrase-slice__img1 img {
      border-radius: 10px 0 0 10px;
    }
    .phrase-slice__img2 img {
      border-radius: 0px 10px 10px 0px;
    }
    .phrase-slice__text {
      width: 20%;
    }
    .phrase-slice__title {
      font-size: 2rem;
      margin: 30px 0;
    }
  }
  
  @media (min-width: 1280px) {
    .phrase-slice__img img{
      padding: 0 1px
    }
    .phrase-slice__text {
      width: 20%;
    }
    .phrase-slice__imgage-container {
      width: 30%;
      margin: 0 1px;
    }
    .phrase-slice__title {
      font-size: 2.2rem;
    }
  }
  @media (min-width: 1440px) {
    .phrase-slice__img img{
      padding: 0 1px
    }
  }
</style>
