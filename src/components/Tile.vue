<template>
  <router-link :to="project.url" v-bind:class="[dark ? 'tile-dark' : 'tile']" :dark="dark">
    <mq-layout mq="sm">
      <h5>{{ project.title }}</h5>
    </mq-layout>
    <mq-layout mq="lg">
      <h4>{{ project.title }}</h4>
    </mq-layout>
    {{ project.date }}
  </router-link>
</template>

<script>
export default {
  props: ['project', 'dark'],
};
</script>

<style>
.tile {
  background-color: #66ffbc;
  border-radius: 10px 10px 10px 10px;
  margin: 2%;
  top: 0; left: 0; bottom: 0; right: 0;
  max-width: 200px;
  width: 30vw;
  max-height: 200px;
  height: 30vw;
}
.tile-dark {
  background-color: #007fff;
  border-radius: 10px 10px 10px 10px;
  margin: 2%;
  top: 0; left: 0; bottom: 0; right: 0;
  max-width: 200px;
  width: 30vw;
  max-height: 200px;
  height: 30vw;
}
</style>
