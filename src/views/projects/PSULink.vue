<template>
  <div class="sec-wrap">
    <div v-bind:class="[dark ? 'content-dark' : 'content']">
      <img class="link-pic" src="../../assets/projects/psu-link.png">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
