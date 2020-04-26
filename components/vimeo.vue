<template>
  <div v-editable="blok" class="vimeo">
    <div id="iframe-wrapper"></div>
    <div id="title"></div>
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
      iframe: '',
      title: this.blok.title
    }
  },
  watch: {
    videoData () {
      console.log(this.title)
      document.getElementById('iframe-wrapper').innerHTML += this.iframe
    }
  },
  mounted () {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething () {
      const url = this.urlBuilder + this.video + '&controls=false&autoplay=true'
      this.videoData = await this.$axios.$get(url)
      // '<img src=\'path/img1.jpg\'><img src=\'path/img2.jpg\'>'
      //
      const thumbnail = this.videoData.thumbnail_url_with_play_button
      this.iframe = `<img src='${thumbnail}'>`
      document.getElementById('title').innerHTML += this.title
    }
  }
}
</script>

<style scoped>

  #iframe-wrapper{
    display: block;
    width: 100%;
  }
</style>
