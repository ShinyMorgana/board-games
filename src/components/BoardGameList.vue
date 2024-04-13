<template>
  <div class="board-games-container">
    <h1 class="title">Board Games</h1>
    <table class="board-games-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Min Players</th>
          <th>Max Players</th>
          <th>Complexity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="boardGame in boardGames" :key="boardGame.id">
          <td>{{ boardGame.name }}</td>
          <td>{{ boardGame.min_players }}</td>
          <td>{{ boardGame.max_players }}</td>
          <td>{{ boardGame.complexity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
  import api from '@/api/api';
  
  export default {
    data() {
      return {
        boardGames: []
      };
    },
    mounted() {
      this.getBoardGames();
    },
    methods: {
      getBoardGames() {
        api.getBoardGames()
          .then(response => {
            this.boardGames = response.data;
          })
          .catch(error => {
            console.error('There was an error:', error.response);
          });
      }
    }
  };
  </script>

<style scoped>
.board-games-container {
  padding: var(--section-gap);
  background-color: var(--color-background);
}

.title {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.board-games-table {
  width: 100%;
  border-collapse: collapse;
}

.board-games-table th,
.board-games-table td {
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.board-games-table th {
  background-color: var(--color-detail);
  color: var(--color-background);
}

.board-games-table tr:hover td {
  background-color: var(--color-background-mute);
}
</style>
