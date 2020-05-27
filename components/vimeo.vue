<template>
  <div v-editable="blok" class="vimeo">
    <div id="video-anchor">
      <div v-if="scrolled" id="video-wrap">
        <!--
      <div
        id="play"
        class="title"
        @click="play"
      >
        {{ this.title }}
      </div>
      -->
        <no-ssr>
          <vimeo-player
            ref="player"
            class="vimeo"
            :video-id="videoID"
            :options="{responsive: true}"
            :controls="control"
            @ready="onReady"
          />
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data () {
    return {
      video: this.blok.video,
      title: this.blok.title,
      videoID: this.blok.video,
      control: true,
      playerReady: false,
      playing: false,
      scrolled: false
    }
  },
  mounted () {
    // https://stackoverflow.com/questions/47327119/how-to-listen-to-scroll-events-in-vue-nuxtjs
    window.addEventListener('load', () => {
      this.scrolled = true
    })
    setTimeout(() => {
      this.scrolled = true
    }, 1500)
    this.scrolled = true
  },
  methods: {
    onReady () {
      this.playerReady = true
    }
    /*
    play () {
      this.$refs.player.play()
      this.showPlayButton()
    },
    pause () {
      this.$refs.player.pause()
      this.playing = false
    }
    */
  }
}
</script>

<style scoped>
  .vimeo{
    display: block;
    width: 100%;
    height: 100%;
  }
  #video-wrap{
    position: relative;
  }
  .title{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 32px;
  }
  #play{
    cursor: pointer;
    display: block;
  }
  #video-anchor{
    overflow: auto;
    background-color: #ff0000;
  }
</style>