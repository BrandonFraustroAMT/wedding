<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ConfirmationSlice>([
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
    class="confirmation-slice"
  >
    <div class="confirmation-slice__container">
      <div class="confirmation-slice__box">
        <div class="confirmation-slice__title">
          <h2><PrismicRichText :field="slice.primary.title" /></h2>
        </div>
        <div class="confirmation-slice__subtitle">{{ slice.primary.subtitle }}</div>
        <div class="ubication-slice__btn">
          <a href="#" class="ubication-slice__btn-text">Confirmar</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .confirmation-slice {
    background-image: url('../../assets/img/Fondo4.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #F5F0EF;
    background-position: left 50% top 100%;
  }

  .confirmation-slice__container {
    width: 100%;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confirmation-slice__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
    background-color: #fff;
    padding: 55px 0;
    box-shadow: 6px 3px 7px rgba(0, 0, 0, .2);
  }

  .confirmation-slice__title {
    padding: 20px;
  }
  .confirmation-slice__title h2{
    font-size: 1.4rem;
  }

  .confirmation-slice__subtitle {
    font-size: 0.8rem;
    padding-bottom: 20px;
  }

  @media (min-width: 640px) {
    .confirmation-slice__box {
      width: 60%;
    }
    .confirmation-slice__title h2{
      font-size: 2rem;
    }
  
    .confirmation-slice__subtitle {
      font-size: 1rem;
      padding-bottom: 20px;
    }
  }
  @media (min-width: 920px) {
    .confirmation-slice__box {
      width: 50%;
    }
    .confirmation-slice__title h2{
      font-size: 2.5rem;
    }

    .confirmation-slice__subtitle {
      font-size: 1.5rem;
      padding-bottom: 20px;
    }
  }
</style>