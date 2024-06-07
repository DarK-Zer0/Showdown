import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      meta: [
        {
          name: 'site_name', content: 'Showdown Guide'
        },
        /* Twitter */
        {
          name: 'twitter:card', content: 'summary'
        },
        {
          name: 'twitter:image', content: 'https://dark-zer0.github.io/Showdown/images/banner.jpg'
        },
        /* Open Graph */
        {
          property: 'og:type', content: 'article'
        },
        {
          property: 'og:url', content: 'https://dark-zer0.github.io/Showdown/'
        },
        {
          property: 'og:image', content: 'https://dark-zer0.github.io/Showdown/images/banner.jpg'
        },
        /* Capabilities  */
        {
          name: 'background-color', content: '#F7F7F9'
        },
        {
          name: 'apple-mobile-web-app-capable', content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'
        }
      ]
    }
  },
  build: {
    transpile: ['vuetify']
  },
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins!.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
    '@nuxt/image',
    '@nuxt/eslint'
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [100, 300, 400, 500, 700, 900]
    }
  },
  image: {
    quality: 80,
    provider: 'ipxStatic'
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    },
    static: true
  },
  site: {
    url: 'https://dark-zer0.github.io/'
  }
});
