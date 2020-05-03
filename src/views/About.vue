<template>
  <div>
    <div class="h-wrap">
      <h1 v-bind:class="[dark ? 'h-dark' : 'h-light']">About Me!</h1>
    </div>
    <div class="about">
      <mq-layout mq="lg" v-bind:class="[dark ? 'content-dark' : 'content']" style="display: flex; flex-direction: row;">
        <img src="../assets/img/me.jpg" class="headshot">
        <div class="desc">
          I was born with a firm belief in repeatable evidence and raised
          to give every situation as much effort as is appropriate.  These
          factors were key in developing the natural risk analysis and
          problem solving skills that I relied on as a base for my
          professional education.  I graduated from Penn State University
          in 2019 with a Bachelor’s of Science in Information Sciences and
          Technologies.  Being creatively oriented, I pursued the Design
          and Development option which focused heavily on coding classes.
          I also branched out and completed many other IST classes and
          easily caught my stride in managing full-scale technology
          projects from conception to implementation using my abilities to
          visualize an end goal and all of the actions required to achieve
          it at its fullest potential.
        </div>
      </mq-layout>
      <mq-layout :mq="['util', 'sm']" v-bind:class="[dark ? 'content-dark' : 'content']" style="display: flex; flex-flow: wrap;">
        <img src="../assets/img/me.jpg" class="headshot-sm">
        <div class="desc-sm">
          I was born with a firm belief in repeatable evidence and raised
          to give every situation as much effort as is appropriate.  These
          factors were key in developing the natural risk analysis and
          problem solving skills that I relied on as a base for my
          professional education.  I graduated from Penn State University
          in 2019 with a Bachelor’s of Science in Information Sciences and
          Technologies.  Being creatively oriented, I pursued the Design
          and Development option which focused heavily on coding classes.
          I also branched out and completed many other IST classes and
          easily caught my stride in managing full-scale technology
          projects from conception to implementation using my abilities to
          visualize an end goal and all of the actions required to achieve
          it at its fullest potential.
        </div>
      </mq-layout>
    </div>
    <h2 v-bind:class="[dark ? 'h-dark' : 'h-light']">Resume</h2>
    <div v-bind:class="[dark ? 'content-dark' : 'content']" style="width: 56vw;">
      <embed src="../../Elnitski_Resume_Redacted.pdf" type="application/pdf" width="100%" height="1000px" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  },
};
</script>

<style scopoed>
.about {
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-bottom: 25px;
  width: 100%;
}

.desc {
  float: right;
  padding: 1%;
  text-align: left;
  width: 38vw;
}
.desc-sm {
  padding: 1%;
  text-align: left;
  width: 100%;
}

.headshot {
  float: left;
  border-radius: 20px 20px 20px 20px;
  max-width: 400px;
  min-width: 100px;
  max-height: 400px;
  min-height: 100px;
}
.headshot-sm {
  border-radius: 20px 20px 20px 20px;
  margin: auto;
  max-width: 400px;
  min-width: 100px;
  max-height: 400px;
  min-height: 100px;
}
</style>