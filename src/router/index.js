
import { createRouter, createWebHistory } from 'vue-router';
import BoardGamesPage from '../components/BoardGamesPage.vue';
import Home from '../components/HelloWorld.vue'; // Assuming you have a Home.vue or similar for your homepage

const routes = [
  { path: '/', component: Home },
  { path: '/board-games', component: BoardGamesPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;