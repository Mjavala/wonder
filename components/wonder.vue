<template>
  <div id="sup" />
</template>

<script>
import lottie from 'lottie-web'
import * as animationData from '~/assets/final_html.json'

export default {
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('sup'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        progressiveLoad: false,
        hideOnTransparent: true
      }
    }
    )
  }
}
</script>

<style scoped>
  #sup{
    height: 100vh;
    background-color: #FF0000;
  }
</style>
