<template>
  <div v-bind:class="[dark ? 'nav-dark' : 'nav']">
    <img v-show="!dark" src="../assets/img/logo.png">
    <img v-show="dark" src="../assets/img/logo-dark.png">
    <table id="util">
      <tr><input type="text" placeholder="Search (coming soon)" class="search"></tr>
      <tr><router-link to="/contact"  v-bind:class="[dark ? 'con-btn-dark' : 'con-btn-light']">Contact</router-link></tr>
    </table>
    <table id="ctrl">
      <tr class="item"><router-link to="/" :dark="dark">Home</router-link></tr>
      <tr class="item"><router-link to="/portfolio" :dark="dark">Portfolio</router-link></tr>
      <tr class="item"><router-link to="/feed" :dark="dark">Feed</router-link></tr>
      <tr class="item"><router-link to="/about" :dark="dark">About</router-link></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    dark: Boolean
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  left: 0;
  height: 18vh;
  position: absolute;
}

input {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 20px 20px;
  padding: 10px;
  max-width: 40vw;
}

#util {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
  max-width: fit-content;
}

.search {
  margin-right: 1vw;
}

#ctrl {
  margin: 0 auto;
  padding-top: 80px;
  overflow-y: hidden;
  white-space: nowrap;
}
#ctrl .item {
  display: inline-block;
  padding-left: 3vw;
  padding-right: 3vw;
}
@media screen and (max-width: 1200px) {
  #ctrl {
    margin-right: 10%;
    padding-top: 80px;
    overflow-y: hidden;
    white-space: nowrap;
  }
}
@media screen and (max-width: 800px) {
  #ctrl {
    margin-right: 0;
    padding-top: 80px;
    overflow-y: hidden;
    white-space: nowrap;
  }
  #ctrl .item {
    display: inline-block;
    padding-left: 2vw;
    padding-right: 2vw;
  }
}
@media screen and (max-width: 600px) {
  #ctrl .item {
    display: inline-block;
    padding-left: 0.8vw;
    padding-right: 0.8vw;
  }
}

.con-btn-light {
  background: #66ffbc;
  border-radius: 20px 20px;
  color: #007fff;
  text-shadow: #fefefa 0 0 10px;
  margin-right: 1vw;
}
.con-btn-dark {
  background: #007fff;
  border-radius: 20px 20px;
  color: #66ffbc;
  text-shadow: #fefefa 0 0 10px;
  margin-right: 1vw;
}
</style>
