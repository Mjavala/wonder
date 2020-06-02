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
      fullyLoaded: false
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
      window.scroll(-1, 1)
    }, 250)
    setTimeout(() => {
      this.fullyLoaded = true
    }, 500)
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
