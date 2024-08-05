// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-headlessui", "@hypernym/nuxt-gsap", "@pinia/nuxt"],
  components: true,
  css: ["~/assets/main.scss"],
  headlessui: {
    prefix: "Headless",
  },
  devServer: {
    port: 9000,
  },
});
