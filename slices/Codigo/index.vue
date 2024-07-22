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
    <PrismicRichText :field="slice.primary.title" />
    {{ slice.primary.subtitle }}
    <template v-for="item in slice.primary.groupellos">
      {{ item.subtitle }}
      {{ item.label1 }}
      {{ item.label2 }}
      {{ item.label3 }}
      {{ item.label4 }}
      {{ item.label5 }}
      {{ item.label6 }}
    </template>
    <PrismicImage :field="slice.primary.image" />
    <template v-for="item in slice.primary.groupellas">
      {{ item.subtitle }}
      {{ item.label1 }}
      {{ item.label2 }}
      {{ item.label3 }}
      {{ item.label4 }}
      {{ item.label5 }}
      {{ item.label6 }}
    </template>
  </section>
</template>
