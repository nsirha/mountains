export default {
  target: 'static',

  ssr: false,

  generate: {
    fallback: true
  },

  head: {
    title: 'Mountains',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/css/main.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  build: {
  }
}
