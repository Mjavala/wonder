<template>
  <div>
    <Wonder />
    <main id="main" role="main">
      <nuxt />
    </main>
  </div>
</template>

<script>

export default {
  components: {
    Wonder: () => import('~/components/wonder.vue')
  }
}
</script>

<style>
  body{
    margin: 0;
  }
  #main{
    height: 100vh;
  }
</style>
