export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */

  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: 'Kama-przydworz.pl - wynajem domków w Przydworzu - 787 784 556',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        // hid: 'description',
        name: 'description',
        content:
          'Domki Przydwórz(wynajem)|Domki letniskowe w Przydworzu|+48787784556|'
      },

      {
        // hid: 'Keywords',
        name: 'Keywords',
        content:
          'Kama-przydworz.pl,kama-przydwórz,kama-przydwórz.pl,+48 787 784 556,+48787784556,787784556,kama,domki, domy,wynajem domków,wynajem domki,wynajem domków w Przydworzu,domki Przydwórz,domki Przydworz,Przydwórz,Przydworz,wieczno,kwatery,wynajem,odpoczynek,wakacje,pokoje,pokoj,pokój,wypoczynek'
      },
      {
        // hid: 'robots',
        name: 'robots',
        content: 'index, follow'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#333' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    '@nuxtjs/svg',
    '@nuxtjs/robots'
  ],
  robots: {
    /* module options */
    UserAgent: '*',
    Allow: '/',
    Disallow: '/Regulamin.odt',
    Sitemap: 'https://kama-przydworz.pl/sitemap.xml'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.txt$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      })
    },
    extractCSS: true
  }
}
