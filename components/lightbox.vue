<template>
  <div class="container">
    <!--
    <div class="gallery">
      <div
        v-for="(img, idx) in imgs"
        :key="idx"
        class="pic"
        @click="() => show(idx)"
      >
        <img :src="img.src ? img.src : img">
      </div>
    </div>
    -->

    <no-ssr>
      <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="imgs"
        @hide="visible = false"
        @on-prev-click="handlePrevClick"
        @on-next-click="handleNextClick"
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: ['images', 'images-mobile'],
  data () {
    return {
      imgs: [
        'https://via.placeholder.com/250.png/09f/fff?text=first+img',
        'https://via.placeholder.com/250.png/09f/fff?text=second+img',
        'https://via.placeholder.com/250.png/09f/fff?text=third+img'
      ],
      visible: false,
      index: 0 // default
    }
  },
  watch: {
    images (newVal) {
      this.imgs = newVal
      const images = document.getElementsByClassName('image2')
      const imagesMobile = document.getElementsByClassName('image')

      for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', () => {
          this.index = i
          this.visible = true
          console.log(i, this.index, this.visible)
        })
      }
      for (let i = 0; i < imagesMobile.length; i++) {
        imagesMobile[i].addEventListener('click', () => {
          this.index = i
          this.visible = true
          console.log(i, this.index, this.visible)
        })
      }
    }
  },
  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handlePrevClick (oldIndex, newIndex) {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
      console.log('newIndex of imgs:', newIndex)
    },
    handleNextClick (oldIndex, newIndex) {
      console.log('when next btn click ----')
      console.log('oldIndex of imgs:', oldIndex)
      console.log('newIndex of imgs:', newIndex)
      if (newIndex === this.imgs.length - 1) {
        this.addImg()
      }
    },
    addImg () {
      this.imgs.push(
        'https://via.placeholder.com/250.png/00a26e/fff?text=new+img'
      )
    }
  }
}
</script>
