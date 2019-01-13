<template>
  <div>
    <ArticlePreview v-for="(article, idx) in articles" 
                    :key="idx"
                    :article="article">
    </ArticlePreview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GithubRepoEntry, getArticles } from "@/gpbe";
import ArticlePreview from "@/components/ArticlePreview.vue";

@Component({
  components: {
    ArticlePreview
  }
})
export default class Home extends Vue {
  articles: GithubRepoEntry[] = [];
  async created() {
    this.articles = await getArticles();
  }
}
</script>
