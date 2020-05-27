<template>
  <nav id="nav">
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
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showSideMenu: false
    }
  },
  methods: {
    underlineCurrentPage (event) {
      event.target.classList.add('whiteUnderLine')
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
    color: red;
    padding: 1.5625em;
    padding-right: 0;
  }
  .nav-item{
    cursor: pointer;
    font-family: "Trash Regular";
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
  }
  @media only screen and (min-width: 780px) {
    #nav-wrapper {
      width: 40%;
    }
  }
</style>
