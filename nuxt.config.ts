import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic",
    '@nuxtjs/leaflet'
  ],
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/global.css'
  ],
  prismic: {
    endpoint: apiEndpoint || repositoryName,
    linkResolver: '@/plugins/link-resolver.js',
    htmlSerializer: '@/plugins/html-serializer.js',
  },

  compatibilityDate: "2024-07-11"
})