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
          name: 'twitter:image', content: '/images/banner.jpg'
        },
        /* Open Graph */
        {
          property: 'og:type', content: 'article'
        },
        {
          property: 'og:url', content: 'https://dark-zer0.github.io/Showdown/'
        },
        {
          property: 'og:image', content: '/images/banner.jpg'
        },
        /* Capabilities  */
        {
          name: 'background-color', content: '#F7F7F9'
        },
        {
          name: 'theme-color', content: '#F7F7F9'
        },
        {
          name: 'mobile-web-app-capable', content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-capable', content: 'yes'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style', content: 'default'
        }
      ],
      link: [
        /* Icons */
        {
          rel: 'shortcut icon', href: '/favicon.ico'
        },
        {
          rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16'
        },
        {
          rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32'
        },
        {
          rel: 'apple-touch-icon', href: '/apple-touch-icon.png'
        },
        {
          rel: 'manifest', href: '/site.webmanifest'
        }
      ]
    }
  },
  build: {
    transpile: ['vuetify']
  },
  compatibilityDate: '2023-04-03',
  components: [
    {
      path: '~/components',
      prefix: 'V'
    }
  ],
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/styles.scss'
  ],
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins!.push(vuetify({
          autoImport: true,
          styles: {
            configFile: 'assets/scss/_settings.scss'
          }
        }));
      });
    },
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxt/eslint',
    '@vueuse/nuxt'
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },
  site: {
    url: 'https://dark-zer0.github.io/'
  },
  sourcemap: false,
  ssr: true
});
