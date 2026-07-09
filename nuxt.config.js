export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Augustin Ribreau — développeur full-stack',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: "Augustin Ribreau, développeur full-stack indépendant. Je construis des produits de bout en bout : LingoPay (collecte de dons), KinePilot (remplacements kinés), Metibat, ScoutLib, et des missions sur mesure via Chagner."
      },
      {name: 'format-detection', content: 'telephone=no'},
      {name: "author", content: "Augustin Ribreau"},
      {
        name: "keywords",
        content: "Augustin Ribreau, développeur full stack, freelance, Nuxt, Supabase, LingoPay, KinePilot, Metibat, ScoutLib, Chronify, Chagner"
      },
      {property: "og:title", content: "Augustin Ribreau — développeur full-stack"},
      {property: "og:type", content: "website"},
      {property: "og:url", content: "https://augustinribreau.com/"},
      {property: "og:site_name", content: "Augustin Ribreau"},
      {
        property: "og:description",
        content: "Des produits volontairement petits, honnêtement utiles, entretenus dans la durée."
      },
      {property: "og:image", content: "https://augustinribreau.com/augustin-portrait.jpg"},
      {property: "og:locale", content: "fr_FR"},
      {property: "twitter:url", content: "https://augustinribreau.com/"},
      {property: "twitter:title", content: "Augustin Ribreau — développeur full-stack"},
      {
        property: "twitter:description",
        content: "Des produits volontairement petits, honnêtement utiles, entretenus dans la durée."
      }
    ],
    link: [
      {
        rel: 'icon',
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23fdfcf9'/%3E%3Cellipse cx='32' cy='32' rx='22' ry='15' fill='none' stroke='%23d0321d' stroke-width='5' stroke-linecap='round' stroke-dasharray='100 18' transform='rotate(-8 32 32)'/%3E%3Ctext x='32' y='39' text-anchor='middle' font-family='Georgia,serif' font-size='20' font-weight='bold' fill='%2322211e'%3EAR%3C/text%3E%3C/svg%3E"
      },
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=Caveat:wght@500;600&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 8080
  }
}
