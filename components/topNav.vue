<template>
  <nav id="nav">
    <svg
      v-if="!showSideMenu"
      xmlns="http://www.w3.org/2000/svg"
      class="hamburger"
      viewBox="0 0 36.167 24.922"
      preserveAspectRatio="xMidYMid meet"
      @click="showSideMenu = true"
    ><g transform="translate(-6377.605 -701)"><rect width="36.167" height="5.167" transform="translate(6377.605 701)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 710.877)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 720.755)" fill="#fff" /></g></svg>
    <div id="nav-wrapper">
      <nuxt-link to="/" class="nav-item">
        Film
      </nuxt-link>
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
    <sideNav v-if="showSideMenu" />
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
        if (target === 'wrapper') {
          this.showSideMenu = false
        }
        if (target === 'film') {
          setTimeout(() => { this.scrollToVideos() }, 1000)
        }
      })
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
.hamburger {
    position: absolute;
    top: 0;
    left: 0;
    width: 6%;
    padding: 1.5625em;
    cursor: pointer;
  }

</style>
