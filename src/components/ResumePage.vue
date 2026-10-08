<template>
  <div class="resume-page">
    <div class="resume-container">
      <!-- Left Column: Identity -->
      <aside class="identity-column">
        <div class="profile-card">
          <img src="/dukes.png" alt="duke" class="duke-img">
          <div class="identity-text">
            <h1>Renzo D. Nengasca</h1>
            <p class="subtitle">3rd Year BS Web Development Student</p>
            <div class="contact-stack">
              <a href="mailto:renzo.nengasca@gmail.com" class="contact-link">renzo.nengasca@gmail.com</a>
              <a href="https://www.linkedin.com/in/renzo-nengasca-b80700382/" target="_blank" class="contact-link">LinkedIn Profile</a>
            </div>
          </div>
        </div>
      </aside>

      <!-- Right Column: Experience -->
      <main class="experience-column">
        <section class="resume-section">
          <h2 class="section-title">🎓 Education</h2>
          <div class="content-box">
            <p class="main-text"><strong>Holy Angel University</strong></p>
            <p class="sub-text">Bachelor of Science in Web Development<br>Year 3 (Expected Graduation: 2027)</p>
          </div>
        </section>

        <section class="resume-section">
          <h2 class="section-title">🧰 Skills</h2>
          <div class="skills-grid">
            <div class="skill-tag">HTML & CSS</div>
            <div class="skill-tag">Java</div>
            <div class="skill-tag">Python</div>
            <div class="skill-tag">Blender</div>
            <div class="skill-tag">Unity</div>
            <div class="skill-tag">Adobe Photoshop</div>
            <div class="skill-tag accent">Render</div>
            <div class="skill-tag accent">Vercel</div>
          </div>
        </section>

        <section class="resume-section">
          <h2 class="section-title">🛠️ Projects</h2>
          <div class="projects-stack">
            <div class="project-item">
              <span class="project-name">Phobos Website</span>
              <p class="project-desc">A multi-page HTML/CSS project themed around shrine-like aesthetic and visual cohesion</p>
            </div>
            <div class="project-item">
              <span class="project-name">Cahara Music Downloader</span>
              <a href="https://github.com/DextaviusJosiahJohnson/CaharaMusicDownloader" target="_blank" class="project-link">View Source</a>
            </div>
            <div class="project-item">
              <span class="project-name">Blender Virtual Environments</span>
              <p class="project-desc">Personal project creating stylized 3D worlds using Blender</p>
            </div>
          </div>
        </section>

        <section class="resume-section">
          <h2 class="section-title">📄 Certifications</h2>
          <div class="cert-list">
            <div class="cert-item">Cisco Endpoint Security Certified</div>
            <div class="cert-item">JS Institute JavaScript Essentials 1 Certified</div>
            <div class="cert-item">CompTIA IT Fundamentals (ITF+) Certified</div>
            <div class="cert-item">Self-studied Blender since 2020</div>
            <div class="cert-item">Self-studied Unity since 2023</div>
          </div>
        </section>
      </main>
    </div>
    <footer class="resume-footer">
      &copy; Nengasca, Renzo D. &bull; WD303
    </footer>
  </div>
</template>

<style scoped>
.resume-page {
  background-color: #050505;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #fafafa;
  min-height: 100vh;
  padding: 60px 20px;
}

.resume-container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 60px;
  align-items: start;
}

.identity-column {
  position: sticky;
  top: 100px;
}

.profile-card {
  background: #0a0a0a;
  border: 1px solid rgba(202, 165, 82, 0.3);
  border-radius: 0;
  padding: 32px;
  text-align: center;
  box-shadow: none;
}

.duke-img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 0;
  border: 1px solid rgba(202, 165, 82, 0.3);
  margin-bottom: 24px;
}

.identity-text h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #fff;
  letter-spacing: -0.02em;
}

.subtitle {
  color: #a1a1aa;
  font-size: 0.95rem;
  margin-bottom: 24px;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  color: #d4d4d8;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
}

.contact-link:hover {
  color: #caa552;
}

.experience-column {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.resume-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #caa552;
  margin: 0;
  opacity: 0.9;
}

.content-box {
  background: #0a0a0a;
  border-left: 1px solid #caa552;
  padding: 20px;
  border-radius: 0;
}

.main-text {
  font-size: 1.1rem;
  margin: 0 0 4px 0;
}

.sub-text {
  color: #a1a1aa;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  padding: 6px 14px;
  background: #0a0a0a;
  border: 1px solid rgba(202, 165, 82, 0.3);
  border-radius: 0;
  font-size: 0.85rem;
  color: #e4e4e7;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
}

.skill-tag.accent {
  border-color: rgba(202, 165, 82, 0.6);
  color: #caa552;
  background: rgba(202, 165, 82, 0.05);
}

.projects-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-item {
  padding: 20px;
  background: #0a0a0a;
  border: 1px solid rgba(202, 165, 82, 0.1);
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.3s;
}

.project-item:hover {
  border-color: rgba(202, 165, 82, 0.4);
}

.project-name {
  font-weight: 600;
  color: #fff;
}

.project-desc {
  color: #a1a1aa;
  font-size: 0.9rem;
  margin: 0;
}

.project-link {
  color: #caa552;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 6px 12px;
  border: 1px solid rgba(202, 165, 82, 0.3);
  border-radius: 0;
  transition: all 0.2s;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
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
  padding: 12px 20px;
  background: #0a0a0a;
  border-radius: 0;
  font-size: 0.95rem;
  color: #d4d4d8;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.cert-item:hover {
  background: #0f0f0f;
  border-color: rgba(202, 165, 82, 0.3);
  transform: translateX(4px);
}

.resume-footer {
  text-align: center;
  margin-top: 80px;
  color: #52525b;
  font-size: 0.85rem;
  font-family: 'Geist Mono', 'JetBrains Mono', monospace;
}

@media (max-width: 768px) {
  .resume-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .identity-column {
    position: static;
  }
}
</style>
