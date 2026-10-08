<template>
  <div class="flex-page">
    <div class="quote-box">
      “The man who is traveling and does not yet know the city awaiting him along his route wonders what the palace will be like, the barracks, the mill, the theater, the bazaar. In every city of the empire every building is different and set in a different order: but as soon as the stranger arrives at the unknown city [...], he immediately distinguishes which are the princes’ palaces, the high priests’ temples, the tavern, the prison, the slum.

      This – some say – confirms the hypothesis that each man bears in his mind a city made only of differences, a city without figures and without form, and the individual cities fill it up.

      This is not true of Zoe. [...] The traveler roams all around and has nothing but doubts: he is unable to distinguish the features of the city, the features he keeps distinct in his mind also mingle. He infers this: if existence in all its moments is all of itself, Zoe is the place of indivisible existence. But why, then, does the city exist? What line separates the inside from the outside, the rumble of wheels from the howl of wolves?”

      <em>– Italo Calvino, "Invisible Cities"</em>
    </div>

    <div class="container">
      <div class="box">☽ <br><b>Whispers in the Slum</b><br><small>"He forgot which side of the door he was on."</small></div>
      <div class="box">⌘ <br><b>The Howl Beyond the Walls</b><br><small>"The silence speaks in symbols."</small></div>
      <div class="box">⚑ <br><b>The Line Between Rooms</b><br><small>"Some walls remember who built them."</small></div>
    </div>

    <footer>
      &copy; Nengasca, Renzo D.:WD203
    </footer>
  </div>
</template>

<style scoped>
.flex-page {
  margin: 0;
  padding: 20px;
  background: url('/ly2.jpg') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Courier New', Courier, monospace;
  color: gold;
  min-height: 100vh;
}

.quote-box {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 15px;
  max-width: 900px;
  margin: 0 auto 50px auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  line-height: 1.8;
  text-shadow: 1px 1px black;
  font-size: 17px;
}

.quote-box em {
  display: block;
  margin-top: 20px;
  color: rgba(255, 215, 100, 0.9);
  font-style: italic;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.box {
  background-color: black;
  color: gold;
  padding: 30px;
  flex: 1;
  text-align: center;
  border: 1px solid gold;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 217, 0, 0.3);
  transition: transform 0.3s ease;
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px gold;
}

footer {
  text-align: center;
  color: rgba(255, 217, 0, 0.233);
  font-style: italic;
  margin-top: 60px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
