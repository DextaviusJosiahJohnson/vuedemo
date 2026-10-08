<template>
  <div class="home-page">
    <div class="cinematic-layout">
      <div class="visual-anchor">
        <div class="double-bezel">
          <div class="inner-core">
            <img src="/dukes.png" alt="duke" class="duke-img">
          </div>
        </div>
      </div>
      <div class="text-anchor">
        <div class="content-wrapper">
          <div class="eyebrow">Archive Project</div>
          <h1 class="title">PHOBOS</h1>
          <p class="subtitle">A Deepwoken Inspired Archive</p>
          <div class="quote-block">
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
    </div>
    <footer class="page-footer">
      &copy; Nengasca, Renzo D. &bull; WD303
    </footer>
  </div>
</template>

<style scoped>
.home-page {
  background: #050505;
  background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/thom.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 20px;
}

.cinematic-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  max-width: 1300px;
  margin: 0 auto;
  align-items: center;
}

.visual-anchor {
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.double-bezel {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px;
  border-radius: 2rem;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
}

.inner-core {
  background: #0a0a0a;
  border: 1px solid rgba(202, 165, 82, 0.2);
  border-radius: calc(2rem - 4px);
  overflow: hidden;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

.duke-img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  display: block;
  transition: transform 0.7s cubic-bezier(0.32, 0.72, 0, 1);
}

.double-bezel:hover .duke-img {
  transform: scale(1.05);
}

.text-anchor {
  position: relative;
}

.content-wrapper {
  max-width: 600px;
}

.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #caa552;
  margin-bottom: 16px;
  opacity: 0.8;
}

.title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: #fff;
  margin: 0;
  letter-spacing: -0.04em;
  line-height: 0.9;
}

.subtitle {
  color: #a1a1aa;
  font-size: 1.1rem;
  margin: 16px 0 40px 0;
  font-weight: 300;
  letter-spacing: -0.01em;
}

.quote-block {
  border-left: 2px solid #caa552;
  padding-left: 24px;
  margin-top: 40px;
}

.hero-quote {
  font-size: 1.4rem;
  line-height: 1.5;
  color: #e4e4e7;
  margin: 0 0 16px 0;
  font-style: italic;
  font-weight: 400;
}

.author {
  color: #71717a;
  font-size: 0.9rem;
  font-family: 'JetBrains Mono', monospace;
  margin: 0;
}

.page-footer {
  text-align: center;
  color: rgba(202, 165, 82, 0.4);
  font-size: 0.75rem;
  padding: 60px 0;
  font-family: 'JetBrains Mono', monospace;
}

@media (max-width: 768px) {
  .cinematic-layout {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
  .visual-anchor {
    order: -1;
  }
  .content-wrapper {
    margin: 0 auto;
  }
  .quote-block {
    border-left: none;
    border-top: 2px solid #caa552;
    padding-left: 0;
    padding-top: 24px;
  }
}
</style>
