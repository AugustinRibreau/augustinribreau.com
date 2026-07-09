export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Augustin Ribreau · Ingénieur Full Stack 360° · freelance',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: "Ingénieur Full Stack 360° indépendant : je conçois, code et opère des SaaS de bout en bout (Nuxt, Supabase, Stripe). Créateur de LingoPay, KinePilot et ScoutLib. Missions freelance via Chagner."
      },
      {name: 'format-detection', content: 'telephone=no'},
      {name: "author", content: "Augustin Ribreau"},
      {
        name: "keywords",
        content: "Augustin Ribreau, ingénieur full stack 360, développeur full stack, freelance, Nuxt, Supabase, Stripe, SaaS, LingoPay, KinePilot, Metibat, ScoutLib, Chronify, Chagner"
      },
      {property: "og:title", content: "Augustin Ribreau · Ingénieur Full Stack 360°"},
      {property: "og:type", content: "website"},
      {property: "og:url", content: "https://augustinribreau.com/"},
      {property: "og:site_name", content: "Augustin Ribreau"},
      {
        property: "og:description",
        content: "Je conçois, code et opère des SaaS de bout en bout. Des produits volontairement petits, honnêtement utiles, entretenus dans la durée."
      },
      {property: "og:image", content: "https://augustinribreau.com/augustin-portrait.jpg"},
      {property: "og:image:alt", content: "Portrait d'Augustin Ribreau"},
      {property: "og:locale", content: "fr_FR"},
      {name: "twitter:card", content: "summary"},
      {name: "twitter:title", content: "Augustin Ribreau · Ingénieur Full Stack 360°"},
      {
        name: "twitter:description",
        content: "Je conçois, code et opère des SaaS de bout en bout. Des produits volontairement petits, honnêtement utiles, entretenus dans la durée."
      },
      {name: "twitter:image", content: "https://augustinribreau.com/augustin-portrait.jpg"}
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Augustin Ribreau',
          jobTitle: 'Ingénieur Full Stack 360°',
          url: 'https://augustinribreau.com/',
          image: 'https://augustinribreau.com/augustin-portrait.jpg',
          email: 'mailto:contact@augustinribreau.com',
          worksFor: {'@type': 'Organization', name: 'Chagner'},
          knowsAbout: ['Nuxt', 'Vue.js', 'Supabase', 'PostgreSQL', 'Stripe', 'Cloudflare', 'SaaS', 'Odoo', 'PrestaShop'],
          sameAs: [
            'https://github.com/augustinRibreau',
            'https://gitlab.com/AugustinRibreau',
            'https://www.linkedin.com/in/augustinribreau/',
            'https://www.instagram.com/augustin.rbr/'
          ]
        }
      }
    ],
    link: [
      {rel: 'canonical', href: 'https://augustinribreau.com/'},
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
