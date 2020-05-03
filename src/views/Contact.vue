<template>
  <div>
    <div class="h-wrap">
      <h1 v-bind:class="[dark ? 'h-dark' : 'h-light']">Contact me!</h1>
    </div>
    <div class="con-form">
      <form v-bind:class="[dark ? 'content-dark' : 'content']" @submit.prevent="handleSubmit">
        <tr>
          <label>Name</label>
          <input type="text" v-model="message.name" id="name">
        </tr>
        <tr>
          <label>Email</label>
          <input type="text" v-model="message.email" id="email">
        </tr>
        <tr>
          <label>Subject</label>
          <input type="text" v-model="message.subject" id="subject">
        </tr>
        <tr>
          <label>Message</label>
          <input type="text" v-model="message.message" id="message">
        </tr>
        <tr>
          <input type="submit">
        </tr>
      </form>
    </div>
  </div>
</template>

<script>
const API_URL = 'http://localhost:4000/messages';
export default {
  props: {
    dark: Boolean
  },
  data() {
    return {
      message: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.message);
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map((detail) => detail.message)
              .join('. ');
            this.error = error;
          } else {
            this.error = '';
            this.showMessageForm = false;
          }
        });
    },
  },
};
</script>

<style>
.con-form {
  padding-top: 50px;
  width: 100%;
}

#message {
  width: 100%;
  height: 50px;
}

label {
  display: block;
}

tr {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
</style>