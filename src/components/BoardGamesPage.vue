<template>
    <div class="board-games-page">
      <h1 class="title">Board Games List</h1>
      <BoardGameList />
    </div>
  </template>
  
  <script>
  import BoardGameList from './BoardGameList.vue';
  
  export default {
    components: {
      BoardGameList
    }
  };
  </script>
  
  <style scoped>
.board-games-page {
  padding: var(--section-gap);
  background-color: var(--color-background);
}

.title {
  color: var(--color-heading);
  text-align: center;
  margin-bottom: 2rem;
}
</style>
