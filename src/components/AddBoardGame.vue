<template>
    <div>
        <input v-model="newBoardGame.name" placeholder="Naam van bordspel">
        <input v-model="newBoardGame.min_players" type="number" placeholder="Min spelers">
        <input v-model="newBoardGame.max_players" type="number" placeholder="Max spelers">
        <input v-model="newBoardGame.complexity" type="number" placeholder="Complexity">
        <!-- Voeg hier andere inputvelden toe voor de eigenschappen van je bordspel -->
        <button @click="addBoardGame">Add Board Game</button>
    </div>
</template>


<script>
import api from '@/api/api'; // Zorg ervoor dat het pad overeenkomt met waar je API-client zich bevindt

export default {
    data() {
        return {
            newBoardGame: {
                name: '',
                min_players: 0,
                max_players: 0,
                complexity: 0
                // Voeg hier andere velden toe die je bordspel nodig heeft
            },
            csrfToken: '' // Initialize csrfToken
        };
    },
    mounted() {
        // Set the csrfToken once the component is mounted and the DOM is fully loaded
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        if (csrfTokenMeta) {
            this.csrfToken = csrfTokenMeta.getAttribute('content');
        }
    },
    methods: {
        addBoardGame() {
            if (this.csrfToken) {
                api.createBoardGame(this.newBoardGame, this.csrfToken)
                    .then(response => {
                        console.log('Board game added!', response.data);
                    })
                    .catch(error => {
                        console.error('There was an error adding the board game:', error.response);
                    });
            } else {
                console.error('CSRF token not found');
            }
        },
    },
};
</script>