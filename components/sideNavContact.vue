<template>
  <div>
    <div id="side-nav-contact">
      <div class="side-nav-item-wrap">
        <nuxt-link id="film2" to="/" class="side-nav-item" @click.native="whiteNavStyling">
          Film
        </nuxt-link>
      </div>
      <div class="side-nav-item-wrap">
        <nuxt-link to="/photos" class="side-nav-item" @click.native="whiteNavStyling">
          Photo
        </nuxt-link>
      </div>
      <div class="side-nav-item-wrap">
        <nuxt-link to="/about" class="side-nav-item" @click.native="whiteNavStyling">
          About
        </nuxt-link>
      </div>
      <div class="side-nav-item-wrap">
        <nuxt-link to="/contact" class="side-nav-item" @click.native="whiteNavStyling">
          Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.sideNavDrawer()
  },
  methods: {
    whiteNavStyling (event) {
      event.target.classList.add('blackText')
      event.target.parentElement.classList.add('whiteBackground')
    },
    sideNavDrawer () {
      document.addEventListener('click', (e) => {
        const target = e.target.getAttribute('id')
        if (target === 'film2') {
          setTimeout(() => {
            this.scrollToVideos()
            this.showSideMenu = false
          }, 1000)
        }
      })
      // --- Mobile support --- //
      document.addEventListener('touchstart', (e) => {
        const target = e.target.getAttribute('id')
        if (target === 'film2') {
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
  .blackText {
    color: black;
  }
  .whiteBackground{
    transition: all 1s ease;
    background-color: white;
  }
  #side-nav-contact{
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: "Trash Regular";
    z-index: 100;
    font-size: calc(13px + (25 - 10) * ((100vw - 320px) / (1600 - 320)));
  }
  .side-nav-item-wrap {
    width: 15em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .side-nav-item-wrap:nth-child(1),
  .side-nav-item-wrap:nth-child(2),
  .side-nav-item-wrap:nth-child(3) {
    border-bottom: 1px solid #FF0000;
  }
  .side-nav-item{
    text-align: left;
    font-size: 2em;
    width: 60%;
    cursor: pointer;
  }
  #exit-side-menu{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1em;
    color: #FF0000;
    cursor: pointer;
  }
</style>
