<template>
  <div class="form-page">
    <div class="structural-layout">
      <div class="sidebar">
        <h1 class="label-mono">The Archive</h1>
        <p class="desc-mono">Restore the forgotten.</p>
      </div>

      <div class="form-main">
        <form @submit.prevent="submitUser" class="monolithic-form">
          <div class="input-group">
            <label for="fName" class="label-mono">Name of the Forgotten</label>
            <input
              v-model="user.fName"
              type="text"
              id="fName"
              required
            >
          </div>

          <div class="input-group">
            <label for="lName" class="label-mono">Last Known Location</label>
            <input
              v-model="user.lName"
              type="text"
              id="lName"
              required
            >
          </div>

          <div class="input-group">
            <label for="age" class="label-mono">Age</label>
            <input
              v-model="user.age"
              type="text"
              id="age"
              required
            >
          </div>

          <button type="submit" class="submit-btn">Save Changes</button>
        </form>
      </div>
    </div>
    <footer>
      <span class="label-mono">&copy; Nengasca, Renzo D.:WD303</span>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const user = ref({
  fName: '',
  lName: '',
  age: ''
})

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const fetchUser = async () => {
  const id = route.params.id
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`)
    const users = await response.json()
    const found = users.find(u => u.id == id)
    if (found) {
      user.value = { ...found }
    }
  } catch (err) {
    console.error('Error fetching user:', err)
  }
}

const submitUser = async () => {
  const id = route.params.id
  try {
    const response = await fetch(`${API_BASE_URL}/api/update-user/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user.value)
    })

    if (response.ok) {
      router.push('/users')
    }
  } catch (err) {
    console.error('Error updating user:', err)
  }
}

onMounted(fetchUser)
</script>

<style scoped>
.form-page {
  margin: 0;
  background-color: #050808;
  color: #d3d8d3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
}

.structural-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: calc(100vh - 100px);
  border-bottom: 1px solid rgba(202, 165, 82, 0.3);
}

.sidebar {
  padding: 60px 40px;
  border-right: 1px solid rgba(202, 165, 82, 0.3);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-main {
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.monolithic-form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-mono {
  font-family: 'Geist Mono', 'Courier New', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: #cabf7e;
  text-transform: uppercase;
  margin: 0;
}

.desc-mono {
  font-family: 'Geist Mono', 'Courier New', monospace;
  font-size: 0.8rem;
  color: #99a9a2;
  margin: 0;
}

input {
  background-color: transparent;
  border: 1px solid rgba(202, 165, 82, 0.3);
  color: #cfd8d2;
  padding: 12px;
  border-radius: 0;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #cabf7e;
}

.submit-btn {
  margin-top: 20px;
  padding: 15px;
  background-color: #050808;
  color: #cabf7e;
  border: 1px solid #cabf7e;
  border-radius: 0;
  cursor: pointer;
  font-family: 'Geist Mono', 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
}

.submit-btn:hover {
  background-color: #cabf7e;
  color: #050808;
}

footer {
  padding: 20px 40px;
  text-align: right;
}

@media screen and (max-width: 768px) {
  .structural-layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(202, 165, 82, 0.3);
    padding: 30px 40px;
  }
}
</style>
