<template>
  <div id="app">
    <!-- Phobos-style Navbar -->
    <nav class="phobos-nav">
      <div class="nav-container">
        <router-link :to="{ name: 'HomePage' }" class="nav-link"><b>Basic</b></router-link>
        <router-link :to="{ name: 'ButtonDemoPage' }" class="nav-link"><b>Button</b></router-link>
        <router-link :to="{ name: 'FlexPage' }" class="nav-link"><b>Layout</b></router-link>
        <router-link :to="{ name: 'GridPage' }" class="nav-link"><b>Griddy</b></router-link>
        <router-link :to="{ name: 'MediaPage' }" class="nav-link"><b>Media</b></router-link>
        <router-link :to="{ name: 'UserList' }" class="nav-link"><b>Archives</b></router-link>
        <router-link :to="{ name: 'UserForm' }" class="nav-link"><b>Styled Form</b></router-link>
        <router-link :to="{ name: 'ResumePage' }" class="nav-link"><b>Profile</b></router-link>
      </div>
    </nav>

    <!-- Main Dynamic Route Viewport -->
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: #09090b; /* Zinc-950 */
  color: #fafafa;
}

.phobos-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
  background: rgba(24, 24, 27, 0.6);
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-link {
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.03);
  color: #a1a1aa;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover, .router-link-exact-active {
  background-color: rgba(255, 215, 0, 0.08);
  color: #fbbf24;
  border-color: rgba(251, 191, 36, 0.3);
  transform: translateY(-1px);
}

main {
  min-height: 80vh;
  padding-bottom: 40px;
}
</style>
