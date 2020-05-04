<template>
  <div>
    <div v-show="this.animLoaded" id="main" role="main" />
  </div>
</template>

<script>
import lottie from 'lottie-web'
import * as animationData from '~/assets/final_html.json'

export default {
  data () {
    return {
      animLoaded: false
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      this.loadAnimation()
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

<style scoped>
  #main{
    padding: 0 1.5625em;
    height: 100vh !important;
    background-color: #FF0000;
  }
</style>
