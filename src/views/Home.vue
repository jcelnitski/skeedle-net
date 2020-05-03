<template>
  <div>
    <div class="h-wrap">
      <h1 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Programming Problems into Solutions. </h1>
    </div>
    <p v-bind:class="[dark ? 'content-dark' : 'content']">
      Hello and welcome to my website!  If you couldn’t tell from the
      glaring title above, my name is John Elnitski, and I’m here to
      make the world a better place as best I can.  Inspired by the
      incredible and driven by reason, my creativity is boundless and
      each idea comes packaged with every real world situation it
      applies to.  Keep checking back here for updates on my progress,
      there isn’t much yet but project milestones will be revealed on
      this website as they are implemented.  First to come is my
      Artificial Intelligence Research Assistant, which I will be
      referring to as bxtr (pronounced Baxter).
      <br>
      <br>
      This website was developed using NodeJS, MongoDB, and the Vue
      framework and it’s source is publicly available on Github
      <a href="https://github.com/skeedle/skeedle-net" target="_blank">here</a>
      .  If you’re interested in reaching out please use the contact
      button at the top of the page.
    </p>
    <br>
    <Updates ref="Updates" :dark="dark" class="feed"/>
  </div>
</template>

<script>
import Updates from '@/components/Updates.vue'

export default {
  name: 'Home',
  components: {
    Updates,
  },
  props: {
    dark: Boolean
  },
  methods: {
    setValue: function() {
      this.dark = !this.dark;
      this.$refs.Updates.setDark();
    }
  }
}
</script>

<style scoped>
#home {
  bottom: 0;
  float: inline-start;
  position: absolute;
}

p {
  text-align: left;
}

.feed {
  padding-top: 50px;
}
</style>
