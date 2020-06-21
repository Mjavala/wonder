module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Andrew Wonder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Andrew Wonder portfolio ' },
      { hid: 'keywords', name: 'keywords', content: 'Andrew, Wonder, Whipped Documentary, Andrew chevy, Andrew Chevrolet' }
    ],
    link: [
      { rel: 'preload', as: 'font', type: 'font/ttf', href: '/fonts/trash-regular.ttf', crossorigin: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  /*
  ** Plugins to load before mounting the App
  */

  plugins: [
    '~/plugins/components.js',
    '~/plugins/video.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: 'AG3834dBpJPEdbRyeyQjMQtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
    }
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    middleware: 'delay'
  }
}
