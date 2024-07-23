<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CodigoSlice>([
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
    <div class="codigo-slice">
      <div class="codigo-slice__container">
        <div class="codigo-slice__title">
          <h2><PrismicRichText :field="slice.primary.title" /></h2>
        </div>
        <div class="codigo-slice__subtitle">{{ slice.primary.subtitle }}</div>
        <div class="codigo-slice__columns">
          <div class="codigo-slice__column1">
            <template v-for="item in slice.primary.groupellos">
              <div class="codigo-slice__text1">{{ item.subtitle }}</div>
              <div class="codigo-slice__text">{{ item.label1 }}</div>
              <div class="codigo-slice__text">{{ item.label2 }}</div>
              <div class="codigo-slice__text">{{ item.label3 }}</div>
              <div class="codigo-slice__text">{{ item.label4 }}</div>
              <div class="codigo-slice__text">{{ item.label5 }}</div>
              <div class="codigo-slice__text">{{ item.label6 }}</div>
            </template>
          </div>
          <div class="codigo-slice__column2">
            <PrismicImage :field="slice.primary.image" />
          </div>
          <div class="codigo-slice__column3">
            <template v-for="item in slice.primary.groupellas">
              <div class="codigo-slice__text1">{{ item.subtitle }}</div>
              <div class="codigo-slice__text">{{ item.label1 }}</div>
              <div class="codigo-slice__text">{{ item.label2 }}</div>
              <div class="codigo-slice__text">{{ item.label3 }}</div>
              <div class="codigo-slice__text">{{ item.label4 }}</div>
              <div class="codigo-slice__text">{{ item.label5 }}</div>
              <div class="codigo-slice__text">{{ item.label6 }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
  .codigo-slice {
    width: 100%;
    padding: 100px 0;
  }
  .codigo-slice__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .codigo-slice__title h2{ 
    font-size: 3rem;
    font-weight: 200;
    font-family: 'Gistesy', sans-serif;
    text-align: center;
  }

  .codigo-slice__subtitle {
    width: 90%;
    font-family: 'Belleza', sans-serif;
    font-size: 1.3rem;
    text-align: center;
  }

  .codigo-slice__columns {
    margin: 30px 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .codigo-slice__column1 {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .codigo-slice__column2 {
    width: 60%;
    height: 200px;
    background-color: rgb(176, 176, 176);
    margin-bottom: 30px;
  }
  .codigo-slice__column2 img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .codigo-slice__column3 {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .codigo-slice__text1 {
    font-size: 2rem;
    font-weight: 200;
    font-family: 'Gistesy', sans-serif;
    text-align: center;
  }
  .codigo-slice__text {
    font-family: 'Belleza', sans-serif;
    padding: 5px 0;
    font-size: 1rem;
  }

  @media (min-width: 900px) {
    .codigo-slice__columns {
      margin: 30px 0;
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .codigo-slice__column1 {
      width: 25%;
    }
    .codigo-slice__column2 {
      width: 40%;
      height: 400px;
      background-color: rgb(176, 176, 176);
    }
    .codigo-slice__column3 {
      width: 25%;
    }
  }

</style>