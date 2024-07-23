<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.OurMomentsSlice>([
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
    <div class="ourmoments-slice">
      <div class="ourmoments-slice__container">
        <div class="ourmoments-slice__column" >
          <div class="ourmoments-slice__title" >
            <h2>
              <PrismicRichText :field="slice.primary.title" />
            </h2>
          </div>
          <div class="ourmoments-slice__subtitle" >
            {{ slice.primary.subtitle }}
          </div>
        </div>
        <div class="ourmoments-slice__column ourmoments-slice__column-img" >
          <template v-for="item in slice.primary.groupmoments">
            <div class="ourmoments-slice__image" >
              <PrismicImage :field="item.image" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .ourmoments-slice {
    width: 100%;
    height: 100%;
  }

  .ourmoments-slice__container {
    width: 100%;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ourmoments-slice__column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .ourmoments-slice__title {
    padding-bottom: 30px;
  }
  .ourmoments-slice__title h2 {
    font-size: 1rem;
    font-weight: 200;
    font-family: 'Gistesy', sans-serif;
    text-align: center;
  }
  .ourmoments-slice__subtitle {
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Belleza', sans-serif;
  }

  .ourmoments-slice__column-img {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .ourmoments-slice__image {
    width: 45%;
    height: 300px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .ourmoments-slice__image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: filter 2s;
  }
  .ourmoments-slice__image img:hover{
    filter: grayscale(100%);
  }

  @media (min-width: 610px) {
    .ourmoments-slice__image {
      width: 50%;
      height: 400px;
    }
  }
  @media (min-width: 720px) {
    .ourmoments-slice__image {
      width: 50%;
    }
  }
  @media (min-width: 940px) {
    .ourmoments-slice__image {
      width: 40%;
    }
    .ourmoments-slice__title h2 {
      font-size: 3rem;
    }
  }
  @media (min-width: 1280px) {
    .ourmoments-slice__image {
      width: 40%;
      height: 600px;
    }
  }
</style>