<template>
    <div>
    <NavBar />
    <router-view/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';

import AddBoardGame from './components/AddBoardGame.vue';
</script>