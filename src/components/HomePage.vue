<template>
  <div class="home-page">
    <div class="container">
      <div class="moroi">
        <img src="/dukes.png" alt="duke" class="duke-img">
        <h2 style="color:beige;">PHOBOS</h2>
        <h3 style="font-size: 15px; color:rgba(245, 245, 220, 0.705)">(A Deepwoken Inspired Website Project)</h3>
        <blockquote>
          "minsan pag wala si mama sa bahay,<br>
          gusto ko pumupunta sa likod,<br>
          nililibing ang sarili ko,<br>
          at nagkukunware na ako ay isang carrot."
        </blockquote>
        <p><b><em>- Renzo D. Nengasca</em></b></p>
      </div>
    </div>
    <footer>
      <em><b>&copy; Nengasca, Renzo D.:WD303</b></em>
    </footer>
  </div>
</template>

<style scoped>
.home-page {
  margin: 10px;
  background: url('/thom.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
}

.home-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
}

.moroi {
  box-shadow: 0 0 25px rgba(22, 66, 33, 0.774);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(15px);
  background: rgba(22, 66, 33, 0.774);
  border: 3px solid rgb(18, 43, 28);
  padding: 35px 50px;
  text-align: center;
  border-radius: 12px;
}

blockquote {
  font-size: 1.4em;
  line-height: 1.5em;
  color: gold;
  text-shadow: 1px 1px black;
  margin: 20px 0;
}

.duke-img {
  width: 100px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px black;
}

footer {
  text-align: center;
  color: rgba(255, 217, 0, 0.233);
  margin-top: 30px;
}
</style>
