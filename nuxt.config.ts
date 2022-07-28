import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Enchante',
      // titleTemplate: '%s - b',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Enchante',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // css
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    '~/assets/sass/vendor.scss',
    '~/assets/sass/taiwind.scss',
    '~/assets/sass/app.scss',
    '~/assets/sass/animation.scss',
  ],

  // static: {
  //   prefix: false
  // },

  // plugins

  // build
  build: {
    transpile: ['@headlessui/vue', 'vuetify'],
  },

  // build modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    // '@nuxtjs/composition-api/module',
    '@nuxtjs/svg',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
    '@nuxtjs/dotenv',
  ],

  // experimental features
  experimental: {
    reactivityTransform: true,
  },



  // auto import components
  components: true,

  // vite plugins
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
    ,  
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'id', 'ja'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
})
