<template>
    <nav class="navbar">
      <div class="container">
        <a href="/" class="navbar-brand">Board Game Group</a>
        <div class="navbar-menu">
          <a href="/" class="navbar-item">Home</a>
          <a href="/board-games" class="navbar-item">Board Games</a>
          <!-- Future navigation items go here -->
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
    .navbar {
      background-color: var(--color-background); /* Use the color variable from your palette */
      padding: 1rem 2rem;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar-brand {
      font-weight: bold;
      font-size: 1.5rem;
      color: var(--color-text);
    }
    .navbar-menu {
      display: flex;
    }
    .navbar-item {
      margin-left: 1rem;
      color: var(--color-text);
      text-decoration: none;
    }
    .navbar-item:hover {
      color: var(--color-text-hover);
    }
  </style>