<template>
  <div class="media-page">
    <div class="container">
      <div class="box">A thousand-year-old cathedral won't always be there.</div>
      <div class="box fade">Even mountains crumble slowly. And stars burn out.</div>
    </div>

    <div class="poem">
      <h2 style="color: var(--golden); margin-top: 0;">TIRIS</h2>
      <p>The bittersweet awareness that all things must end.</p>
      <p>Other times, the impermanence of everything around us feels haunting. To think that a thousand-year-old cathedral won't always be there. That entire cities can be forgotten in a manner of decades, vibrant languages dwindled into obscurity, fearsome gods relinquished to old books, old books turned to dust. How casually the world discards our work, with nothing but a shrug.</p>
      <p>The mountains too are steadily crumbling away, inch by inch, year by year, soon to be recycled back into the fiery mantle from which they came. Alas, even the world is not long for this world, soon to be swallowed up by the sun. Soon enough the stars will burn out, too, leaving little else but an echo of radiation, reverberating into a heatless void. And there will be no way to tell that time is passing at all.</p>
      <p><em>— John Koenig, The Dictionary of Obscure Sorrows</em></p>
    </div>

    <footer><em><b>&copy; Nengasca, Renzo D.:WD303</b></em></footer>
  </div>
</template>

<style scoped>
.media-page {
  margin: 0;
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  color: var(--text-light);
  background: linear-gradient(to bottom, var(--bg), #000);
  background-attachment: fixed;
  min-height: 100vh;
}

.container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
}

.box {
  background-color: var(--blue);
  color: var(--golden);
  padding: 20px;
  flex: 1;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(45, 75, 90, 0.1);
  transition: opacity 1.5s ease;
  border-radius: 10px;
}

.box.fade {
  opacity: 0.5;
}

.poem {
  max-width: 800px;
  margin: 40px auto;
  background-color: rgba(60, 80, 70, 0.05);
  padding: 30px;
  border-left: 5px solid rgba(160, 200, 180, 0.2);
  font-style: italic;
  color: var(--text-fade);
  line-height: 1.6;
  animation: dissolve 25s ease-in forwards;
}

@keyframes dissolve {
  0% { opacity: 1; filter: blur(0); }
  100% { opacity: 0.4; filter: blur(2px); }
}

footer {
  text-align: center;
  margin-top: 50px;
  color: rgba(180, 200, 180, 0.2);
  font-style: italic;
}

/* CSS Variables for this component */
:root, .media-page {
  --bg: #0b1a16;
  --green: #2e4d3b;
  --blue: #1d2d3f;
  --purple: #3a2e4f;
  --text-light: #cfd8d2;
  --text-fade: #99a9a2;
  --golden: #cabf7e;
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
  .box {
    font-size: 14px;
  }
  .poem {
    padding: 20px;
    font-size: 0.9em;
  }
}
</style>
