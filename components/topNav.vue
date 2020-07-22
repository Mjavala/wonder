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
      <nuxt-link id="film-top-nav" to="/" class="nav-item">
        Film
      </nuxt-link>
      <nuxt-link to="/photos" class="nav-item">
        Photo
      </nuxt-link>
      <div id="about-top-nav" class="nav-item">
        About
      </div>
      <div id="contact-top-nav" class="nav-item">
        Contact
      </div>
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
    // Hooks for side nav && top nav scroll, both web and mobile support
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
        // side nav ids
        if (target === 'film') {
          setTimeout(() => {
            this.scrollToVideos()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'side-nav-about') {
          setTimeout(() => {
            this.scrollToAbout()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'side-nav-contact') {
          // scroll is needed to trigger video API calls so that the page doesn't jump back up afterwards
          window.scroll(-1, 1)
          setTimeout(() => {
            this.scrollToContact()
            this.showSideMenu = false
          }, 1000)
        }
        // top nav ids
        if (target === 'film-top-nav') {
          setTimeout(() => {
            this.scrollToVideos()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'about-top-nav') {
          setTimeout(() => {
            this.scrollToAbout()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'contact-top-nav') {
          window.scroll(-1, 1)
          setTimeout(() => {
            this.scrollToContact()
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
        if (target === 'side-nav-about') {
          setTimeout(() => {
            this.scrollToAbout()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'side-nav-contact') {
          // scroll is needed to trigger video API calls so that the page doesn't jump back up afterwards
          window.scroll(-1, 1)
          setTimeout(() => {
            this.scrollToContact()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'film-top-nav') {
          setTimeout(() => {
            this.scrollToVideos()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'about-top-nav') {
          setTimeout(() => {
            this.scrollToAbout()
            this.showSideMenu = false
          }, 1000)
        }
        if (target === 'contact-top-nav') {
          window.scroll(-1, 1)
          setTimeout(() => {
            this.scrollToContact()
            this.showSideMenu = false
          }, 1000)
        }
      })
    },
    scrollToVideos () {
      const elmntToView = document.getElementsByClassName('video-anchor')[0]
      elmntToView.scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    scrollToAbout () {
      const aboutAnchor = document.getElementById('page-wrap')
      aboutAnchor.scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
    scrollToContact () {
      const contactAnchor = document.getElementById('innerWrap')
      contactAnchor.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
  @font-face { /* need eot for IE 11 */
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf") format('truetype'),
    url("~static/fonts/trash-regular.eot#iefix") format('embedded-opentype');
  font-display: swap;
  }
  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
  .exact-active-link {
    border-bottom: 2px solid white;
  }
  #nav-wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 55%;
    color: white;
    padding: 1.5625em;
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
  @media only screen and (max-width: 640px) {
    #nav-wrapper {
      width: 100%;
      display: flex;
      align-items: flex-start;
      padding-left: 0;
      padding-right: 1.5625em;
    }
    .hamburger {
      padding-right: 1em;
      width: 3em;
    }
  }
  @media only screen and (min-width: 768px) {
    .hamburger {
      height: 1.25em;
      padding-right: 12.5em;
    }
    #nav-wrapper {
      width: 42%;
    }
  }
  @media only screen and (min-width: 1154px) {
    .hamburger {
      padding-left: 1.655em;
    }
    #nav-wrapper {
      padding-right: 0;
    }
  }
  @media all and (-ms-high-contrast:none)
  {
    *::-ms-backdrop, .nav-item {
      font-family: "Trash Regular";
    } /* IE11 */
    *::-ms-backdrop, .nav-item {
      font-family: "Trash Regular";
    } /* IE11 */
  }
</style>
