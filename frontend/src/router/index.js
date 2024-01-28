// router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import AlbumList from '../components/AlbumList.vue';


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/albums', component: AlbumList },
    // other routes...
  ],
});