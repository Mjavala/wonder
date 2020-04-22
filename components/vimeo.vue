<template>
  <div v-editable="blok" class="vimeo">
    <div id="iframe-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data () {
    return {
      urlBuilder: 'https://vimeo.com/api/oembed.json?url=',
      video: this.blok.video,
      videoData: [],
      iframe: ''
    }
  },
  watch: {
    videoData () {
      document.getElementById('iframe-wrapper').innerHTML = this.iframe
    }
  },
  mounted () {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething () {
      const url = this.urlBuilder + this.video
      this.videoData = await this.$axios.$get(url)
      this.iframe = this.videoData.html
    }
  }
}
</script>
