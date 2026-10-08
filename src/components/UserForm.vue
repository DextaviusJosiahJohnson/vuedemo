<template>
  <div class="form-page">
    <div class="form-wrapper">
      <form @submit.prevent="submitUser">
        <label for="fName">Name of the Forgotten</label>
        <input
          v-model="user.fName"
          type="text"
          id="fName"
          placeholder="Etch a name you barely remember"
        >

        <label for="lName">Last Known Location</label>
        <input
          v-model="user.lName"
          type="text"
          id="lName"
          placeholder="Etch a lineage you barely remember"
        >
        <label for="age">Age</label>
        <input
          v-model="user.age"
          type="text"
          id="age"
          placeholder="How many winters did this one last"
        >

        <button type="submit">Submit to the Archive</button>
      </form>
    </div>
    <footer><em><b>&copy; Nengasca, Renzo D.:WD303</b></em></footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref({
  fName: '',
  lName: '',
  age: ''
})

const submitUser = async () => {
  try {
    const response = await fetch('http://localhost:3000/PhobosStyledForm.html', {
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
    console.error('Error submitting user:', err)
  }
}
</script>

<style scoped>
.form-page {
  margin: 0;
  background: radial-gradient(ellipse at center, #0c1212 0%, #050808 100%);
  background-attachment: fixed;
  background-blend-mode: darken;
  font-family: 'Courier New', Courier, monospace;
  color: #d3d8d3;
  min-height: 100vh;
}

.form-wrapper {
  max-width: 400px;
  margin: 40px auto;
  padding: 40px;
  background: rgba(10, 20, 18, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  font-size: 0.85rem;
  color: #aab6aa;
}

input {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #666f66;
  color: #d0d8d0;
  padding: 10px;
  border-radius: 6px;
  font-family: inherit;
  transition: 0.2s ease;
}

input:focus {
  outline: none;
  border-color: gold;
  background-color: rgba(255, 255, 255, 0.08);
}

button {
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: gold;
  border: 1px solid gold;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;
}

button:hover {
  background-color: gold;
  color: black;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
}

footer {
  text-align: center;
  color: rgba(255, 217, 0, 0.2);
  font-size: 0.8rem;
  margin-bottom: 16px;
}
</style>
