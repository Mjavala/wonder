
<template>
  <svg class="arrows" @click="onClickArrows()">
    <path class="a1" d="M0 0 L30 32 L60 0" />
    <path class="a2" d="M0 20 L30 52 L60 20" />
    <path class="a3" d="M0 40 L30 72 L60 40" />
  </svg>
</template>

<script>
export default {
  methods: {
    onClickArrows () {
      window.scrollBy(-1, 1)
      setTimeout(() => { this.scrollToVideos() }, 800)
    },
    scrollToVideos () {
      const elmntToView = document.getElementById('video-wrap')
      elmntToView.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
body {
  background:#0b1d2a;
}
.arrows {
	width: 20%;
	height: 10%;
	position: absolute;
	bottom: 7.5%;
	}

.arrows path {
	stroke: #fff;
	fill: transparent;
	stroke-width: 1px;
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite;
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {
	animation-delay:0s;
	-webkit-animation-delay:0s; /* Safari 和 Chrome */
}
</style>
