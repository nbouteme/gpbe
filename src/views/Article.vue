<template>
  <div>
    <router-link :to="url">
      <h2>{{title}}</h2>
    </router-link>
    <div v-html="content"></div>
  </div>
</template>

<script lang="ts">
import VueMarkdown from "vue-markdown";

import { Component, Vue, Watch } from "vue-property-decorator";
import { tryGetArticle } from "@/gpbe";
import showdown from 'showdown';

showdown.setFlavor("github");
showdown.setOption('metadata', true);

@Component({
  components: {
    VueMarkdown
  }
})
export default class Article extends Vue {
  content = '';
  title = '';
  url = '';
  async mounted() {
    let name = this.$route.params.path;
    let fullarticle = await tryGetArticle(name);
    let md = atob(fullarticle.content);
    let conv = new showdown.Converter();
    this.content = conv.makeHtml(md);
    let meta = conv.getMetadata() as {
      title: string;
      date: string;
    };
    this.title = meta.title;
    this.url = window.location.href;
  }
}
</script>
