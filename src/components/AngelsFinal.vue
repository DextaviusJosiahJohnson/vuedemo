<template>
  <div class="angels-final">
    <div class="content-container">
      <div class="text-section">
        <h1 class="angels-title">Angels</h1>
        <div class="angels-body">
          <p>I dreamed that there were wings growing all over me. And they are on me, and within me. Plumes erupting from my spine, tendons splitting open like soft fruit. Each feather weeps light but it burns me. I try to scream, but I have no mouth—only a ring of golden eyes spinning where my face once was. I kneel, or perhaps I am falling. Trumpets blare behind my teeth. I see a host descending, not from heaven, but from behind the veil of stars. They do not walk. They unfold.</p>
          <p>A seraph presses its many faces against mine. Its mouths do not move, but I hear its voice in my marrow. It names me backwards, and my bones creak with the remembering. My thoughts peel away like wax under flame. I am becoming a vessel, emptied of self. The angel steps into me—through me—and my ribs unfasten like a gate. It breathes some like oil. It breathes fire through my lungs and the sound is fire. I feel every hymn that was ever sung, played in reverse, in tones that twist the soul.</p>
          <p>I want to beg, to repent, to vanish, but the wings keep growing. They are inside my skull, behind my eyes, coiling like roots through soft earth. My spine is no longer mine. The feathers pulse with memory—not mine, but older—primordial grief and holy war. I can see every sin I've ever made written in the wet light on the floor. I do not understand, and I am punished for it. The angel is dissecting me with love. Its grace is a—</p>
        </div>
        <footer class="angels-footer">
          &copy; Nengasca, Renzo D.: WD203
        </footer>
      </div>
      <div class="visual-section">
        <img src="/angel.png" alt="Angel Final" class="angel-img final">
      </div>
    </div>
  </div>
</template>

<style scoped>
.angels-final {
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

.angel-img.final {
  filter: grayscale(100%) contrast(130%);
  box-shadow: 0 0 60px rgba(255, 0, 0, 0.1);
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
