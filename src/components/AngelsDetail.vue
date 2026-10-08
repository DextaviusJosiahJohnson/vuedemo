<template>
  <div class="angels-detail">
    <div class="content-container">
      <div class="text-section">
        <h1 class="angels-title">Angels</h1>
        <div class="angels-body">
          <p>For example, let us imagine the wings. Often the most dominant visual aspect of an angel in religious iconography, as well as typically the center of symbolic power in holy texts, the wings are very much the heart of the angel.</p>
          <p>While a human heart circulates blood to oxygenate the body's extremities, the angel's wings circulate divinity, grace, and judgment. They are what keep it aloft, in both a literal and metaphysical sense. It is the part most often found to be 'beating', as active and ever-reaching as their purpose would imply.</p>
          <p>The comparison is only strengthened when we consider also that the wings are most commonly aflame, radiant, or fearsome in design, making them additionally a locus of actual, symbolic heat. It is easy to think of the halo as the mind or higher thought of the angel, though this comparison is tenuous. A contrast: the function in analog of the angel's eyes should be immediate clear.</p>
          <p>Senses to the world for hours at a time, seeing all, recording all, judging all. In this state of eternal vigilance, they will spend their entire existence. Anything might cry out, curse, pray in whispers, and they would know. We can only pray that the angel will not judge us as it sees. In this way, the gaze of an angel seems less like empathy and more like flame. For it is here that the angel is most likely to betray us. It is here that we place ourselves most at the angel's mercy and spend each day hoping it will not strike down.</p>
        </div>
        <footer class="angels-footer">
          &copy; Nengasca, Renzo D.: WD303
        </footer>
      </div>
      <div class="visual-section">
        <router-link to="/angels/final" class="angel-link">
          <img src="/angel.png" alt="Angel Detail" class="angel-img detail">
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.angels-detail {
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

.angel-img {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.angel-img.detail {
  filter: grayscale(100%) contrast(120%);
  box-shadow: 0 0 50px rgba(255,255,255,0.1);
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
