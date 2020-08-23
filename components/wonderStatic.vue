<template>
  <div id="wrappers">
    <naV
      id="navigation"
      class="noShow"
    />
    <div>
      <div v-show="this.animLoaded" id="main" role="main" />
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import naV from '~/components/topNav'
import * as animationData from '~/assets/bodymovin_centered_v4.json'

export default {
  components: {
    naV
  },
  data () {
    return {
      animLoaded: false
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      this.loadAnimation()
      setTimeout(() => {
        const nav = document.getElementById('navigation')
        nav.classList.remove('noShow')
        nav.classList.add('enter')
      }, 8000)
    })
  },
  methods: {
    loadAnimation () {
      this.animLoaded = true
      const anim = lottie.loadAnimation({
        container: document.getElementById('main'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData.default,
        rendererSettings: {
          progressiveLoad: true,
          hideOnTransparent: true
        }
      }
      )
      anim.setSubframe = false
      anim.addEventListener('DOMloaded', this.triggerPlay(anim))
    },
    triggerPlay (anim) {
      console.log('ready anim triggered')
      console.log(this.animLoaded)
      anim.play()
    }
  }
}
</script>

<style>
  #wrappers{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF0000;
    position: relative;
    height: 100vh;
  }
  #main {
    width: 100vw;
  }
  #navigation{
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-content: center;
    position: absolute;
    top: 0;
    width: 100vw;
    font-size: calc(13.5px + (25 - 10) * ((100vw - 320px) / (1600 - 320)));
    max-height: 150px;
    max-width: 1154px;
  }
  .enter{
    animation: 1s enter ease forwards;
  }
  .noShow {
    display: none !important;
  }
  @media only screen and (min-width: 320px) {
    #wonder{
      padding: 0 1.6525em;
    }
  }
  @media only screen and (min-width: 780px) {
    #wonder {
      padding: 0 1.6525em;
    }
  }
  @media only screen and (min-width: 1154px) {
    #navigation {
      max-width: 2000px;
    }
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
