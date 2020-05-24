<template>
  <div class="arrow-down">
    <div class="left" @click="onClickArrows" />
    <div class="right" @click="onClickArrows" />
  </div>
</template>

<script>
export default {
  methods: {
    onClickArrows () {
      window.scrollBy(-1, 1)
      setTimeout(() => { this.scrollToDiv() }, 800)
    },
    scrollToDiv () {
      const videoDiv = document.getElementById('video-anchor')
      const aboutDiv = document.getElementById('page-wrap')

      if (!(videoDiv === null)) {
        videoDiv.scrollIntoView({ block: 'start', behavior: 'smooth' })
      } else if (!(aboutDiv === null)) {
        aboutDiv.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>

.arrow-down{
  width:60px;
  height:40px;
  margin:0 0 0 -30px;
  position:absolute;
  left: 50%;
  bottom: 5%;
  animation: arrow 0.5s 1s infinite ease-out alternate;
  -webkit-animation: arrow 0.5s 1s infinite ease-out alternate;

}

.arrow-down:hover{
   animation-play-state: paused;
   -webkit-animation-play-state: paused;
}

.left{
  position:absolute;
  height:10px;
  width:40px;
  background:white;
  cursor: pointer;
  transform:rotate(240deg);
  -webkit-transform:rotate(240deg);
  top:10px;
  left:10px;
  border-radius:4px;
  -webkit-border-radius:4px;
  transform-origin:5px 50%;
  -webkit-transform-origin:5px 50%;
  animation: leftArrow 0.5s 1s infinite ease-out alternate;
  -webkit-animation: leftArrow 0.5s 1s infinite ease-out alternate;
}

.right{
  position:absolute;
  height:10px;
  width:40px;
  background:white;
  cursor: pointer;
  transform:rotate(-60deg);
  -webkit-transform:rotate(-60deg);
  top:10px;
  left:10px;
  border-radius:4px;
  -webkit-border-radius:4px;
  transform-origin:5px 50%;
  -webkit-transform-origin:5px 50%;
  animation: rightArrow 0.5s 1s infinite ease-out alternate;
  -webkit-animation: rightArrow 0.5s 1s infinite ease-out alternate;
}

@keyframes arrow{
  0% {
    bottom:0px;
  }
  100%{
    bottom:40px;
  }
}

@keyframes arrow{
  0% {
    bottom:0px;
  }
  100%{
    bottom:40px;
  }
}

@-webkit-keyframes arrow{
  0% {
    bottom:0px;
  }
  100%{
    bottom:40px;
  }
}

@keyframes leftArrow{
  0% {
  }
  100%{
    -webkit-transform:rotate(225deg);
  }
}

@-webkit-keyframes leftArrow{
  0% {
  }
  100%{
    -webkit-transform:rotate(225deg);
  }
}

@keyframes rightArrow{
  0% {
  }
  100%{
    -webkit-transform:rotate(-45deg);
  }
}

@-webkit-keyframes rightArrow{
  0% {
  }
  100%{
    -webkit-transform:rotate(-45deg);
  }
}
</style>
