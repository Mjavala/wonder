<template>
  <div id="wrapper">
    <naV
      v-show="loaded"
      v-cloak
      id="navigation"
      class="noShow"
    />
    <video id="video-test" autoplay="1" muted>
      <!--
          :srcset="`${require('~/assets/360.mp4')} 360px, ${require('~/assets/414.mp4')} 414px`"
                  sizes="100vw"
          -->
      <source :src="require('~/assets/720.mp4')">
    </video>
    <downArrow
      v-if="loaded"
      v-cloak
      id="arrow-c"
      class="noShow"
    />
  </div>
</template>

<script>
import downArrow from '~/components/downArrow'
import naV from '~/components/topNav'

export default {
  components: {
    downArrow,
    naV
  },
  props: [
    'viewport'
  ],
  data () {
    return {
      loaded: true,
      showSideMenu: false
    }
  },
  mounted () {
    this.loaded = true
    window.addEventListener('load', () => {
      this.showNavArrow()
    })
    this.showNavArrow()
  },
  methods: {
    // will need polyfill for edge -
    //  https://stackoverflow.com/questions/42503599/how-to-make-javascript-scrollintoview-smooth
    showNavArrow () {
      setTimeout(() => {
        this.loaded = true
        const nav = document.getElementById('navigation')
        const arrow = document.getElementById('arrow-c')
        nav.classList.remove('noShow')
        nav.classList.remove('noShow')
        nav.classList.add('enter')
        arrow.classList.add('enter')
      }, 9000)
    }
  }
}
</script>

<style scoped>

  @font-face {
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf");
  }
  [v-cloak]
    {
    display:none;
    }

  #wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF0000;
    position: relative;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
  }
  #navigation{
    z-index: 10;
  }

  .whiteUnderline{
    border-bottom: 2px solid white;
  }

  #video-test {
    position: absolute;
    left: -5%;
  }
  #video-test {
    width: 100vw;
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
