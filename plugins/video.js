import Vue from 'vue'
// If used in nuxt.js/ssr, you should keep it only in browser build environment
if (process.browser) {
  const VueVideoPlayer = require('vue-video-player/dist/ssr')
  Vue.use(VueVideoPlayer)
}
