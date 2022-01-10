// import colors from 'vuetify/es5/util/colors'
// import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'
export default {
  serverMiddleware: ['@/server/index.js'],
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ruksms-backend',
    title: 'ruksms-backend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      // Fonts and Icons
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.13.0/css/all.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
    ],
    script: [
      { src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js' },
      { src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/i18n-config.js' }, '~/plugins/TiptapVuetify'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify', '@nuxtjs/auth'],
  transpile: ['vue-upload-drop-images'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-socket-io',
    'vue-toastification/nuxt',
    '@nuxtjs/axios',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity,
        },
      },
    ],
    [
      'nuxt-i18n',
      {
        // Options
        // to make it seo friendly remove below line and add baseUrl option to production domain
        seo: false,
        // baseUrl: 'https://my-nuxt-app.com',
        lazy: true,
        locales: languages,
        defaultLocale: 'th',
        vueI18n: {
          fallbackLocale: 'th',
          silentTranslationWarn: true,
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true,
        },
        langDir: 'static/lang/',
      },
    ],
  ],
  io: {
    // module options
    sockets: [
      {
        name: 'main',
        url: 'http://localhost:4000',
      },
    ],
  },

  axios: {
    baseURL: 'http://localhost:3000/services',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            method: 'post',
            url: 'user/sign-in',
            propertyName: 'data',
          },
          user: {
            method: 'get',
            url: 'user/me ',
            propertyName: 'data',
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
