// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles.css", "@mdi/font/css/materialdesignicons.min.css"],
  nitro: { preset: "netlify-edge" },

  modules: [
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-gsap",
    "@nuxt/image",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-swiper",
  ],

  gsap: {
    composables: true,
    provide: true,
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    },
  },
  site: {
    url: "https://barbincps.fr",
    name: "Barbin CPS",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "BARBIN Chauffage Plomberie Sanitaire - %s",
      htmlAttrs: {
        lang: "fr",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Experts en chauffage, plomberie et sanitaire dans l'Oise et le Val-d'Oise. Des solutions sur mesure pour l'installation, la réparation et l'entretien. Contactez-nous dès maintenant pour des solutions de chauffage et plomberie adaptées à vos besoins.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Chauffage, Plomberie, Installation chauffage, Dépannage plomberie, Entretien chaudière, Oise, Expert chauffagiste, Solutions plomberie, Dépannage d'urgence, Rénovation chauffage, Services plombier",
        },
        { hid: "language", name: "language", content: "French" },
        { hid: "revisit-after", name: "revisit-after", content: "1 days" },
        { name: "format-detection", content: "telephone=no" },
        // Open Graph / Facebook
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://barbincps.fr",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "BARBIN Chauffage Plomberie Sanitaire",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Experts en chauffage, plomberie et sanitaire dans l'Oise et le Val-d'Oise. Des solutions sur mesure pour l'installation, la réparation et l'entretien. Contactez-nous dès maintenant pour des solutions de chauffage et plomberie adaptées à vos besoins.",
        },
        // Twitter
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "https://barbincps.fr.",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "BARBIN Chauffage Plomberie Sanitaire",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content:
            "Experts en chauffage, plomberie et sanitaire dans l'Oise et le Val-d'Oise. Des solutions sur mesure pour l'installation, la réparation et l'entretien. Contactez-nous dès maintenant pour des solutions de chauffage et plomberie adaptées à vos besoins.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "~/public/favicon.ico" },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  plugins: [],
});
