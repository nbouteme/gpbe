<template>
<div>
    <router-link to="/"><h1>Blog</h1></router-link>
    <hr>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  self = window.location.origin;
}
</script>

<style scoped>
h1, h3 {
  text-align: center;
}

h1 {
  font-size: 3em;
}
</style>
