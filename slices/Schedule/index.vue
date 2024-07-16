<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ScheduleSlice>([
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
    class="schedule-background"
  >
    <div class="schedule-slice">
      <div class="schedule-slice__container">
        <div class="schedule-slice__title">
          <PrismicRichText :field="slice.primary.title" />
        </div>
        <div class="schedule-slice__content">
          <template v-for="item in slice.primary.groupschedule">
            <div class="schedule-slice__content-data">
              <div class="schedule-slice__content-text">{{ item.text }}</div>
              <div class="schedule-slice__content-img"><PrismicImage :field="item.image" /></div>
              <div class="schedule-slice__content-text">{{ item.time }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
  .schedule-background {
    background-image: url('../../assets/img/Fondo3.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #f6f2e7;
    background-position: left 50% top 100%;
  }

  .schedule-slice {
    width: 100%;
    padding: 100px 0;
  }

  .schedule-slice__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .schedule-slice__title {
    font-family: 'Adelia', sans-serif;
    font-size: 2.5rem;
    padding-bottom: 50px;
  }

  .schedule-slice__content {
    display: flex;
    flex-direction: column;
    width: 15%;
  }

  .schedule-slice__content-data {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .schedule-slice__content-text {
    font-size: 1rem;
    width: 100%;
  }

  .schedule-slice__content-img {
    width: 100%;
    height: 150px;
  }
  .schedule-slice__content-img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>