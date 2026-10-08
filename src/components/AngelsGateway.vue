<template>
  <div class="angels-gateway">
    <div class="content-container">
      <div class="text-section">
        <h1 class="angels-title">Angels</h1>
        <div class="angels-body">
          <p>Since as early as the Neolithic era, humankind has defined itself by its beliefs. Beings for worship, beings for vengeance, for protection, for judgment. Even beings to commemorate the dead.</p>
          <p>But of all the entities mankind has imagined for itself, there is little doubt that the angel is that which it relies upon most completely for its sense of continued moral order. The angel is one of the key elements that separates modern humanity from its more primitive antecedents. No other creature invents such guardians for the soul, nor regards such entities with such reverence and import. Why do human beings of our modern age foster this tremendous sympathy towards their angels?</p>
          <p>There are many reasons, of course, but perhaps it is in some small part to seeing them as a reflection of ourselves.</p>
          <p>The anatomy of the angel is such that this analogy is less superficial then it may first seem. To carry it further, if we were to examine an angel as we might a divine creature laid bare, we would find ourselves able to isolate and describe its various appendages and their functions in a decidedly anatomical fashion. There is even a fair number of direct comparisons to be drawn between those 'organs' of an angel and those of the human body.</p>
        </div>
        <footer class="angels-footer">
          &copy; Nengasca, Renzo D.: WD203
        </footer>
      </div>
      <div class="visual-section">
        <router-link to="/angels/detail" class="angel-link">
          <img src="/angel.png" alt="Angel" class="angel-img">
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.angels-gateway {
  background: #000;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #fff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  align-items: center;
}

.angels-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
}

.angels-body p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 20px;
  font-weight: 300;
  text-align: justify;
}

.angels-footer {
  margin-top: 40px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #666;
}

.visual-section {
  display: flex;
  justify-content: center;
}

.angel-link {
  text-decoration: none;
  display: block;
  transition: transform 0.5s ease;
}

.angel-img {
  width: 100%;
  max-width: 500px;
  height: auto;
  filter: grayscale(100%) contrast(110%);
  transition: filter 0.5s ease;
}

.angel-link:hover {
  transform: scale(1.02);
}

.angel-link:hover .angel-img {
  filter: grayscale(0%) contrast(100%);
}

@media (max-width: 768px) {
  .content-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .angels-body p {
    text-align: center;
  }
}
</style>
