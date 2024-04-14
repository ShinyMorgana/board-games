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
            api.createBoardGame(this.newBoardGame)
                .then(response => {
                    // Verwerk hier het succesvol toevoegen van het bordspel
                    console.log('Board game added!', response.data);
                })
                .catch(error => {
                    // Verwerk hier eventuele fouten
                    console.error('There was an error adding the board game:', error.response);
                });
        },
    },
};
</script>
