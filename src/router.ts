import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Article from './views/Article.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/:path(.*)',
      name: 'article',
      component: Article
    }, {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});
