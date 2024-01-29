// router/index.js
import AlbumList from '../components/AlbumList.vue';
import AlbumDetails from '../components/AlbumDetails.vue';


const routes = [
    { path: '/', component: AlbumList },
    { path: '/albums', component: AlbumList },
    { path: '/albums/:id', name: "albumDetails", component: AlbumDetails }

];

export default routes;