<template>
  <div id="home-wrap">
    <loader v-if="!fullyLoaded" />
    <div v-show="fullyLoaded">
      <wonderStatic />
      <section>
        <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
      </section>
    </div>
  </div>
</template>

<script>
import wonderStatic from '~/components/wonderStatic'
import loader from '~/components/loader'

export default {
  components: {
    wonderStatic,
    loader
  },
  watch: {
    clickGifTrigger (target) {
      const gifs = document.getElementsByClassName('gif')
      const titles = document.getElementsByClassName('video-title')
      for (let i = 0; i < gifs.length; i++) {
        if (target !== gifs[i]) {
          gifs[i].classList.remove('noShow')
          titles[i].classList.remove('noShow')
        }
      }
    },
    clickTitleTrigger (target) {
      const gifs = document.getElementsByClassName('gif')
      const titles = document.getElementsByClassName('video-title')
      for (let i = 0; i < gifs.length; i++) {
        if (target !== titles[i]) {
          gifs[i].classList.remove('noShow')
          titles[i].classList.remove('noShow')
        }
      }
    }
  },
  asyncData (context) {
    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        //  console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        //  console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  data () {
    return {
      story: { content: {} },
      fullyLoaded: false,
      clickGifTrigger: null,
      clickTitleTrigger: null,
      count: 0
    }
  },
  // need to fix this shit
  mounted () {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
    setTimeout(() => {
      this.fullyLoaded = true
    }, 250)
    window.addEventListener('orientationchange', function () {
      const originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display')
      document.body.style.display = 'none'
      setTimeout(function () {
        document.body.style.display = originalBodyStyle
      }, 10)
    })
    document.addEventListener('scroll', () => {
      const titles = document.getElementsByClassName('video-title')
      const gifs = document.getElementsByClassName('gif')
      //  const anchors = document.getElementsByClassName('video-anchor')
      if (this.count === 0) {
        for (let i = 0; i < gifs.length; i++) {
          gifs[i].addEventListener('mouseover', () => {
            titles[i].classList.remove('noShow')
            titles[i].classList.add('red')
            gifs[i].play()
          })
          gifs[i].addEventListener('mouseleave', (e) => {
            const targetClass = e.relatedTarget.getAttribute('class')
            if (targetClass !== 'video-title') {
              gifs[i].load()
              titles[i].classList.remove('red')
            }
          })
        }
        for (let i = 0; i < gifs.length; i++) {
          gifs[i].addEventListener('click', (event) => {
            if (event.target === gifs[i]) {
              event.target.classList.add('noShow')
              titles[i].classList.add('noShow')
              this.clickGifTrigger = event.target
            }
            if (event.target !== gifs[i]) {
              gifs[i].classList.remove('noShow')
              titles[i].classList.remove('noShow')
            }
          })
          titles[i].addEventListener('click', (event) => {
            if (event.target === titles[i]) {
              event.target.classList.add('noShow')
              gifs[i].classList.add('noShow')
              this.clickTitleTrigger = event.target
            }
          })
        }
        this.touchSupport()
        this.count++
      }
    })
  },
  methods: {
    touchSupport () {
      /* eslint no-var: "warn" */
      this.touchstartX = 0
      this.touchstartY = 0
      this.touchendX = 0
      this.touchendY = 0
      const pageWidth = window.innerWidth || document.body.clientWidth
      const threshold = Math.max(1, Math.floor(0.01 * (pageWidth)))

      const videos = document.getElementsByClassName('vjs-poster')
      const titles = document.getElementsByClassName('video-title')
      const plays = document.getElementsByClassName('play')

      for (let i = 0; i < videos.length; i++) {
        videos[i].addEventListener('touchstart', function (event) {
          this.touchstartX = event.changedTouches[0].screenX
          this.touchstartY = event.changedTouches[0].screenY
        }, false)
        videos[i].addEventListener('touchend', function (event) {
          this.touchendX = event.changedTouches[0].screenX
          this.touchendY = event.changedTouches[0].screenY
          const x = this.touchendX - this.touchstartX
          const y = this.touchendY - this.touchstartY
          const xy = Math.abs(x / y)
          const yx = Math.abs(y / x)
          const limit = Math.tan(45 * 1.5 / 180 * Math.PI)

          if (Math.abs(x) > threshold || Math.abs(y) > threshold) {
            if (yx <= limit) {
              if (x < 0) {
                console.log('swipe left')
              } else {
                console.log('swipe right')
              }
            }
            if (xy <= limit) {
              if (y < 0) {
                console.log('swipe up')
              } else {
                console.log('swipe down')
              }
            }
          } else {
            titles[i].classList.add('noShow')
            plays[i].classList.add('noShow')
          }
        }, false)
      }
    }
  },
  head () {
    return {
      title: 'Andrew Wonder'
    }
  },
  transition: 'tweakOpacity'
}
</script>

<style>
  .tweakOpacity-enter-active, .tweakOpacity-leave-active {
    transition: opacity .45s ease-in-out;
  }
  .red {
    color: red;
  }
  .tweakOpacity-enter, .tweakOpacity-leave-active {
    opacity: 0;
  }
  @media only screen and (min-width: 600px) {
    .video-js .vjs-control-bar {
      display: flex !important;
    }
  }
  @media all and (-ms-high-contrast:none)
  {
    *::-ms-backdrop, #home-wrap {
      overflow: hidden
    } /* IE11 */
  }
</style>
