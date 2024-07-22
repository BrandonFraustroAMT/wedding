<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.LodgingSlice>([
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
    class="lodging-slice"
  >
    <div class="lodging-slice__container">
      <div class="lodging-slice__title" >
        <h2>
          <PrismicRichText :field="slice.primary.title" />
        </h2>
      </div>
      <div class="ubication-slice__img" >
        <PrismicImage :field="slice.primary.imagedecoration" />
      </div>
      <div class="lodging-slice__availability" >
        <div class="lodging-slice__direction" >
          <p class="lodging-slice__text" >{{ slice.primary.direction }}</p>
          <p class="lodging-slice__text" >{{ slice.primary.directionvalue }}</p>
          <!-- <div class="ubication-slice__btn">
            <PrismicLink :field="slice.primary.linkbutton" class="ubication-slice__btn-text">{{ slice.primary.labelbutton }}</PrismicLink>
          </div> -->
          <div class="lodging-slice__map">
            <LMap
              style="height: 350px"
              :zoom="6"
              :center="[47.21322, -1.559482]"
              :use-global-leaflet="false"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base"
                name="OpenStreetMap"
              />
              <LMarker :lat-lng="[47.21322, -1.559482]">
                <LPopup> Wedding </LPopup>
              </LMarker>
            </LMap>
          </div>
        </div>
        <div class="lodging-slice__counter" >
          <p class="lodging-slice__text" >{{ slice.primary.count }}</p>
          <p class="lodging-slice__text" >{{ slice.primary.countvalue }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .lodging-slice {
    background-image: url('../../assets/img/Fondo3.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: left 50% top 100%;
  }

  .lodging-slice__container {
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .lodging-slice__title {
    font-size: 1rem;
    font-family: 'Belleza', sans-serif;
  }

  .lodging-slice__availability {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    width: 60%;
    padding-bottom: 40px;
  }

  .lodging-slice__direction {
    width: 50%;
    padding-right: 40px;
  }
  .lodging-slice__map {
    width: 100%;
  }

  .lodging-slice__counter {
    width: 30%;
    padding-left: 40px;
  }

  .lodging-slice__text {
    font-size: 0.7rem;
    font-family: 'Belleza', sans-serif;
  }

  @media (min-width: 740px) {
    .lodging-slice__title {
      font-size: 2rem;
    }
    .lodging-slice__text {
      font-size: 1rem;
    }
    .lodging-slice__availability {
      width: 70%;
    }
  }
  @media (min-width: 980px) {
    .lodging-slice__title {
      font-size: 2.8rem;
    }
    .lodging-slice__text {
      font-size: 1.5rem;
    }
  }
</style>