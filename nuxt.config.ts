// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@hypernym/nuxt-gsap",
    "@pinia/nuxt",
    "nuxt-mongoose",
    "nuxt-headlessui",
  ],
  components: true,
  css: ["~/assets/main.scss"],
  headlessui: {
    prefix: "Headless",
  },
  mongoose: {
    uri: import.meta.env.MONGODB_URI,
    options: {},
    modelsDir: "models",
    devtools: true,
  },
  devServer: {
    port: 9000,
  },
});
