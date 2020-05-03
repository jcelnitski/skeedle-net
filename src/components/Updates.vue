<template>
  <div id="updates">
    <mq-layout mq="sm" class="updates-sm">
      <colgroup>
        <h2 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Latest Updates </h2>
        <table id="posts" v-bind:class="[dark ? 'content-dark' : 'content']">
          <tr v-for="post in posts" :key="post.title" class="post">
            <h4> {{ post.title }} </h4>
            <p class="feed-desc">
              {{ post.desc }}
            </p>
          </tr>
        </table>
      </colgroup>
      <colgroup>
        <h2 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Recent Projects </h2>
        <table id="projects" v-bind:class="[dark ? 'content-dark' : 'content']">
          <div class="tile-list">
            <Tile v-for="project in projects" :key="project.title" :project="project">
              <a href="#app"></a>
            </Tile>
          </div>
        </table>
      </colgroup>
    </mq-layout>
    <mq-layout mq="lg" class="updates-lg">
      <colgroup>
        <h2 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Latest Updates </h2>
        <table id="posts" v-bind:class="[dark ? 'content-dark' : 'content']">
          <tr v-for="post in posts" :key="post.title" class="post">
            <h4> {{ post.title }} </h4>
            <p class="feed-desc">
              {{ post.desc }}
            </p>
          </tr>
        </table>
      </colgroup>
      <colgroup>
        <h2 v-bind:class="[dark ? 'h-dark' : 'h-light']"> Recent Projects </h2>
        <table id="projects" v-bind:class="[dark ? 'content-dark' : 'content']">
          <div class="tile-list">
            <Tile v-for="project in projects" :key="project.title" :project="project" :dark="dark"></Tile>
          </div>
        </table>
      </colgroup>
    </mq-layout>
  </div>
</template>

<script>
import Tile from '@/components/Tile.vue';

export default {
  components: {
    Tile,
  },
  props: {
    dark: Boolean
  },
  data() {
    return {
      posts: [
        {
          title: 'Coming soon!',
          desc: 'New posts will appear here as general entries are posted in the Feed section of this website.'
        },
      ],
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
  },
  methods: {
    setDark: function() {
      this.dark = !this.dark;
    }
  }
}
</script>

<style scoped>
#updates {
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 85vw;
}
.updates-lg {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  width: 100%;
}
.updates-sm {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#posts {
  width: 30vw;
}

#projects {
  display: flex;
  flex-flow: wrap;
  width: 50vw;
}

.post {
  border-radius: 10px 10px 10px 10px;
  background-color: rgba(0, 0, 0, 0.2);
  line-height: 1;
  text-align: left;
}

.feed-desc {
  font-size: 12px;
  padding: 8px;
}

.proj-desc {
  font-size: 14px;
  padding-top: 80%;
}

@media screen and (max-width: 630px) {
  #posts {
    margin-bottom: 50px;
    width: 60vw;
  }

  #projects {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 50px;
    width: 80vw;
  }
}
</style>