<template>
  <div v-editable="blok" class="vimeo">
    <div id="video-anchor">
      <div id="video-img-wrap">
        <div class="placeholder" />
        <div v-if="scrolled" id="video-wrap">
          <no-ssr>
            <vimeo-player
              ref="player"
              class="vimeo2"
              :video-id="videoID"
              :options="{responsive: true}"
              :controls="control"
              @ready="onReady"
            />
          </no-ssr>
        </div>
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
      playing: false,
      scrolled: false,
      playerReady: false
    }
  },
  watch: {
    playerReady () {
      this.showVideos()
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.scrolled = true
    })
  },
  methods: {
    onReady () {
      this.playerReady = true
    },
    showVideos () {
      const vimeo2 = document.getElementsByClassName('vimeo2')
      const placeholders = document.getElementsByClassName('placeholder')
      for (let i = 0; i < vimeo2.length; i++) {
        vimeo2[i].classList.add('show')
      }
      for (let i = 0; i < placeholders.length; i++) {
        placeholders[i].classList.add('noShow-placeholder')
      }
    }
  }
}
</script>

<style scoped>
  #video-img-wrap{
    position: relative;
  }
  .vimeo2{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  #video-wrap{
    position: relative;
  }
  .show {
    position: unset;
  }
  .noShow-placeholder{
    display: none;
  }
  .placeholder {
    width: 100vw;
    height: 25vh;
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
  #video-anchor{
    overflow: auto;
    background-color: #ff0000;
  }
</style>
