<template>
  <div class="home-page">
    <div class="hero-layout">
      <div class="anchor-section">
        <div class="image-wrapper">
          <img src="/dukes.png" alt="duke" class="duke-img">
        </div>
      </div>
      <div class="content-section">
        <div class="text-content">
          <h1 class="title">PHOBOS</h1>
          <p class="subtitle">A Deepwoken Inspired Archive Project</p>
          <blockquote class="hero-quote">
            "minsan pag wala si mama sa bahay,<br>
            gusto ko pumupunta sa likod,<br>
            nililibing ang sarili ko,<br>
            at nagkukunware na ako ay isang carrot."
          </blockquote>
          <p class="author">— Renzo D. Nengasca</p>
        </div>
      </div>
    </div>
    <footer class="page-footer">
      &copy; Nengasca, Renzo D. &bull; WD303
    </footer>
  </div>
</template>

<style scoped>
.home-page {
  background: #050505;
  /* Refined overlay: increased darkness for contrast, keeping essence */
  background-image: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/thom.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 60px;
  align-items: center;
}

.anchor-section {
  display: flex;
  justify-content: center;
  position: relative;
}

.image-wrapper {
  display: flex;
  justify-content: center;
}

.duke-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 0;
  border: 1px solid rgba(202, 165, 82, 0.3);
}

.content-section {
  position: relative;
  padding-left: 60px;
  /* Vertical hairline division */
  border-left: 1px solid rgba(202, 165, 82, 0.3);
}

.text-content {
  text-align: left;
}

.title {
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  letter-spacing: -0.05em;
  line-height: 1;
}

.subtitle {
  color: #a1a1aa;
  font-size: 1rem;
  margin: 12px 0 40px 0;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero-quote {
  font-size: 1.5rem;
  line-height: 1.6;
  color: #caa552;
  margin: 0 0 24px 0;
  font-style: italic;
  /* Removed the quote's own border to avoid visual clutter with the main hairline */
  padding-left: 0;
  border-left: none;
}

.author {
  color: #71717a;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
}

.page-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  color: rgba(202, 165, 82, 0.3);
  font-size: 0.85rem;
  padding: 40px 0;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
}

@media (max-width: 768px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 40px 20px;
    text-align: center;
  }
  .anchor-section {
    justify-content: center;
  }
  .content-section {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(202, 165, 82, 0.3);
    padding-top: 30px;
  }
  .text-content {
    text-align: center;
  }
  .title {
    font-size: 2.5rem;
  }
  .hero-quote {
    font-size: 1.25rem;
  }
}
</style>
