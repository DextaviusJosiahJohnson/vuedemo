<template>
  <div class="flex-page">
    <div class="editorial-grid">
      <div class="structural-line"></div>
      <div class="content-column">
        <span class="label">MANIFESTO</span>
        <div class="manifesto-text">
          <p>“The man who is traveling and does not yet know the city awaiting him along his route wonders what the palace will be like, the barracks, the mill, the theater, the bazaar. In every city of the empire every building is different and set in a different order: but as soon as the stranger arrives at the unknown city [...], he immediately distinguishes which are the princes’ palaces, the high priests’ temples, the tavern, the prison, the slum.

          This – some say – confirms the hypothesis that each man bears in his mind a city made only of differences, a city without figures and without form, and the individual cities fill it up.

          This is not true of Zoe. [...] The traveler roams all around and has nothing but doubts: he is unable to distinguish the features of the city, the features he keeps distinct in his mind also mingle. He infers this: if existence in all its moments is all of itself, Zoe is the place of indivisible existence. But why, then, does the city exist? What line separates the inside from the outside, the rumble of wheels from the howl of wolves?”</p>
          <em class="attribution">– Italo Calvino, "Invisible Cities"</em>
        </div>
      </div>
    </div>

    <footer>
      &copy; Nengasca, Renzo D.:WD303
    </footer>
  </div>
</template>

<style scoped>
.flex-page {
  margin: 0;
  padding: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/ly2.jpg') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Courier New', Courier, monospace;
  color: #caa552;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.editorial-grid {
  display: flex;
  flex: 1;
  position: relative;
  padding: 80px 40px;
}

.structural-line {
  width: 1px;
  background: rgba(202, 165, 82, 0.3);
  height: 100vh;
  position: absolute;
  left: 10%;
  top: 0;
}

.content-column {
  margin-left: 12%;
  max-width: 600px;
  z-index: 1;
}

.label {
  font-family: 'Geist Mono', monospace;
  font-size: 12px;
  letter-spacing: 4px;
  color: #caa552;
  display: block;
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: bold;
}

.manifesto-text {
  line-height: 1.8;
  font-size: 18px;
}

.manifesto-text p {
  margin: 0;
  white-space: pre-line;
}

.attribution {
  display: block;
  margin-top: 30px;
  color: rgba(202, 165, 82, 0.7);
  font-style: italic;
  font-size: 16px;
}

footer {
  text-align: right;
  color: rgba(202, 165, 82, 0.3);
  font-size: 12px;
  padding: 40px;
  font-family: 'Geist Mono', monospace;
}

@media (max-width: 768px) {
  .structural-line {
    left: 20px;
  }
  .content-column {
    margin-left: 40px;
    padding-right: 20px;
  }
  .editorial-grid {
    padding: 40px 20px;
  }
}
</style>
