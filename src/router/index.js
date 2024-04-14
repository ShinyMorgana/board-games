
import { createRouter, createWebHistory } from 'vue-router';
import AddBoardGame from '../components/AddBoardGame.vue';
import BoardGamesPage from '../components/BoardGamesPage.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/board-games', component: BoardGamesPage },
  { path: '/register', component: Register },
  { path: '/add', component: AddBoardGame }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;