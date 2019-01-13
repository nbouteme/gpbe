<template>
  <div id="app">
    <Header/>
    <div id="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
@font-face {
  font-family: "Computer Modern";
  src: url("/cmunrm.otf");
}

body {
  font-family: "Computer Modern", sans-serif;
}

#app {
  width: 800px;
  margin: 0 auto 0 auto;
}

@media screen and (orientation: portrait) and (max-width: 480px) {
  #app {
    width: 100%;
  }
}

body {
  background-image: url("/img/bg.png");
  margin: 40px auto;
  line-height: 1.6;
  font-size: 1.4em;
  color: #444;
  padding: 0;
  font-family: "Computer Modern", serif;
}

#content {
  text-align: justify;
  padding: 0 3px 0 3px;
}

a:visited {
    color: inherit;
}

a:hover {
    color: #00ff99;
}

a {
    text-decoration: none;
}

h1,
h2,
h3 {
  line-height: 1.2;
}
</style>
