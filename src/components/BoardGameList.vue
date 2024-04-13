<template>
    <div>
      <ul>
        <li v-for="boardGame in boardGames" :key="boardGame.id">{{ boardGame.name }}</li>
      </ul>
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