<template>
  <div id="app" v-bind:class="[goDark ? 'app-dark' : 'app-light']">
    <toggle-button v-model="goDark" :width="108" :labels="{checked: 'Dark Mode ON', unchecked: 'Dark Mode OFF'}" class="switch"/>
    <NavBar ref="NavBar" :dark="goDark"/>
    <router-view ref="main" v-bind:class="[goDark ? 'view-dark' : 'view']" :dark="goDark"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  },
  data() {
    return {
      goDark: false
    }
  },
  methods: {
    toggleClass: function() {
      this.goDark = !this.goDark;
    },
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.switch {
  float: left;
  margin: 2px;
  position: absolute;
  z-index: 999;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  width: 100%;
  position: absolute;
}

.app-light {
  background-color: aliceblue;
  color: #2c3e50;
}
.app-dark {
  background-color: #2c3e50;
  color: aliceblue;
}

.nav {
  display: inline-block;
  width: 100%;
  height: 18vh;
}
.nav a {
  color: #007fff;
  font-size: 3vw;
  font-weight: bold;
  padding: 8px;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  background-color: #007fff;
  border-radius: 20px 20px;
  color: #fefefa;
  text-shadow: #66ffbc 0 0 10px;
}
.nav-dark {
  display: inline-block;
  width: 100%;
  height: 18vh;
}
.nav-dark a {
  color: #66ffbc;
  font-size: 3vw;
  font-weight: bold;
  padding: 8px;
  text-decoration: none;
}
.nav-dark a.router-link-exact-active {
  background-color: #66ffbc;
  border-radius: 20px 20px;
  color: #fefefa;
  text-shadow: #007fff 0 0 10px;
}
@media screen and (min-width: 800px) {
  .nav a {
    font-size: 24px;
  }
  .nav-dark a {
     font-size: 24px;
  }
}
@media screen and (max-width: 630px) {
  .nav a {
    font-size: 3vw;
  }
  .nav-dark a {
     font-size: 3vw;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px 20px 20px 20px;
  color: #fefefa;
  padding: 8px;
  margin: 0;
  width: fit-content;
}
h2 {
  border-radius: 20px 20px 0px 0px;
  margin: auto;
}
h3 {
  border-radius: 10px 0px 20px 0px;
}
h4 {
  border-radius: 20px 20px 20px 20px;
}
h5 {
  border-radius: 10px 0px 20px 0px;
}
h6 {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 10px 10px;
  color: #2c3e50;
}
.h-wrap {
  margin: 0 auto;
  padding-bottom: 25px;
  width: fit-content;
}
.h-light {
  text-shadow: #66ffbc 1px 1px;
}
.h-dark {
  text-shadow: #007fff 1px 1px;
}

.view {
  background-image: url('./assets/img/bkg-dark-1.jpg');
  background-repeat: repeat;
  background-size: 256px;
  box-shadow: 0px 0px 10px 0px #2c3e50 inset;
  padding-top: 2vh;
  padding-left: 3vw;
  padding-right: 3vw;
  min-height: 82vh;
}
.view-dark {
  background-image: url('./assets/img/bkg-light-1.jpg');
  background-repeat: repeat;
  background-size: 256px;
  box-shadow: 0px 0px 10px 0px #2c3e50 inset;
  padding-top: 2vh;
  padding-left: 2vw;
  padding-right: 2vw;
  min-height: 82vh;
}

.content {
  background-color: aliceblue;
  border-radius: 5px 5px 5px 5px;
  margin: 0 auto;
  padding: 10px;
  width: fit-content;
  min-width: 200px;
  max-width: 1400px;
}
.content-dark {
  background-color: #2c3e50;
  border-radius: 5px 5px 5px 5px;
  margin: 0 auto;
  padding: 10px;
  width: fit-content;
  min-width: 200px;
  max-width: 1400px;
}
.content a {
  color: #007fff;
}
.content-dark a {
  color: #66ffbc;
}

.tile-list {
  justify-content: center;
  display: flex;
  flex-flow: wrap;
  width: 100%;
}
</style>