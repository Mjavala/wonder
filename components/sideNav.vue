<template>
  <div>
    <div id="side-nav">
      <div class="side-nav-item-wrap">
        <nuxt-link id="film" to="/" class="side-nav-item" @click.native="blackNavStyling">
          Film
        </nuxt-link>
      </div>
      <nuxt-link to="/photos" class="side-nav-item-wrap" @click.native="blackNavStyling">
        <div class="side-nav-item">
          Photo
        </div>
      </nuxt-link>
      <div class="side-nav-item-wrap">
        <nuxt-link to="/about" class="side-nav-item" @click.native="blackNavStyling">
          About
        </nuxt-link>
      </div>
      <div class="side-nav-item-wrap">
        <nuxt-link to="/contact" class="side-nav-item" @click.native="blackNavStyling">
          Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('load', () => {
      const vh = window.innerHeight
      const root = document.getElementById('side-nav')
      root.style.height = `${vh}px`
    })
  },
  methods: {
    blackNavStyling (event) {
      event.target.classList.add('whiteText')
      event.target.parentElement.classList.add('blackBackground')
    }
  }
}
</script>

<style scoped>
  @font-face {
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf");
  font-display: swap;
  }
  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
  .whiteText {
    color: white;
  }
  .blackBackground{
    transition: all 1s ease;
    background-color: black;
  }
  #side-nav{
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: "Trash Regular";
    z-index: 100;
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
