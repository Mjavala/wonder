<template>
  <div id="about-wrap">
    <wonder />
    <section>
      <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
    </section>
  </div>
</template>

<script>
import wonder from '~/components/wonderStatic'
export default {
  components: {
    wonder
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
      story: { content: {} }
    }
  },
  transition: 'tweakOpacity',
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
    window.addEventListener('load', () => {
      const vh = window.innerHeight
      const root = document.getElementById('wrapper')
      root.style.height = `${vh}px`
    })
  }
}
</script>

<style scoped>
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
