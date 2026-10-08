<template>
  <div class="resume-page">
    <div class="bento-grid">
      <!-- Identity Tile -->
      <div class="bento-tile identity-tile">
        <div class="double-bezel">
          <div class="inner-core">
            <img src="/dukes.png" alt="duke" class="profile-img">
            <div class="identity-text">
              <h1>Renzo D. Nengasca</h1>
              <p class="subtitle">3rd Year BS Web Development Student</p>
              <div class="contact-stack">
                <a href="mailto:renzo.nengasca@gmail.com" class="contact-link">Email</a>
                <a href="https://www.linkedin.com/in/renzo-nengasca-b80700382/" target="_blank" class="contact-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Tile -->
      <div class="bento-tile edu-tile">
        <div class="double-bezel">
          <div class="inner-core">
            <div class="eyebrow">Education</div>
            <h2 class="tile-title">Holy Angel University</h2>
            <p class="tile-text">Bachelor of Science in Web Development<br>Year 3 (Expected Graduation: 2027)</p>
          </div>
        </div>
      </div>

      <!-- Skills Tile -->
      <div class="bento-tile skills-tile">
        <div class="double-bezel">
          <div class="inner-core">
            <div class="eyebrow">Toolbox</div>
            <div class="skills-grid">
              <div class="skill-tag">HTML & CSS</div>
              <div class="skill-tag">Java</div>
              <div class="skill-tag">Python</div>
              <div class="skill-tag">Blender</div>
              <div class="skill-tag">Unity</div>
              <div class="skill-tag">Photoshop</div>
              <div class="skill-tag accent">Render</div>
              <div class="skill-tag accent">Vercel</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Tile -->
      <div class="bento-tile projects-tile">
        <div class="double-bezel">
          <div class="inner-core">
            <div class="eyebrow">Selected Works</div>
            <div class="projects-stack">
              <div class="project-item">
                <span class="project-name">Phobos Website</span>
                <p class="project-desc">A multi-page archive themed around shrine-like aesthetic</p>
              </div>
              <div class="project-item">
                <span class="project-name">Cahara Music Downloader</span>
                <a href="https://github.com/DextaviusJosiahJohnson/CaharaMusicDownloader" target="_blank" class="project-link">Source ↗</a>
              </div>
              <div class="project-item">
                <span class="project-name">Blender Environments</span>
                <p class="project-desc">Stylized 3D worlds using Blender</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certs Tile -->
      <div class="bento-tile certs-tile">
        <div class="double-bezel">
          <div class="inner-core">
            <div class="eyebrow">Certifications</div>
            <div class="cert-list">
              <div class="cert-item">Cisco Endpoint Security</div>
              <div class="cert-item">JS Essentials 1</div>
              <div class="cert-item">CompTIA ITF+</div>
              <div class="cert-item">Blender (Self-studied)</div>
              <div class="cert-item">Unity (Self-studied)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="resume-footer">
      &copy; Nengasca, Renzo D. &bull; WD303
    </footer>
  </div>
</template>

<style scoped>
.resume-page {
  background-color: #050505;
  color: #fafafa;
  min-height: 100dvh;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(160px, auto);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  align-content: center;
}

.bento-tile {
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}

.bento-tile:hover {
  transform: translateY(-4px);
}

.double-bezel {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px;
  border-radius: 2rem;
  height: 100%;
  box-sizing: border-box;
}

.inner-core {
  background: #0a0a0a;
  border: 1px solid rgba(202, 165, 82, 0.15);
  border-radius: calc(2rem - 4px);
  padding: 32px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

/* Tile Specifics */
.identity-tile { grid-column: span 5; grid-row: span 2; }
.edu-tile { grid-column: span 7; grid-row: span 1; }
.skills-tile { grid-column: span 5; grid-row: span 1; }
.projects-tile { grid-column: span 7; grid-row: span 2; }
.certs-tile { grid-column: span 5; grid-row: span 1; }

.profile-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #caa552;
  margin-bottom: 24px;
}

.identity-text h1 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
}

.subtitle {
  color: #a1a1aa;
  font-size: 0.9rem;
  margin-bottom: 24px;
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-stack {
  display: flex;
  gap: 12px;
}

.contact-link {
  color: #caa552;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(202, 165, 82, 0.3);
  padding: 4px 12px;
  border-radius: 999px;
  transition: all 0.3s;
}

.contact-link:hover {
  background: #caa552;
  color: #000;
}

.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #caa552;
  margin-bottom: 20px;
}

.tile-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.tile-text {
  color: #a1a1aa;
  font-size: 0.95rem;
  line-height: 1.6;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.75rem;
  color: #e4e4e7;
  font-family: 'JetBrains Mono', monospace;
}

.skill-tag.accent {
  border-color: rgba(202, 165, 82, 0.4);
  color: #caa552;
  background: rgba(202, 165, 82, 0.05);
}

.projects-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-item {
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.project-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(202, 165, 82, 0.2);
}

.project-name {
  font-weight: 600;
  color: #fff;
}

.project-desc {
  color: #a1a1aa;
  font-size: 0.85rem;
  margin: 0;
}

.project-link {
  color: #caa552;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 4px 10px;
  border: 1px solid rgba(202, 165, 82, 0.3);
  border-radius: 999px;
  transition: all 0.2s;
}

.project-link:hover {
  background: #caa552;
  color: #000;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cert-item {
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.9rem;
  color: #d4d4d8;
}

.cert-item:last-child {
  border-bottom: none;
}

.resume-footer {
  text-align: center;
  margin-top: 60px;
  color: #52525b;
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .identity-tile, .edu-tile, .skills-tile, .projects-tile, .certs-tile {
    grid-column: span 1;
  }
}
</style>
