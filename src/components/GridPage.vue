<template>
  <div class="grid-page">
    <div class="grid-container">
      <header>
        <span class="label">SYSTEM_CORE</span>
        <h1>Phobos</h1>
      </header>

      <div class="sidenav">
        <span class="label">NAVIGATION</span>
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
        <span class="label">CENTRAL_ARCHIVE</span>
        <h2>Main</h2>
        <p>A sanctuary built to host texts and contemplative archives of the Phobos project.</p>
        <blockquote class="phobos-quote">
          "This is not true of Zoe. [...] The traveler roams all around and has nothing but doubts [...] Zoe is the place of indivisible existence."
          <br><em class="attribution">- Italo Calvino, <u>Invisible Cities</u></em>
        </blockquote>

        <hr class="hairline">
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
        <span class="label">MARGINALIA</span>
        <p>I sought cold and when it came i scrambled for warmth.</p>
      </div>

      <footer>&copy; Nengasca, Renzo D.:WD303</footer>
    </div>

    <div class="footer-note">&copy; Nengasca, Renzo D.:WD303</div>
  </div>
</template>

<script setup>
// Snowflakes removed for architectural precision
</script>

<style scoped>
.grid-page {
  margin: 0;
  padding: 40px 20px;
  font-family: 'Courier New', Courier, monospace;
  color: #d3d8d3;
  background: linear-gradient(rgba(5, 8, 8, 0.85), rgba(5, 8, 8, 0.85)), url('/plg.webp') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}

.label {
  font-family: 'Geist Mono', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(202, 165, 82, 0.4);
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header'
    'sidenav main'
    'sidenav sidebar'
    'footer footer';
  grid-template-columns: 250px 1fr;
  gap: 0;
  max-width: 1200px;
  margin: auto;
  background-color: #0a0a0a;
  border: 1px solid rgba(202, 165, 82, 0.3);
  border-radius: 0;
}

header, .sidenav, main, .sidebar, footer {
  padding: 30px;
  border-radius: 0;
}

header {
  grid-area: header;
  background-color: #0a0a0a;
  color: #caa552;
  text-align: center;
  border-bottom: 1px solid rgba(202, 165, 82, 0.3);
}

.sidenav {
  grid-area: sidenav;
  background-color: #0a0a0a;
  border-right: 1px solid rgba(202, 165, 82, 0.3);
}

.sidenav nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidenav nav a {
  display: block;
  padding: 8px 12px;
  background-color: transparent;
  color: #d3d8d3;
  text-decoration: none;
  border: 1px solid rgba(202, 165, 82, 0.2);
  border-radius: 0;
  font-size: 0.85em;
  transition: all 0.2s ease;
}

.sidenav nav a:hover {
  background-color: rgba(202, 165, 82, 0.1);
  border-color: #caa552;
  color: #caa552;
}

main {
  grid-area: main;
  background-color: #0a0a0a;
}

.sidebar {
  grid-area: sidebar;
  background-color: #0a0a0a;
  border-top: 1px solid rgba(202, 165, 82, 0.3);
  border-left: 1px solid rgba(202, 165, 82, 0.3);
}

footer {
  grid-area: footer;
  background-color: #0a0a0a;
  text-align: center;
  color: rgba(202, 165, 82, 0.4);
  font-size: 12px;
  border-top: 1px solid rgba(202, 165, 82, 0.3);
  font-family: 'Geist Mono', monospace;
}

.phobos-quote {
  color: #d3d8d3;
  border-left: 2px solid #caa552;
  padding-left: 20px;
  margin: 20px 0;
  font-style: italic;
}

.attribution {
  color: rgba(202, 165, 82, 0.6);
  font-size: 0.9em;
}

.hairline {
  border: 0;
  border-top: 1px solid rgba(202, 165, 82, 0.2);
  margin: 30px 0;
}

.poem {
  color: #d3d8d3;
  font-family: 'Courier New', monospace;
  background-color: #050505;
  padding: 20px;
  border: 1px solid rgba(202, 165, 82, 0.2);
  border-radius: 0;
  white-space: pre-wrap;
}

.poem-author {
  font-size: 0.9em;
  color: rgba(202, 165, 82, 0.6);
  font-style: italic;
  text-align: right;
}

.footer-note {
  text-align: center;
  margin-top: 30px;
  color: rgba(202, 165, 82, 0.2);
  font-size: 11px;
  font-family: 'Geist Mono', monospace;
}
</style>
