<template>
  <div class="video-anchor">
    <div v-editable="blok" class="vimeo" />
    <div v-if="done">
      <div class="video-title" @click="playvid">
        {{ this.title }}
      </div>
      <div
        v-video-player:myVideoPlayer="playerOptions[0]"
        class="vids"
        :playsinline="playsinline"
      />
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

export default {
  props: ['blok'],
  data () {
    return {
      title: this.blok.title,
      video: this.blok.video,
      poster: this.blok.poster,
      loaded: false,
      count: 0,
      clickedTitle: false,
      playsinline: true,
      playerOptions: [],
      done: false
    }
  },
  computed: {
    player () {
      return this.myVideoPlayer
    }
  },
  mounted () {
    document.addEventListener('scroll', () => {
      this.done = true
    })
    const video = String(this.video)
    const image = String(this.poster)
    const playerOption = {
      fluid: true,
      fullscreen: {
        options: { navigationUI: 'show' }
      },
      language: 'en',
      sources: [{
        src: video,
        type: 'video/mp4'
      }],
      poster: image
    }
    this.playerOptions.push(playerOption)
  },
  methods: {
    playvid (e) {
      this.myVideoPlayer.play()
      e.target.classList.add('noShow')
      this.clickedTitle = true
    }
  }
}
</script>

<style>
  @font-face { /* need eot for IE 11 */
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf") format('truetype');
  font-display: swap;
  }
  .video-anchor{
    position: relative;
    overflow: auto;
    background-color: black;
  }
  .vjs-big-play-button{
    display: none !important;
  }
  .vjs-poster {
    z-index: 10000;
  }
  .ll{
    display: block;
  }
  .noShow{
    opacity: 0;
  }
  .video-title{
    color: white;
    font-family: "Trash Regular";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1000000;
    font-size: 2.5em;
    font-weight: bolder;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .video-title:hover {
    color: #FF0000;
  }
  @media only screen and (min-width: 320px) and (max-width: 400px) {
    .video-title {
      font-size: 1.25em;
    }
  }
  @media only screen and (min-width: 401px) and (max-width: 600px) {
    .video-title {
      font-size: 1.5em;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 800px) {
    .video-title {
      font-size: 2em;
    }
  }
  @media only screen and (min-width: 1000px){
    .video-title {
      font-size: 3em;
    }
  }
</style>
