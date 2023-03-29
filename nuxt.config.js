export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Augustin Ribreau',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Augustin Ribreau. Passionate full-stack developer in 5th year of engineering school dedicated to expanding knowledge and skills in tech. Ambitious to work on innovative projects and make valuable contributions to a stimulating environment.'
      },
      {name: 'format-detection', content: 'telephone=no'},
      {name: "author", content: "Augustin Ribreau"},
      {
        name: "keywords",
        content: "Augustin, Ribreau, Augustin Ribreau, AugustinRibreau, augustinRibreau, Augustinribreau, augustinribreau, augustin, ribreau, developpeur, full stack, fullstack, developpeur fullstack, Troupe Les Herbiers, Scoutmaster"
      },
      {property: "og:title", content: "Augustin Ribreau"},
      {property: "og:type", content: "website"},
      {property: "og:url", content: "https://augustinribreau.com/"},
      {property: "og:site_name", content: "Augustin Ribreau"},
      {
        property: "og:description",
        content: "Augustin Ribreau. Passionate full-stack developer in 5th year of engineering school dedicated to expanding knowledge and skills in tech. Ambitious to work on innovative projects and make valuable contributions to a stimulating environment."
      },
      {property: "og:locale", content: "fr_FR"},
      {property: "twitter:url", content: "https://augustinribreau.com/"},
      {property: "twitter:title", content: "Augustin Ribreau"},
      {
        property: "twitter:description",
        content: "Augustin Ribreau. Passionate full-stack developer in 5th year of engineering school dedicated to expanding knowledge and skills in tech. Ambitious to work on innovative projects and make valuable contributions to a stimulating environment."
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
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
