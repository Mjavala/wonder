<template>
  <div id="wrapper">
    <nav id="nav">
      <svg xmlns="http://www.w3.org/2000/svg" class="hamburger" viewBox="0 0 36.167 24.922" preserveAspectRatio="xMidYMid meet" @click="showSideMenu = true"><g transform="translate(-6377.605 -701)"><rect width="36.167" height="5.167" transform="translate(6377.605 701)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 710.877)" fill="#fff" /><rect width="36.167" height="5.167" transform="translate(6377.605 720.755)" fill="#fff" /></g></svg>
      <div id="nav-wrapper">
        <div class="nav-item">
          Film
        </div>
        <div class="nav-item">
          Photo
        </div>
        <div class="nav-item">
          About
        </div>
        <div class="nav-item">
          Contact
        </div>
      </div>
    </nav>
    <div v-if="showSideMenu" id="side-nav">
      <div class="side-nav-item-wrap">
        <div class="side-nav-item" @click="blackNavStyling">
          Film
        </div>
      </div>
      <div class="side-nav-item-wrap" @click="blackNavStyling">
        <div class="side-nav-item">
          Photo
        </div>
      </div>
      <div class="side-nav-item-wrap" @click="blackNavStyling">
        <div class="side-nav-item">
          About
        </div>
      </div>
      <div class="side-nav-item-wrap" @click="blackNavStyling">
        <div class="side-nav-item">
          Contact
        </div>
        <div id="exit-side-menu" @click="showSideMenu = false">
          X
        </div>
      </div>
    </div>
    <video autoplay>
      <source src="@/assets/320.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loaded: false,
      showSideMenu: false
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      this.loaded = true
    })
  },
  methods: {
    blackNavStyling (event) {
      console.log(event.target)
      event.target.classList.add('whiteText')
      event.target.parentElement.classList.add('blackBackground')
    }
  }
}
</script>

<style>
  #wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5625em;
    height: 100vh !important;
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
    width: 60%;
    color: white;
    padding: 1.5625em;
    font-size: 1em;
  }
  .nav-item{
    cursor: pointer;
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
  .whiteText{
    color: white;
  }
  .blackBackground{
    background-color: black;
  }
</style>
