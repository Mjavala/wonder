<template>
  <div>
    <wonder />
    <nuxt />
    <contactPage />
  </div>
</template>

<script>
import wonder from '~/components/wonder'
import contactPage from '~/components/contactPage'

export default {
  components: {
    wonder,
    contactPage
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
