<template>
  <div id="about-wrap">
    <Nav v-if="clicked" id="navigation-about" />
    <svg
      id="hamburgers-about"
      xmlns="http://www.w3.org/2000/svg"
      width="36.167"
      height="24.922"
      viewBox="0 0 36.167 24.922"
      @click="clicked = true"
    ><g transform="translate(-4037.605 -701)"><rect width="36.167" height="5.167" transform="translate(4037.605 701)" fill="red" /><rect width="36.167" height="5.167" transform="translate(4037.605 710.877)" fill="red" /><rect width="36.167" height="5.167" transform="translate(4037.605 720.755)" fill="red" /></g></svg>
    <section>
      <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
    </section>
  </div>
</template>

<script>
import Nav from '~/components/sideNavContact'
export default {
  components: {
    Nav
  },
  asyncData (context) {
    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories/about', {
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
      clicked: false
    }
  },
  watch: {
    clicked (newVal) {
      if (newVal === true) {
        document.addEventListener('click', (e) => {
          const target = e.target.getAttribute('id')
          const targetClass = e.target.getAttribute('class')
          const t = e.target.nodeName
          if (target === 'text-wrap-inner' && targetClass === null) {
            this.clicked = false
          }
          if (target === null && targetClass === null && t !== 'rect') {
            this.clicked = false
          }
          if (target === 'inner-wrap' && targetClass === null) {
            this.clicked = false
          }
          if (target === 'text-wrap' && targetClass === null) {
            this.clicked = false
          }
          if (target === 'page-wrap' && targetClass === null) {
            this.clicked = false
          }
          if (target === null && targetClass === 'environment') {
            this.clicked = false
          }
          if (targetClass === 'side-nav-item blackText') {
            setTimeout(() => { this.clicked = false }, 1000)
          }
          if (target === 'film2') {
            setTimeout(() => {
              this.clicked = false
            }, 1000)
          }
        })
        document.addEventListener('touchstart', (e) => {
          const target = e.target.getAttribute('id')
          const targetClass = e.target.getAttribute('class')
          console.log(target)
          console.log(targetClass)
          if (target === 'text-wrap-inner' && targetClass === null) {
            this.clicked = false
          }
          if (target === null && targetClass === null) {
            this.clicked = false
          }
          if (target === 'inner-wrap' && targetClass === null) {
            this.clicked = false
          }
          if (target === 'text-wrap' && targetClass === null) {
            this.clicked = false
          }
          if (target === 'page-wrap' && targetClass === null) {
            this.clicked = false
          }
          if (target === null && targetClass === 'environment') {
            this.clicked = false
          }
          if (targetClass === 'side-nav-item blackText') {
            setTimeout(() => { this.clicked = false }, 1000)
          }
          if (target === 'film2') {
            setTimeout(() => {
              this.clicked = false
            }, 1000)
          }
        })
      }
    }
  },
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
    window.addEventListener('orientationchange', function () {
      const originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display')
      document.body.style.display = 'none'
      setTimeout(function () {
        document.body.style.display = originalBodyStyle
      }, 10)
    })
  },
  head () {
    return {
      title: 'About'
    }
  },
  transition: 'tweakOpacity'
}
</script>

<style scoped>
  #hamburgers-about {
    padding: 1em;
    cursor: pointer;
    padding-bottom: 0;
  }
  .tweakOpacity-enter-active, .tweakOpacity-leave-active {
    transition: opacity .45s ease-in-out;
  }
  .tweakOpacity-enter, .tweakOpacity-leave-active {
    opacity: 0;
  }
  @media all and (-ms-high-contrast:none)
  {
    *::-ms-backdrop, #home-wrap {
      overflow: hidden
    } /* IE11 */
  }
</style>
