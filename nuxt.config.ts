// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  rootDir: ".",
  runtimeConfig: {},
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["renderOutput"].includes(tag),
    },
  },
});