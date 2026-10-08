<template>
  <div class="resume-page">
    <div class="mainbox">
      <img src="/dukes.png" alt="duke" class="duke-img">

      <div class="section">
        <h1>Renzo D. Nengasca</h1>
        <p>3rd Year BS Web Development Student</p>
        <p><em>Email:</em> rengasca@example.com | <em>Discord:</em> LottieDeFontaine#BRAT</p>
      </div>

      <div class="section softbox">
        <h2>🎓 Education</h2>
        <p><strong>Holy Angel University</strong><br>
        Bachelor of Science in Web Development<br>
        Year 3 (Expected Graduation: 2027)</p>
      </div>

      <div class="section softbox">
        <h2>🧰 Skills</h2>
        <ul>
          <li>HTML & CSS (Work in Progress)</li>
          <li>Java (Learning)</li>
          <li>Python (Learning)</li>
          <li>Blender (Intermediate)</li>
          <li>Unity (Basic)</li>
          <li>Adobe Photoshop (Basic)</li>
          <li>Hosting: Render, Vercel</li>
        </ul>
      </div>

      <div class="section softbox">
        <h2>🛠️ Projects</h2>
        <ul>
          <li><strong>Phobos Website</strong> – A multi-page HTML/CSS project themed around shrine-like aesthetic and visual cohesion</li>
          <li><strong>Cahara Music Downloader</strong> – <a href="https://github.com/DextaviusJosiahJohnson/CaharaMusicDownloader" target="_blank" style="color: gold;">GitHub Repository</a></li>
          <li><strong>Blender Virtual Environments</strong> – Personal project creating stylized 3D worlds using Blender</li>
        </ul>
      </div>

      <div class="section softbox">
        <h2>📄 Certifications & Self-Learning</h2>
        <ul>
          <li>Cisco Endpoint Security Certified</li>
          <li>JS Institute JavaScript Essentials 1 Certified</li>
          <li>CompTIA IT Fundamentals (ITF+) Certified</li>
          <li>Self-studied Blender since 2020</li>
          <li>Self-studied Unity since 2023</li>
        </ul>
      </div>

      <footer>
        &copy; Nengasca, Renzo D.:WD303
      </footer>
    </div>
  </div>
</template>

<style scoped>
.resume-page {
  background-color: rgb(18, 43, 28);
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
  padding: 30px;
  color: beige;
  min-height: 100vh;
}

.mainbox {
  background-color: rgb(10, 25, 15);
  max-width: 900px;
  margin: auto;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  position: relative;
}

.duke-img {
  position: absolute;
  top: 120px;
  right: 50px;
  width: 150px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h1, h2 {
  color: rgba(255, 217, 0, 0.8);
}

.section {
  margin-bottom: 30px;
}

.softbox {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

ul {
  list-style-type: square;
  padding-left: 20px;
}

footer {
  text-align: center;
  margin-top: 40px;
  color: rgba(255, 217, 0, 0.233);
  font-style: italic;
}
</style>
