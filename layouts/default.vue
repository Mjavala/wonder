<template>
  <div>
    <wonder />
    <nuxt :key="$route.fullPath" />
  </div>
</template>

<script>
import wonder from '~/components/wonder'

export default {
  components: {
    wonder
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
