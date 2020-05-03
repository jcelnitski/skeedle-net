<template>
  <div>
    <div class="h-wrap">
      <h1 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Professional Portfolio </h1>
    </div>
    <div v-bind:class="[dark ? 'content-dark' : 'content']" style="margin-bottom: 50px;">Coming soon!</div>
    <div class="h-wrap">
      <h1 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Scholastic Portfolio </h1>
    </div>
    <table id="projects" v-bind:class="[dark ? 'content-dark' : 'content']">
      <div class="tile-list">
        <Tile v-for="project in projects" :key="project.title" :project="project" :dark="dark"></Tile>
      </div>
    </table>
  </div>
</template>

<script>
import Tile from '@/components/Tile.vue';

export default {
  name: 'Portfolio',
  components: {
    Tile,
  },
  props: {
    dark: Boolean
  },
  data() {
    return {
      projects: [
        {
          title: 'LEGO AR',
          date: '1/1/18',
          url: '/portfolio/legoar',
        },
        {
          title: 'Mobile Study',
          date: '1/1/18',
          url: '/portfolio/mobilestudy',
        },
        {
          title: 'PSU Link',
          date: '1/1/18',
          url: '/portfolio/psulink',
        },
        {
          title: 'RestHUB',
          date: '1/1/19',
          url: '/portfolio/resthub',
        },
      ],
    }
  }
}
</script>

<style scoped>
#projects {
  display: flex;
  flex-flow: wrap;
  width: 64vw;
  min-width: 200px;
  max-width: 1000px;
}
</style>
