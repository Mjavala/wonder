<template>
  <div id="home-wrap">
    <wonderStatic />
    <section>
      <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
    </section>
  </div>
</template>

<script>
import wonderStatic from '~/components/wonderStatic'

export default {
  components: {
    wonderStatic
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
  transition: 'tweakOpacity',
  data () {
    return {
      story: { content: {} }
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
    window.addEventListener('load', () => {
      /* eslint prefer-const: "warn" */
      const vh = window.innerHeight * 0.01
      this.viewport = vh
    })
  }
}
</script>

<style>
  .tweakOpacity-enter-active, .tweakOpacity-leave-active {
    transition: opacity .55s ease-in-out;
  }
  .tweakOpacity-enter, .tweakOpacity-leave-active {
    opacity: 0;
  }
</style>
