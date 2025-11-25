<template>
  <div class="layout">
    <header class="header">
      <nav class="navbar">
        <NuxtLink to="/" class="navbar-brand">FoodSmash</NuxtLink>
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/combinations" class="nav-link">Combinations</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <p>&copy; 2025 FoodSmash. All rights reserved.</p>
    </footer>
  </div>
</template>