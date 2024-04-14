import axios from 'axios';

// Get CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

const apiClient = axios.create({
  baseURL: 'https://board-games-api-school-7a1eeb2c4b6f.herokuapp.com/api',
  withCredentials: true, // This should be true to send cookies and headers
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': csrfToken, // Set the CSRF token here for the client
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