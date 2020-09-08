<template>
  <div class="video-anchor" @mouseenter="addBorderBox" @mouseleave="delBorderBox">
    <video
      v-show="currentVideo"
      class="gif"
      src="../assets/test.mp4"
      loop
      autoplay
      muted
    />
    <div v-editable="blok" class="vimeo" />
    <div v-if="done">
      <div v-show="showTitle" class="video-title" @click="playvid">
        {{ this.title }}
      </div>
      <div v-show="showTitle" class="play" @click="playvid">
        Play
      </div>
      <div
        v-video-player:myVideoPlayer="playerOptions[0]"
        class="vids"
        :playsinline="playsinline"
        @play="onPlayerPlay($event)"
      />
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

export default {
  props: ['blok'],
  data () {
    return {
      title: this.blok.title,
      video: this.blok.video,
      poster: this.blok.poster,
      loaded: false,
      count: 0,
      desktopCount: 0,
      clickedTitle: false,
      playsinline: true,
      playerOptions: [],
      done: false,
      hover: false,
      currentVideo: false,
      showTitle: true,
      mobile: false,
      videos: [],
      mediaVideos: []
    }
  },
  computed: {
    player () {
      return this.myVideoPlayer
    }
  },
  mounted () {
    document.addEventListener('scroll', () => {
      this.done = true
      if (this.mobile === true) {
        if (this.count === 0) {
          this.mobileTitles()
          this.count++
        }
      }
      if (this.mobile === false) {
        const gifs = document.getElementsByClassName('gif')
        if (this.desktopCount === 0) {
          for (let i = 0; i < gifs.length; i++) {
            gifs[i].addEventListener('click', () => {
              this.currentVideo = false
            })
          }
          this.desktopCount++
        }
      }
    })
    const video = String(this.video)
    const image = String(this.poster)
    const playerOption = {
      fluid: true,
      fullscreen: {
        options: { navigationUI: 'show' }
      },
      language: 'en',
      sources: [{
        src: video,
        type: 'video/mp4'
      }],
      poster: image
    }
    this.playerOptions.push(playerOption)
    // const titles = document.getElementsByClassName('video-title')
    /* eslint no-useless-escape: "warn" */
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      this.mobile = true
    }
  },
  methods: {
    playvid (e) {
      const title = document.getElementsByClassName('video-title')
      const play = document.getElementsByClassName('play')
      for (const i in title) {
        if (title[i] === e.target || play[i] === e.target) {
          console.log('adding noshow to both!')
          title[i].classList.add('noShow')
          play[i].classList.add('noShow')
        }
      }
      this.myVideoPlayer.play()
      e.target.classList.add('noShow')
      this.clickedTitle = true
    },
    addBorderBox (data) {
      data.target.classList.add('borderbox')
      this.currentVideo = true
      this.showTitle = false
    },
    delBorderBox (data) {
      data.target.classList.remove('borderbox')
      this.currentVideo = false
      this.showTitle = true
    },
    mobileTitles () {
      const title = document.getElementsByClassName('video-title')
      const play = document.getElementsByClassName('play')
      if (title.length > 1) {
        for (const i in title) {
          if (title[i].classList !== undefined) {
            setInterval(() => {
              title[i].classList.add('fade-out')
              play[i].classList.add('fade-in')
              title[i].classList.remove('fade-in')
              play[i].classList.remove('fade-out')

              setTimeout(() => {
                title[i].classList.add('fade-in')
                play[i].classList.add('fade-out')
                title[i].classList.remove('fade-out')
                play[i].classList.remove('fade-in')
              }, 5000)
            }, 12000)
          }
        }
      }
    },
    onPlayerPlay (e) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        const medias = Array.prototype.slice.apply(document.querySelectorAll('audio,video'))
        const titles = document.getElementsByClassName('video-title')
        const anchor = document.getElementsByClassName('video-anchor')

        const mediaVideos = []
        for (const i in medias) {
          const id = medias[i].getAttribute('class')
          if (id !== 'gif') {
            mediaVideos.push(medias[i])
          }
        }
        mediaVideos.forEach((media, index) => {
          if (e.el_.childNodes[0] !== media) {
            media.load()
            titles[index].classList.remove('noShow')
            anchor[index].classList.remove('red-border')
          }
        })
      }
    }
  }
}
</script>

<style>
  @font-face { /* need eot for IE 11 */
  font-family: "Trash Regular";
  src: url("~static/fonts/trash-regular.ttf") format('truetype');
  font-display: swap;
  }
  .video-anchor{
    position: relative;
    overflow: hidden;
    background-color: black;
  }
  .borderbox {
    border: 4px solid red;
  }
  .vjs-big-play-button{
    display: none !important;
  }
  .vjs-poster {
    z-index: 10000;
  }
  .ll{
    display: block;
  }
  .noShow{
    opacity: 0;
  }
  .gif {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100%;
    height: auto;
  }
  .video-title, .play{
    color: white;
    font-family: "Trash Regular";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1000000;
    font-size: 2.5em;
    font-weight: bolder;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .video-title:hover {
    color: #FF0000;
  }
  .play {
    opacity: 0;
  }
  .fade-in {
  animation: fadeIn ease-in 5s forwards;
  -webkit-animation: fadeIn ease-in 5s forwards;
  -moz-animation: fadeIn ease-in 5s forwards;
  -o-animation: fadeIn ease-in 5s forwards;
  -ms-animation: fadeIn ease-in 5s forwards;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  .fade-out {
  animation: fadeOut ease 3s forwards;
  -webkit-animation: fadeOut ease 3s forwards;
  -moz-animation: fadeOut ease 3s forwards;
  -o-animation: fadeOut ease 3s forwards;
  -ms-animation: fadeOut ease 3s forwards;
  }
  @keyframes fadeOut {
    0% {opacity:1;}
    100% {opacity:0;}
  }
  @media only screen and (min-width: 320px) and (max-width: 400px) {
    .video-title, .play {
      font-size: 1.25em;
    }
  }
  @media only screen and (min-width: 401px) and (max-width: 600px) {
    .video-title, .play {
      font-size: 1.5em;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 800px) {
    .video-title, .play {
      font-size: 2em;
    }
  }
  @media only screen and (min-width: 1000px){
    .video-title, .play {
      font-size: 3em;
    }
  }
</style>
