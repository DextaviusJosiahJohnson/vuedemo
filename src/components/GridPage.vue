<template>
  <div class="grid-page">
    <div class="grid-container">
      <header><h1>Phobos</h1></header>

      <div class="sidenav">
        <h3>Navigation</h3>
        <nav>
          <router-link :to="{ name: 'HomePage' }">Basic</router-link>
          <router-link :to="{ name: 'ButtonDemoPage' }">Button</router-link>
          <router-link :to="{ name: 'FlexPage' }">Layout</router-link>
          <router-link :to="{ name: 'GridPage' }">Griddy</router-link>
          <router-link :to="{ name: 'MediaPage' }">Media</router-link>
          <router-link :to="{ name: 'UserList' }">Archives</router-link>
          <router-link :to="{ name: 'UserForm' }">Styled Form</router-link>
          <router-link :to="{ name: 'ResumePage' }">Profile</router-link>
        </nav>
      </div>

      <main>
        <h2>Main</h2>
        <p>A sanctuary built to host texts and contemplative archives of the Phobos project.</p>
        <blockquote>
          "This is not true of Zoe. [...] The traveler roams all around and has nothing but doubts [...] Zoe is the place of indivisible existence."
          <br><em>- Italo Calvino, <u>Invisible Cities</u></em>
        </blockquote>

        <hr>
        <h3>A Snowy Night / All Was Well</h3>
        <pre class="poem">
The winter breeze begins to blow,
It carries gently falling snow.
The first of many winter moons
Shines brightly as the card'nal croons.
The charming bird now sings alone
A lullaby for snow and stone.
        </pre>
        <p class="poem-author">– Naktigonis</p>
      </main>

      <div class="sidebar">
        <h3>Notes</h3>
        <p>I sought cold and when it came i scrambled for warmth.</p>
      </div>

      <footer>&copy; Nengasca, Renzo D.:WD303</footer>
    </div>

    <div class="footer-note">&copy; Nengasca, Renzo D.:WD303</div>
    <div class="snow-container">
      <div v-for="n in 25" :key="n" class="flake" :style="generateSnowStyle()">❄</div>
    </div>
  </div>
</template>

<script setup>
const generateSnowStyle = () => {
  return {
    left: Math.random() * 100 + 'vw',
    animationDuration: (5 + Math.random() * 10) + 's',
    fontSize: (10 + Math.random() * 14) + 'px'
  }
}
</script>

<style scoped>
.grid-page {
  margin: 0;
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  color: #e0f0f0;
  background: url('/plg.webp') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header'
    'sidenav main'
    'sidenav sidebar'
    'footer footer';
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
  background-color: rgba(20, 30, 40, 0.75);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

header, .sidenav, main, .sidebar, footer {
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

header {
  grid-area: header;
  background-color: rgba(30, 40, 60, 0.8);
  color: #d6d6ff;
  text-align: center;
  letter-spacing: 1px;
}

.sidenav {
  grid-area: sidenav;
  background-color: rgba(40, 55, 70, 0.7);
}

.sidenav h3 {
  margin-bottom: 10px;
}

.sidenav nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
}

.sidenav nav a {
  display: inline-block;
  padding: 8px 12px;
  background-color: rgba(60, 80, 100, 0.85);
  color: white;
  text-decoration: none;
  border: 2px solid rgba(120, 150, 180, 0.5);
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s ease;
  font-size: 0.8em;
  backdrop-filter: blur(3px);
}

.sidenav nav a:hover {
  background-color: #b8d4ff;
  color: #002244;
  transform: scale(1.05);
}

main {
  grid-area: main;
  background-color: rgba(255, 255, 255, 0.03);
  border-left: 4px solid rgba(255, 255, 255, 0.15);
  padding-left: 30px;
}

.sidebar {
  grid-area: sidebar;
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 2px solid rgba(255, 255, 255, 0.08);
}

footer {
  grid-area: footer;
  background-color: rgba(30, 40, 60, 0.8);
  text-align: center;
  color: #a0cfff;
  font-style: italic;
}

blockquote {
  color: #cddfff;
  border-left: 4px solid rgba(200, 220, 255, 0.3);
  padding-left: 15px;
  margin-left: 0;
  font-style: italic;
}

.poem {
  color: #cceeff;
  font-family: 'Courier New', monospace;
  background-color: rgba(255,255,255,0.02);
  padding: 10px;
  border-radius: 10px;
  white-space: pre-wrap;
}

.poem-author {
  font-size: 0.9em;
  color: #a0cfff;
  font-style: italic;
}

.footer-note {
  text-align: center;
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
  font-size: 0.9em;
}

.flake {
  position: fixed;
  top: -10px;
  color: white;
  font-size: 1em;
  user-select: none;
  animation: snow 10s linear infinite;
  opacity: 0.6;
  pointer-events: none;
}

@keyframes snow {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(360deg); }
}
</style>
