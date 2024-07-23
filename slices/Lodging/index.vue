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
          <div class="lodging-slice__counter" >
            <p class="lodging-slice__text" >{{ slice.primary.count }}</p>
            <p class="lodging-slice__text" >{{ slice.primary.countvalue }}</p>
          </div>
          <div class="lodging-slice__map">
            <LMap
              style="height: 350px"
              :zoom="15"
              :center="[21.324691696008742, -89.42391814854852]"
              :use-global-leaflet="false"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base"
                name="OpenStreetMap"
              />
              <LMarker :lat-lng="[21.324691696008742, -89.42391814854852]">
                <LPopup> Tecno Hotel </LPopup>
              </LMarker>
            </LMap>
          </div>
          <div class="ubication-slice__data ubication-slice__btn" >
            <PrismicLink :field="slice.primary.linkbutton" class="ubication-slice__btn-text">{{ slice.primary.labelbutton }}</PrismicLink>
          </div>
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
    width: 80%;
    text-align: center;
    margin-bottom: 30px;
  }
  .lodging-slice__title h2{
    font-size: 2rem;
    font-weight: 200;
    font-family: 'Gistesy', sans-serif;
    text-align: center;
  }

  .lodging-slice__availability {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 70%;
    padding-bottom: 40px;
  }

  .lodging-slice__direction {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .lodging-slice__map {
    width: 100%;
    padding-bottom: 20px;
  }

  .lodging-slice__counter {
    padding: 20px 0;
    width: 100%;
  }

  .lodging-slice__text {
    font-size: 1rem;
    font-family: 'Belleza', sans-serif;
  }

  @media (min-width: 740px) {
    .lodging-slice__title h2{
      font-size: 2rem;
    }
    .lodging-slice__text {
      font-size: 1rem;
    }
    .lodging-slice__availability {
      width: 70%;
      flex-direction: row;
    }
    .lodging-slice__direction {
      width: 50%;
    }
    .lodging-slice__counter {
      width: 80%;
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