// import path from 'path'
// import fs from 'fs'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: process.env.HTTP_PORT || 3000,
    /* host: '0.0.0.0',
    timing: false,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
    }, */
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Simple Vote System',
    htmlAttrs: {
      lang: 'zh-tw',
    },
    link:[
      {rel: 'stylesheet', type: 'text/css', href: '/css/purelife.css?v=20211231'},
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/toast.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
  ],

  router: {
    // middleware: 'auth'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
    'cookie-universal-nuxt',
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },

  i18n: {
    locales: [
      { code: 'zh-tw', file: 'zh-tw.js' },
      { code: 'en', file: 'en.js' },
    ],
    defaultLocale: 'zh-tw',
    lazy: true,
    langDir: '~/lang/',
    skipSettingLocaleOnNavigate: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/api': {
      target: process.env.API_PATH || 'http://api.homework.com/api',
      pathRewrite: { '^/api': '' }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
}
