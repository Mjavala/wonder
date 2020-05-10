<template>
  <div>
    <div id="side-nav">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    blackNavStyling (event) {
      event.target.classList.add('whiteText')
      event.target.parentElement.classList.add('blackBackground')
    }
  }
}
</script>

<style scoped>
    .whiteText {
        color: white;
    }
    .blackBackground{
        transition: all 2s ease;
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
    @keyframes fadeToBlack{
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            background-color: black;
        }
    }
</style>
