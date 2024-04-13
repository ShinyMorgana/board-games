
import { createRouter, createWebHistory } from 'vue-router';
import BoardGamesPage from '../components/BoardGamesPage.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/HelloWorld.vue'; // Assuming you have a Home.vue or similar for your homepage

const routes = [
  { path: '/', component: Login },
  { path: '/board-games', component: BoardGamesPage },
  { path: '/register', component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;