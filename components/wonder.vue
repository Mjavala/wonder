<template>
  <div id="wrapper">
    <naV />
    <downArrow />

    <!--
    <video autoplay>
      <source src="@/assets/320.mp4" type="video/mp4">
    </video>
    -->
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
  },
  methods: {
    // will need polyfill for edge -
    //  https://stackoverflow.com/questions/42503599/how-to-make-javascript-scrollintoview-smooth
  }
}
</script>

<style scoped>

  @font-face {
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf");
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

  .whiteUnderline{
    border-bottom: 2px solid white;
  }
</style>
