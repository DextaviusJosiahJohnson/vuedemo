<template>
  <div class="mini-project">
    <div class="main-container">
      <div class="gate-section">
        <h1 class="gate-title">THE CAPTAIN'S GATE</h1>
        <p style="color: #99a9a2; font-style: italic;">An Interactive Meditation on Agency and Fate</p>
      </div>

      <div class="invictus-quote">
        "It matters not how strait the gate,<br>
        How charged with punishments the scroll,<br>
        I am the master of my fate,<br>
        I am the captain of my soul."<br>
        <span style="color: #cabf7e; font-size: 0.9em; margin-top: 10px; display: block;">— William Ernest Henley, "Invictus"</span>
      </div>

      <div class="meditation-text">
        Before you stands the Gate of Trials, ancient and immutable.
        The scroll beside it bears the weight of countless punishments,
        written in languages that predate memory. Yet the gate remains—
        not as barrier, but as threshold. The question echoes in the depths:
        Who truly commands the passage?
      </div>

      <div class="interactive-section">
        <h2 style="color: #cabf7e; text-align: center;">The Eternal Choice</h2>

        <div class="choices-grid">
          <div class="choice-card" @click="makeChoice('fate')">
            <h3>⚖️ Surrender to Fate</h3>
            <p>Accept that the scroll's punishments are written in stone. The gate opens only when destiny wills it.</p>
          </div>

          <div class="choice-card" @click="makeChoice('captain')">
            <h3>⚓ Claim Captaincy</h3>
            <p>Declare yourself master of your path. The gate bends to will, not circumstance.</p>
          </div>

          <div class="choice-card" @click="makeChoice('balance')">
            <h3>⚖️ Seek Balance</h3>
            <p>Perhaps the gate and the captain are one—neither purely fate nor purely will.</p>
          </div>
        </div>

        <div class="fate-meter">
          <p style="color: #cabf7e; margin-bottom: 10px;">Agency vs. Fate</p>
          <div class="meter-bar">
            <div class="meter-fill" :style="{ width: agencyLevel + '%' }"></div>
          </div>
          <p style="color: #99a9a2; font-size: 0.9em; margin-top: 10px;">{{ meterText }}</p>
        </div>

        <div class="scroll-text">
          <em v-html="scrollText"></em>
        </div>

        <div class="captain-actions">
          <button class="captain-btn" @click="revealScroll">Read the Scroll</button>
          <button class="captain-btn" @click="enterGate">Enter the Gate</button>
          <button class="captain-btn" @click="resetJourney">Begin Anew</button>
        </div>
      </div>

      <div class="meditation-text">
        <strong>Reflection:</strong> In the depths of the ocean, currents flow according to ancient laws,
        yet the skilled navigator charts a course through the very same waters.
        The gate stands neither fully open nor closed—it exists in the space between
        surrender and sovereignty, where the captain's will meets the tide's wisdom.
      </div>
    </div>

    <footer class="page-footer">
      <em><b>&copy; Nengasca, Renzo D.:WD203</b></em>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const agencyLevel = ref(50)
const choicesMade = ref(0)
const meterText = ref('The balance remains untested')
const scrollText = ref('The ancient scroll remains unread, its punishments a mystery. What words await those who dare to look upon its surface?')

const scrollTexts = [
  "The scroll speaks of trials faced with quiet dignity, of storms weathered without breaking.",
  "Written here are the names of those who stood firm when the world sought to bend them.",
  "The punishments inscribed are not penalties, but purifications—each mark a step toward mastery.",
  "In faded ink: 'The gate opens not to the mighty, but to those who know their own strength.'"
]

const gateResponses = [
  "The gate recognizes your resolve. It opens silently, revealing a path shrouded in mist.",
  "You step through the threshold. Behind you, the gate remains—others too must make this choice.",
  "The passage leads not to an end, but to a beginning. The captain's journey continues.",
  "In passing through, you understand: the gate was never locked. It waited for recognition."
]

const makeChoice = (choice) => {
  choicesMade.value++
  if (choice === 'fate') {
    agencyLevel.value = Math.max(0, agencyLevel.value - 20)
    meterText.value = "The currents of fate grow stronger"
  } else if (choice === 'captain') {
    agencyLevel.value = Math.min(100, agencyLevel.value + 20)
    meterText.value = "The captain's will asserts itself"
  } else {
    agencyLevel.value = 50
    meterText.value = "Balance is sought between will and surrender"
  }

  if (choicesMade.value <= scrollTexts.length) {
    scrollText.value = scrollTexts[choicesMade.value - 1]
  }
}

const revealScroll = () => {
  scrollText.value = scrollTexts[Math.floor(Math.random() * scrollTexts.length)]
}

const enterGate = () => {
  const response = gateResponses[Math.floor(Math.random() * gateResponses.length)]
  scrollText.value = response
}

const resetJourney = () => {
  agencyLevel.value = 50
  choicesMade.value = 0
  meterText.value = 'The balance remains untested'
  scrollText.value = 'The ancient scroll remains unread, its punishments a mystery. What words await those who dare to look upon its surface?'
}
</script>

<style scoped>
.mini-project {
  margin: 0;
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  color: #a8c4b8;
  background: linear-gradient(135deg, #0b1a16 0%, #1d2d3f 50%, #0b1a16 100%);
  background-attachment: fixed;
  min-height: 100vh;
}

.main-container {
  max-width: 1000px;
  margin: 0 auto;
  background-color: rgba(15, 35, 25, 0.7);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.gate-section {
  text-align: center;
  margin-bottom: 50px;
}

.gate-title {
  font-size: 2.5em;
  color: #cabf7e;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.invictus-quote {
  background-color: rgba(45, 75, 60, 0.3);
  padding: 30px;
  border-left: 5px solid #2e4d3b;
  margin: 30px 0;
  font-style: italic;
  color: #cfd8d2;
  line-height: 1.8;
  font-size: 1.2em;
}

.interactive-section {
  margin: 40px 0;
}

.choices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.choice-card {
  background-color: rgba(29, 45, 63, 0.4);
  padding: 25px;
  border-radius: 12px;
  border: 2px solid rgba(160, 200, 180, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.choice-card:hover {
  background-color: rgba(29, 45, 63, 0.7);
  border-color: #cabf7e;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(202, 191, 126, 0.3);
}

.choice-card h3 {
  color: #cabf7e;
  margin-bottom: 15px;
}

.choice-card p {
  color: #99a9a2;
  line-height: 1.5;
}

.fate-meter {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  margin: 30px 0;
  text-align: center;
}

.meter-bar {
  width: 100%;
  height: 20px;
  background-color: rgba(45, 75, 60, 0.5);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;
}

.meter-fill {
  height: 100%;
  background: linear-gradient(90deg, #2e4d3b 0%, #cabf7e 100%);
  transition: width 0.5s ease;
}

.scroll-text {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  color: #99a9a2;
  font-size: 0.9em;
  line-height: 1.6;
}

.captain-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.captain-btn {
  padding: 15px 30px;
  background-color: rgba(45, 75, 60, 0.8);
  color: #cabf7e;
  border: 2px solid #2e4d3b;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  transition: 0.3s ease;
}

.captain-btn:hover {
  background-color: #cabf7e;
  color: #0b1a16;
  transform: scale(1.05);
}

.meditation-text {
  background-color: rgba(58, 46, 79, 0.2);
  padding: 25px;
  border-radius: 10px;
  margin: 30px 0;
  font-style: italic;
  color: #cfd8d2;
  line-height: 1.7;
  border-left: 3px solid #3a2e4f;
}

.page-footer {
  text-align: center;
  color: rgba(255, 217, 0, 0.233);
  font-style: italic;
  margin-top: 40px;
}
</style>
