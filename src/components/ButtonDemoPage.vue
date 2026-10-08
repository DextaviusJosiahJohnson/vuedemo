<template>
  <div class="shrine-page">
    <div class="shrine-layout">
      <section class="shrine-text">
        <div class="content-wrapper">
          <p class="shrine-quote">
            "While the statue is the raw material of nightmares,<br>
            there is something soothing about the idea <br>
            that even a beast like this might be harnessed;<br>
            that there is a chance of such an ally, <br>
            for those who crack the code of offerings and prayer. <br>
            Whether it is actually listening, it is impossible to tell. <br>
            The thought that it even might, however, <br>
            is something to hold onto in the dark."
          </p>
          <p class="attribution">— Sunless Skies, 'Carillon - An Overgrown Shrine' storylet</p>

          <div class="offering-zone">
            <button
              v-if="!isOfferingVisible"
              @click="showOffering"
              class="btn-primary"
            >
              Leave Offering
            </button>

            <div v-else class="offering-input-group">
              <div class="input-wrapper">
                <input
                  v-model="offering"
                  type="text"
                  placeholder="What do you offer?"
                  @keyup.enter="submitOffering"
                >
              </div>
              <div class="action-buttons">
                <button @click="submitOffering" class="btn-submit">Submit</button>
                <button @click="isOfferingVisible = false" class="btn-ghost">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="architectural-divider"></div>

      <section class="shrine-visual">
        <img src="/angel.png" alt="Angel statue" class="angel-img">
      </section>
    </div>
    <footer class="page-footer">
      &copy; Nengasca, Renzo D. &bull; WD303
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
.shrine-page {
  background: url('/krs.webp') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #cfd8d2;
  font-family: 'Courier New', 'Geist Mono', monospace;
}

.shrine-layout {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
  min-height: 80vh;
  padding: 40px 20px;
}

.architectural-divider {
  width: 1px;
  background: rgba(202, 165, 82, 0.3);
  margin: 0 40px;
}

.shrine-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-wrapper {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(202, 165, 82, 0.3);
  padding: 48px;
  border-radius: 0;
  box-shadow: none;
}

.shrine-quote {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #caa552;
  margin: 0 0 16px 0;
  font-style: italic;
}

.attribution {
  color: #71717a;
  font-size: 0.85rem;
  margin-bottom: 40px;
  font-family: 'Courier New', 'Geist Mono', monospace;
}

.offering-zone {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn-primary {
  background: #caa552;
  color: #000;
  padding: 12px 24px;
  border-radius: 0;
  font-weight: 600;
  border: 1px solid #caa552;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #000;
  color: #caa552;
  border-color: #caa552;
  box-shadow: none;
}

.btn-primary:active,
.btn-submit:active,
.btn-ghost:active {
  transform: scale(0.98);
}

.offering-input-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  color: #fff;
  font-family: 'Courier New', 'Geist Mono', monospace;
  transition: border-color 0.2s;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #caa552;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn-submit {
  background: #caa552;
  color: #000;
  padding: 8px 20px;
  border-radius: 0;
  font-weight: 600;
  border: 1px solid #caa552;
  cursor: pointer;
}

.btn-ghost {
  background: transparent;
  color: #a1a1aa;
  padding: 8px 20px;
  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s;
}

.btn-ghost:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.shrine-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.angel-img {
  width: 450px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(0,0,0,0.8));
  transition: transform 0.5s ease;
}

.angel-img:hover {
  transform: scale(1.02);
}

.page-footer {
  text-align: center;
  color: rgba(202, 165, 82, 0.3);
  font-size: 0.85rem;
  padding: 40px 0;
  font-family: 'Courier New', 'Geist Mono', monospace;
}

@media (max-width: 768px) {
  .shrine-layout {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .architectural-divider {
    display: none;
  }
  .shrine-text {
    order: 2;
  }
  .shrine-visual {
    order: 1;
  }
  .angel-img {
    width: 300px;
  }
  .offering-zone {
    align-items: center;
  }
}
</style>
