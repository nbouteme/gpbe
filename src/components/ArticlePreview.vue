<template>
<div>
  <h2><router-link :to="url">{{title}}</router-link></h2>
  <div v-html="content"></div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { GithubRepoEntry, getArticle } from '@/gpbe';
import showdown from 'showdown';

showdown.setFlavor("github");
showdown.setOption('metadata', true);

@Component
export default class ArticlePreview extends Vue {
  @Prop()
  article!: GithubRepoEntry;

  content = '';

  title = '';
  url = '';
  
  @Watch("article")
  async reloadPreview() {
    let fullarticle = await getArticle(this.article);
    let md = atob(fullarticle.content);
    let conv = new showdown.Converter;
    this.content = conv.makeHtml(md);
    let meta = conv.getMetadata() as {
      title: string,
      date: string
    };
    this.title = meta.title;
    this.url = `/${this.article.path}`;
  }

  mounted() {
    this.reloadPreview();
  }
}
</script>

<style scoped>
h1, h2, h3 {
  text-align: center;
}

h1 {
  font-size: 3em;
}
</style>
