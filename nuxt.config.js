export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */

  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: 'Kama-przydworz.pl - wynajem domków w Przydworzu - 532 623 229',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        // hid: 'description',
        name: 'description',
        content:
          'Domki Przydwórz(wynajem)|Wynajem domków letniskowych w Przydworzu|+48532623229'
      },

      {
        // hid: 'Keywords',
        name: 'Keywords',
        content:
          'Kama-przydworz.pl,kama-przydwórz,kama-przydwórz.pl,+48 532 623 229,+48532623229,532623229,kama,domki, domy,wynajem domków,wynajem domki,wynajem domków w Przydworzu,domki Przydwórz,domki Przydworz,Przydworz domki,Przydwórz,Przydworz,wieczno,kwatery,wynajem,odpoczynek,wakacje,pokoje,pokoj,pokój,wypoczynek,tanie domki,tani wypoczynek,tani,Wieczno,jezioro Wieczno,domki do wynajęcia,przydwórz domki,przydworz domki do wynajecia,domki w przydworzu,jezioro wieczno noclegi,noclegi,domki letniskowe przydwórz,domki przydwórz wynajem'
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

    '@nuxtjs/robots',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faAngleDoubleUp']
          }
        ]
      }
    ],
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/svg'
  ],
  // optimizedImages: {
  //   optimizeImages: true
  // },
  optimizedImages: {
    inlineImageLimit: -1,
    imagesName: ({ isDev }) =>
      isDev
        ? '[path][name][hash:optimized].[ext]'
        : 'img/[contenthash:7].[ext]',
    responsiveImagesName: ({ isDev }) =>
      isDev
        ? '[path][name]--[width][hash:optimized].[ext]'
        : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 80
    }
  },
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
