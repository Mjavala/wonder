<template>
  <div id="wrapper">
    <naV
      v-show="loaded"
      v-cloak
      id="navigation"
      class="noShow"
    />
    <video v-show="ready" id="video-test" muted playsinline>
      <source src="~/assets/960.mp4" type="video/mp4">
      <source src="~/assets/720.webm" type="video/webm">
      <!--
            :srcset="`${require('~/assets/360.mp4')} 360px, ${require('~/assets/414.mp4')} 414px`"
                    sizes="100vw"
        gif fallback
            -->
      <img id="gif-backup" src="~/assets/720.gif" title="Your browser does not support the <video> tag">
    </video>
  </div>
</template>

<script>
import naV from '~/components/topNav'

export default {
  components: {
    naV
  },
  data () {
    return {
      loaded: true,
      showSideMenu: false,
      load: false,
      ready: false
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      const vid = document.getElementById('video-test')
      if (vid.readyState === 4) {
        this.ready = true
        vid.play()
      }
      this.testFunc()
      this.showNav()
    })
    const vid = document.getElementById('video-test')
    if (vid.readyState === 4) {
      console.log('video-ready')
      this.ready = true
      vid.play()
    }
    this.testFunc()
    this.showNav()
  },
  methods: {
    // will need polyfill for edge -
    //  https://stackoverflow.com/questions/42503599/how-to-make-javascript-scrollintoview-smooth
    showNav () {
      setTimeout(() => {
        const nav = document.getElementById('navigation')
        nav.classList.remove('noShow')
        nav.classList.remove('noShow')
        nav.classList.add('enter')
      }, 9000)
    },
    isColorInRange (expectedColor, givenColor) {
      const THRESHOLD = 40
      for (let i = 0; i < 3; i++) {
        if (((expectedColor[i] - THRESHOLD) > givenColor[i]) ||
            ((expectedColor[i] + THRESHOLD) < givenColor[i])) {
          return false
        }
      }
      return true
    },
    setVideoBgColor (vid, nativeColor) {
      if (vid) {
        const vidBg = document.getElementById('wrapper')
        if (vidBg) {
          // draw first pixel of video to a canvas
          // then get pixel color from that canvas
          const canvas = document.createElement('canvas')
          canvas.width = 2
          canvas.height = 2
          const ctx = canvas.getContext('2d')
          ctx.drawImage(vid, 0, 0, 1, 1)

          const p = ctx.getImageData(0, 0, 1, 1).data
          if (this.isColorInRange(nativeColor, p)) {
            vidBg.style.backgroundColor = 'rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')'
            console.log(vidBg.style.backgroundColor)
          }
        }
      }
    },
    setVideoBgColorDelayed (vid, nativeColor) {
      setTimeout(this.setVideoBgColor, 100, vid, nativeColor)
    },
    testFunc () {
      const vid = document.getElementById('video-test')
      this.setVideoBgColorDelayed(vid, [255, 0, 0])
    }
  }
}
</script>

<style scoped>

.brightness{
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'brightness\'><feColorMatrix type=\'matrix\' values=\'1.2 0 0 0 0 0 1.2 0 0 0 0 0 1.2 0 0 0 0 0 1.2 0\'/></filter></svg>#brightness"); /* Firefox 3.5+ */
    -webkit-filter:brightness(108.5%); /* Chrome 19+ & Safari 6+ */
}

  @font-face {
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf");
  }

  #wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #Fe0000;
    position: relative;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
  }
  #video-wrap{
    height: 100%;
    width: 100vw;
    background-color: #FF0000;
  }

  #gif-backup {
    z-index: 10000000;
  }
  #navigation{
    z-index: 10;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    position: absolute;
    top: 0;
    width: 100vw;
    font-size: calc(13px + (25 - 10) * ((100vw - 320px) / (1600 - 320)));
    max-height: 150px;
  }

  .whiteUnderline{
    border-bottom: 2px solid white;
  }
  #video-test {
    width: 100vw;
    background-color: #ff0000;
    position: absolute;
    left: -5%;
    height: 100vh;
  }
  .noShow{
    opacity: 0;
  }
  .enter{
    animation: 2s enter ease forwards;
  }
  @keyframes enter {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
</style>
