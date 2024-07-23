<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.UbicationSlice>([
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
    class="ubication-background"
  >
    <div class="ubication-slice">
      <div class="ubication-slice__data ubication-slice__title" >
        <h2>
          <PrismicRichText :field="slice.primary.tittle" />
        </h2>
      </div>
      <div class="ubication-slice__data ubication-slice__subtitle" >
        {{ slice.primary.subtittle }}
      </div>
      <div class="ubication-slice__data ubication-slice__date" >
        <template v-for="item in slice.primary.groupubication">
          <div class="ubication-slice__date-text">
            {{ item.label }}
          </div>
        </template>
      </div>
      <div class="ubication-slice__data ubication-slice__img" >
        <PrismicImage :field="slice.primary.image_decoration" />
      </div>
      <div class="ubication-slice__map">
        <LMap
        style="height: 350px"
        :zoom="14"
        :center="[21.32337393643182, -89.44031750401858]"
        :use-global-leaflet="false"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
            />
        
          <LMarker :lat-lng="[21.32337393643182, -89.44031750401858]">
            <LPopup> San Benito </LPopup>
          </LMarker>
        </LMap>
      </div>
      <!-- <div class="ubication-slice__data ubication-slice__btn" >
        <PrismicLink :field="slice.primary.linkbutton" class="ubication-slice__btn-text">
          {{ slice.primary.button }}
        </PrismicLink>
      </div> -->
    </div>
  </section>
</template>

<style>
  .ubication-background {
    background-image: url('../../assets/img/Fondo2.png');
    background-color: #F7F2E7;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 50% top 100%;
  }

  .ubication-slice{
    padding: 100px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ubication-slice__data {
    padding: 10px 0;
  }

  .ubication-slice__title h2 {
    font-size: 2.5rem;
    font-family: 'Gistesy', sans-serif;
    color: #333333;
  }
  .ubication-slice__map {
    margin: 30px 0;
    width: 70%;
  }

  .ubication-slice__subtitle {
    font-size: 1.5rem;
    font-family: 'Belleza', sans-serif;
    text-transform: uppercase;
    color: #333333;
  }

  .ubication-slice__date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .ubication-slice__date-text {
    font-size: 1.2rem;
    font-family: 'Belleza', sans-serif;
    color: #333333;
    margin: 5px 0;
  }

  .ubication-slice__img {
    width: 70%;
  }

  .ubication-slice__btn {
    background-color: #dccdb9;
    padding: 10px 5px;
    border-radius: 10px;
  }
  .ubication-slice__btn:hover {
    cursor: pointer;
    background-color: #beb1a2;
  }

  .ubication-slice__btn-text {
    font-size: 1.2rem;
    font-family: 'Belleza', sans-serif;
    text-decoration: none;
    color: #fff;
  }

  @media (min-width: 640px) {
    .ubication-slice__title h2 {
      font-size: 3rem;
    }
    .ubication-slice__subtitle {
      font-size: 2rem;
    }
    .ubication-slice__map {
      width: 60%;
    }
  }
  @media (min-width: 920px) {
    .ubication-slice__img {
      width: 15%;
    }
  }
</style>