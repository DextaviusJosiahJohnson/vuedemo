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
        <router-link :to="{ name: 'MiniProjectPage' }" class="nav-link"><b>MiniProj</b></router-link>
        <router-link :to="{ name: 'UserList' }" class="nav-link"><b>Archives</b></router-link>
        <router-link :to="{ name: 'UserForm' }" class="nav-link"><b>Styled Form</b></router-link>
        <router-link :to="{ name: 'ProfilePage' }" class="nav-link"><b>Profile</b></router-link>
        <router-link :to="{ name: 'ResumePage' }" class="nav-link"><b>Resume</b></router-link>
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
  font-family: 'Courier New', Courier, monospace;
  background: #050808;
  color: #d3d8d3;
}

.phobos-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 40px 0;
  background: rgba(12, 18, 18, 0.4);
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-link {
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.02);
  color: #d8d8c0;
  text-decoration: none;
  border: 1px solid rgba(200, 200, 200, 0.1);
  border-radius: 10px;
  font-weight: 600;
  transition: 0.25s ease;
}

.nav-link:hover, .router-link-exact-active {
  background-color: rgba(255, 215, 0, 0.1);
  color: gold;
  border-color: gold;
  transform: scale(1.06);
  text-shadow: 0 0 6px rgba(255, 215, 0, 0.3);
}

main {
  min-height: 80vh;
}
</style>
