<template>
  <div class="sec-wrap">
    <div v-bind:class="[dark ? 'content-dark' : 'content']">
      <h1>RestHUB</h1>
      <h2>Proposal</h2>
      <div class="pdf-cont">
        <embed src="../../../Elnitski_Project_Proposal.pdf" type="application/pdf" width="100%" height="900px" />
      </div>
      <br>
      <h2>Conceptual Design</h2>
      <div class="pdf-cont">
        <embed src="../../../Elnitski_Project_Proposal.pdf" type="application/pdf" width="100%" height="900px" />
      </div>
      <br>
      <h2>Planning Estimate</h2>
      <div class="pdf-cont">
        <embed src="../../../Elnitski_Project_Proposal.pdf" type="application/pdf" width="100%" height="900px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
  data() {
    return {
      pdf1: 'http://localhost:8080/Elnitski_Project_Proposal.pdf',
      pdf2: 'http://localhost:8080/Elnitski_Conceptual_Design.pdf',
      pdf3: 'http://localhost:8080/Elnitski_Project_Estimate.pdf',
    }
  },
  methods: {
    getPDF: function(name) {
      var link = this.publicPath.concat(name);
      return link;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.pdf-cont {
  width: 1000px;
  height: 100vh;
}
.pdf {
  width: 100%;
}
</style>
