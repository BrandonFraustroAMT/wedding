<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.GifsSlice>([
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
    class="gift-slice"
  >
    <div class="gift-slice__container">
      <div class="gift-slice__box">
        <div class="gift-slice__title">
          <h2>
            <PrismicRichText :field="slice.primary.title" />
          </h2>
        </div>
        <div class="ubication-slice__btn">
          <PrismicLink :field="slice.primary.linkbutton" class="ubication-slice__btn-text">{{ slice.primary.labelbutton }}</PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .gift-slice {
    width: 100%;
  }

  .gift-slice__container {
    width: 100%;
    padding: 100px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gift-slice__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
  }

  .gift-slice__title {
    font-size: 1.5rem;
    font-family: 'Gistesy', sans-serif;
    margin-bottom: 30px
  }

  @media (min-width: 620px) {
    .gift-slice__title {
      font-size: 2rem;
    }
  }
  @media (min-width: 940px) {
    .gift-slice__title {
      font-size: 2.5rem;
    }
    .gift-slice__box {
      width: 40%;
    }
  }

</style>