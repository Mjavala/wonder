<template>
  <div v-editable="blok" class="util__flex">
    <component :is="blok.component" v-for="blok in blok.columns" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
  .vjs-default-skin.vjs-paused .vjs-control-bar {
    display: flex !important;
  }
</style>
