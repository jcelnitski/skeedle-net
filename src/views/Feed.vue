<template>
  <div>
    <div class="h-wrap">
      <h1 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Feed </h1>
    </div>
    <div v-bind:class="[dark ? 'content-dark' : 'content']" style="margin-bottom: 50px;">Coming soon!</div>
  </div>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    dark: Boolean
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
