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
            <p class="lodging-slice__text-hotel" >Villa Esmeralda</p>
            <p class="lodging-slice__text-hotel" >iik ka ha</p>
            <p class="lodging-slice__text-hotel" >Villas Wayak</p>
            <p class="lodging-slice__text-hotel" >Casa Aguita de Coco</p>
          </div>
          <div class="lodging-slice__map">
            <LMap
              style="height: 350px"
              :zoom="16"
              :center="[21.325350865282058, -89.42300991971206]"
              :use-global-leaflet="false"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
              />
              <LMarker :lat-lng="[21.32568529307778, -89.42329133120278]">
                <LPopup> Villa Esmeralda </LPopup>
              </LMarker>
              <LMarker :lat-lng="[21.32568279885437, -89.42328160607468]">
                <LPopup> iik ka ha </LPopup>
              </LMarker>
              <LMarker :lat-lng="[21.325441710657806, -89.42122016982195]">
                <LPopup> Villas Wayak </LPopup>
              </LMarker>
              <LMarker :lat-lng="[21.32521144776838, -89.4232785865089]">
                <LPopup> Casa Aguita de Coco </LPopup>
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
  .lodging-slice__text-hotel{
    font-size: 1rem;
    font-family: 'Belleza', sans-serif;
    color: rgb(107, 107, 107);
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
    .odging-slice__text-hotel{
    font-size: 1.5rem;
  }
  }
</style>