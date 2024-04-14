<template>
    <div>
        <input v-model="newBoardGame.name" placeholder="Naam van bordspel">
        <input v-model="newBoardGame.min_players" type="number" placeholder="Min spelers">
        <input v-model="newBoardGame.max_players" type="number" placeholder="Max spelers">
        <input v-model="newBoardGame.complexity" type="number" placeholder="Complexity">
        <button @click="addBoardGame">Add Board Game</button>
    </div>
</template>


<script>
import api from '@/api/api';

export default {
    data() {
        return {
            newBoardGame: {
                name: '',
                min_players: 0,
                max_players: 0,
                complexity: 0
            },
        };
    },
    methods: {
        addBoardGame() {
            // Construct your board game data object here, e.g.:
            const boardGameData = {
                name: this.newBoardGame.name,
                min_players: this.newBoardGame.min_players,
                max_players: this.newBoardGame.max_players,
                complexity: this.newBoardGame.complexity,
            };

            // Call the API to create a new board game
            api.createBoardGame(boardGameData)
                .then(response => {
                    console.log('Board game added!', response.data);
                })
                .catch(error => {
                    console.error('Error:', error.response);
                });
        },
    }
};
</script>
