<template>
  <div v-editable="blok" class="util__flex-eq">
    <div id="page-wrap">
      <h1>{{ blok.text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  mounted () {
    const setElement = document.getElementById('page-wrap')
    const height = window.innerHeight
    setElement.style.height = `${height}px`
  }
}
</script>

<style scoped>
    #page-wrap {
        background-color: #ffffff;
    }
</style>
