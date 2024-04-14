import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://board-games-api-school-7a1eeb2c4b6f.herokuapp.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getBoardGames() {
    return apiClient.get('/boardgames');
  },
  createBoardGame(boardGameData) {
    return apiClient.post('/boardgames', boardGameData);
  },
};