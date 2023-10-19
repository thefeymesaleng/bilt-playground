// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["thefeymes-ui"],
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/bilt-playground/" : "/",
    buildAssetsDir: "assets",
  },

  modules: ["nuxt-quasar-ui"],
  ssr: false,
});
