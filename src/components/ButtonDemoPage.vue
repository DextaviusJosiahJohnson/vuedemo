<template>
  <div class="button-page">
    <div class="content">
      <p class="quote">
        <b>
          "While the statue is the raw material of nightmares,<br>
          there is something soothing about the idea <br>
          that even a beast like this might be harnessed;<br>
          that there is a chance of such an ally, <br>
          for those who crack the code of offerings and prayer. <br>
          Whether it is actually listening, it is impossible to tell. <br>
          The thought that it even might, however, <br>
          is something to hold onto in the dark."<br>
          (- Sunless Skies, 'Carillon - An Overgrown Shrine' storylet)
        </b>
      </p>
      <img src="/angel.png" alt="Angel statue" class="angel">

      <div id="offeringBox">
        <button @click="showOffering">Leave Offering</button>

        <div v-if="isOfferingVisible" id="offeringInputBox" style="margin-top: 15px;">
          <input
            v-model="offering"
            type="text"
            id="offeringInput"
            placeholder="What do you offer?"
          >
          <button @click="submitOffering">Submit</button>
        </div>
      </div>
    </div>
    <footer>
      &copy; Nengasca, Renzo D.:WD303
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOfferingVisible = ref(false)
const offering = ref('')

const showOffering = () => {
  isOfferingVisible.value = true
}

const submitOffering = () => {
  if (offering.value.trim()) {
    alert(`You offered: "${offering.value}". The shrine remains silent... for now.`)
    offering.value = ''
    isOfferingVisible.value = false
  } else {
    alert("You must offer something.")
  }
}
</script>

<style scoped>
.button-page {
  margin: 0;
  padding: 20px;
  background: url('/krs.webp') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Courier New', Courier, monospace;
  color: #caa552;
  min-height: 100vh;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
  position: relative;
}

.quote {
  font-size: 20px;
  line-height: 1.7;
  text-shadow: 1px 1px black;
}

.angel {
  width: 350px;
  position: absolute;
  top: -100px;
  right: -100px;
  opacity: 0.9;
  filter: drop-shadow(0 0 10px black);
}

footer {
  margin-top: 100px;
  text-align: center;
  color: rgba(255, 217, 0, 0.3);
  font-style: italic;
}

#offeringBox {
  margin-top: 40px;
  text-align: center;
}

#offeringInput {
  padding: 10px;
  width: 70%;
  max-width: 400px;
  font-family: 'Courier New', monospace;
  border-radius: 5px;
  border: none;
}

#offeringInput:focus {
  outline: none;
  box-shadow: 0 0 5px gold;
}

button {
  font-family: 'Courier New', Courier, monospace;
  color: black;
  padding: 10px 20px;
  background-color: aliceblue;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background-color: black;
  color: gold;
}
</style>
