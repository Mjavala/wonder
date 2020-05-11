<template>
  <div id="wrapper">
    <nav v-if="loaded" id="nav">
      <svg
        v-if="!showSideMenu"
        xmlns="http://www.w3.org/2000/svg"
        class="hamburger"
        viewBox="0 0 36.167 24.922"
        preserveAspectRatio="xMidYMid meet"
        @click="showSideMenu = true"
      ><g transform="translate(-6377.605 -701)"><rect width="36.167" height="5.167" transform="translate(6377.605 701)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 710.877)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 720.755)" fill="#fff" /></g></svg>
      <div id="nav-wrapper">
        <div class="nav-item" @click="scrollToVideos">
          Film
        </div>
        <div class="nav-item">
          Photo
        </div>
        <nuxt-link to="/about" class="nav-item" @click="underlineCurrentPage">
          About
        </nuxt-link>
        <div class="nav-item">
          Contact
        </div>
      </div>
    </nav>
    <sideNav v-if="showSideMenu" id="side-nav-wonder" />

    <!--
    <video autoplay>
      <source src="@/assets/320.mp4" type="video/mp4">
    </video>
    -->
  </div>
</template>

<script>
import sideNav from '~/components/sideNav'

export default {
  components: {
    sideNav
  },
  data () {
    return {
      loaded: false,
      showSideMenu: false
    }
  },
  watch: {
    showSideMenu (newVal) {
      if (newVal === true) {
        this.sideNavDrawer()
      }
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      this.loaded = true
    })
    window.addEventListener('resize', () => {
      /* eslint prefer-const: "warn" */
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
    this.sideNavDrawer()
  },
  methods: {
    // will need polyfill for edge -
    //  https://stackoverflow.com/questions/42503599/how-to-make-javascript-scrollintoview-smooth
    scrollToVideos () {
      const elmntToView = document.getElementById('video-wrap')
      elmntToView.scrollIntoView({ block: 'start', behavior: 'smooth' })
      setTimeout(() => { this.showSideMenu = false }, 2000)
    },
    sideNavDrawer () {
      document.addEventListener('click', (e) => {
        const target = e.target.getAttribute('id')
        if (target === 'wrapper') {
          this.showSideMenu = false
        }
        if (target === 'film') {
          setTimeout(() => { this.scrollToVideos() }, 1000)
        }
      })
    },
    underlineCurrentPage (event) {
      event.target.classList.add('whiteUnderLine')
    }
  }
}
</script>

<style scoped>

  @font-face {
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf");
  }

  a {
  color: inherit; /* blue colors for links too */
  }

  #wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh !important;
    height: calc(var(--vh, 1vh) * 100);
    background-color: #FF0000;
    position: relative;
  }
  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    width: 6%;
    padding: 1.5625em;
    cursor: pointer;
  }
  #nav-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    color: white;
    padding: 1.5625em;
    font-size: .9em;
  }
  .nav-item{
    cursor: pointer;
    font-family: "Trash Regular";
  }

  .whiteUnderline{
    border-bottom: 2px solid white;
  }
</style>
