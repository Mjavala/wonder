<template>
  <nav id="nav">
    <svg
      class="hamburger"
      xmlns="http://www.w3.org/2000/svg"
      width="36.167"
      height="24.922"
      viewBox="0 0 36.167 24.922"
      @click="showSideMenu = true"
    ><g transform="translate(-6377.605 -701)"><rect width="36.167" height="5.167" transform="translate(6377.605 701)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 710.877)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 720.755)" fill="#fff" /></g></svg>
    <div id="nav-wrapper">
      <nuxt-link to="/" class="nav-item">
        Film
      </nuxt-link>
      <nuxt-link to="/photos" class="nav-item">
        Photo
      </nuxt-link>
      <nuxt-link to="/about" class="nav-item" @click="underlineCurrentPage">
        About
      </nuxt-link>
      <nuxt-link to="/contact" class="nav-item">
        Contact
      </nuxt-link>
    </div>
    <sideNav v-if="showSideMenu" id="side-nav-wrap" />
  </nav>
</template>

<script>
export default {
  components: {
    sideNav: () => import('~/components/sideNav')
  },
  data () {
    return {
      showSideMenu: false
    }
  },
  mounted () {
    this.sideNavDrawer()
  },
  methods: {
    underlineCurrentPage (event) {
      event.target.classList.add('whiteUnderLine')
    },
    sideNavDrawer () {
      document.addEventListener('click', (e) => {
        const target = e.target.getAttribute('id')
        const targetClass = e.target.getAttribute('class')
        if (targetClass === 'side-nav-item whiteText') {
          setTimeout(() => { this.showSideMenu = false }, 1000)
        }
        if (target === 'side-nav-wrap') {
          this.showSideMenu = false
        }
        if (target === 'film') {
          setTimeout(() => {
            this.scrollToVideos()
            this.showSideMenu = false
          }, 1000)
        }
      })
      // --- Mobile support --- //
      document.addEventListener('touchstart', (e) => {
        const target = e.target.getAttribute('id')
        const targetClass = e.target.getAttribute('class')
        if (targetClass === 'side-nav-item whiteText') {
          setTimeout(() => { this.showSideMenu = false }, 1000)
        }
        if (target === 'side-nav-wrap') {
          this.showSideMenu = false
        }
        if (target === 'film') {
          setTimeout(() => {
            this.scrollToVideos()
            this.showSideMenu = false
          }, 1000)
        }
      })
    },
    scrollToVideos () {
      const elmntToView = document.getElementById('video-wrap')
      elmntToView.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
  a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
  }
  .exact-active-link {
      border-bottom: 2px solid white;
  }
  .noShow{
    opacity: 0;
  }
    #nav-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 55%;
    color: white;
    padding: 1.5625em;
    padding-right: 0;
  }
  .nav-item{
    cursor: pointer;
    font-family: "Trash Regular";
  }
  .hamburger {
      width: 2.5em;
      cursor: pointer;
      padding:  1.5625em;
    }
  #side-nav-wrap{
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
  }
  .iphone-nav-wrap{ /* iphone 6, 5 fix */
    position: absolute;
    top: 0;
    padding: 1.6525em;
    text-align: center;
    margin-left: 2.5em;
  }
  .nav-item-spacer {  /* iphone 6, 5 fix */
    padding: 0 0.25em;
  }
  @media only screen and (max-width: 640px) {
    #nav-wrapper {
      width: 100%;
      align-items: flex-start;
      padding-left: 0;
      padding-right: 1.5625em;
    }
    .hamburger {
      padding-right: 1em;
      width: 3em;
    }
  }
  @media only screen and (min-width: 780px) {
    .hamburger {
      width: 3.5em;
      height: 1.25em;
      padding-right: 12.5em;
      padding-left: 0;
    }
    #nav-wrapper {
      width: 40%;
    }
  }
</style>
