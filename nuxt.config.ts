import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/variables.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/icon", "@nuxt/fonts", "@vueuse/motion/nuxt"],
  app: {
    head: {
      title: "Alasdair Casperd Portfolio", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
