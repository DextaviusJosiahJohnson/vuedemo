<template>
  <div class="profile-page">
    <div class="main">
      <div class="profile-header">
        <img src="/jotoy.jpg" class="profile-img" alt="profile">
        <div class="softbox">
          <h1 style="margin: 0;">Renzo D. Nengasca</h1>
          <p>2nd Year Web Development</p>
          <p style="color: rgba(134, 53, 145, 0.925);"><em>LottieDeFontaine#BRAT</em></p>
          <p style="color: rgb(117, 51, 51);"><em>LottieDeBRAT</em></p>
          <div class="profile-icons">
            <img src="/vajotoy.webp" alt="icon1">
            <img src="/siege.png" alt="icon2">
          </div>
        </div>
      </div>

      <div class="skills-section softbox">
        <h2>Skills:</h2>
        <p>Java (Work in Progress)</p>
        <p>Python (Work in Progress)</p>
        <p>HTML & CSS (Work in Progress)</p>
        <p>Blender (Intermediate)</p>
      </div>

      <div class="gallery">
        <div class="softbox" style="flex: 1; min-width: 250px; max-width: 500px;">
          <p style="font-family: 'Times New Roman', serif; color: rgb(199, 161, 67); text-shadow: 1px 1px black; line-height: 1.6;">
            We walk the fragile paths that join the world as one,<br>
            that rest upon the valiant efforts of the past.<br>
            On the shoulders of giants we cautiously tread.<br><br>
            In time, the path ahead shall end,<br>
            as it already has to those who walked before us.<br><br>
            Then, none will walk. None will remain.<br>
            We will have been the last.
          </p>
        </div>
        <img src="/jograd.jpg" alt="can of monster on a rooftop">
      </div>
    </div>

    <footer>
      &copy; Nengasca, Renzo D.:WD203
    </footer>
  </div>
</template>

<style scoped>
.profile-page {
  background-color: rgb(18, 43, 28);
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
  padding: 20px;
  color: beige;
  min-height: 100vh;
}

.main {
  max-width: 1000px;
  margin: 0 auto;
  background-color: rgb(10, 25, 15);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.profile-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 8px solid rgba(0, 0, 0, 0.3);
}

.softbox {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.skills-section {
  margin-bottom: 30px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
}

.gallery img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border: 3px solid black;
}

.profile-icons {
  margin-top: 10px;
}

.profile-icons img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

footer {
  text-align: center;
  margin-top: 40px;
  color: rgba(255, 217, 0, 0.233);
  font-style: italic;
}
</style>
