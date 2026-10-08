<template>
  <div class="archive-page">
    <div class="archive-container">
      <h2>User Archives</h2>

      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search by first or last name..."
        id="searchInput"
      >

      <div id="user-list">
        <div v-if="filteredUsers.length === 0" class="no-results">
          No matching archives found.
        </div>
        <div
          v-for="user in filteredUsers"
          :key="user.id"
          class="user-card"
        >
          <strong>ID:</strong> {{ user.id }} <br>
          <strong>Name:</strong> {{ user.fName }} {{ user.lName }} <br>
          <strong>Age:</strong> {{ user.age }} <br><br>
          <router-link :to="'/users/edit/' + user.id" class="edit-link">[Re-Remember]</router-link>

          <button
            @click="deleteUser(user.id)"
            class="delete-btn"
          >
            [Forget This Soul.]
          </button>
        </div>
      </div>
    </div>
    <footer><em><b>&copy; Nengasca, Renzo D.:WD303</b></em></footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const users = ref([])
const searchTerm = ref('')

const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/users')
    users.value = await response.json()
  } catch (err) {
    console.error('Failed to load archives:', err)
  }
}

const deleteUser = async (id) => {
  if (!confirm('What sinks often cannot be recovered.')) return

  try {
    await fetch(`http://localhost:3000/delete-user/${id}`, {
      method: 'POST'
    })
    await fetchUsers()
  } catch (err) {
    console.error('Error deleting user:', err)
  }
}

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.fName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    user.lName.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

onMounted(fetchUsers)
</script>

<style scoped>
.archive-page {
  margin: 0;
  background: radial-gradient(ellipse at center, #0c1212 0%, #050808 100%);
  background-attachment: fixed;
  font-family: 'Courier New', Courier, monospace;
  color: #d3d8d3;
  min-height: 100vh;
}

.archive-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: rgba(10, 20, 18, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
}

#searchInput {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #666f66;
  color: #d0d8d0;
  border-radius: 6px;
  font-family: inherit;
}

#searchInput:focus {
  outline: none;
  border-color: gold;
  background-color: rgba(255, 255, 255, 0.08);
}

.user-card {
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.edit-link {
  color: gold;
  text-decoration: none;
  margin-right: 15px;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff5555;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.no-results {
  text-align: center;
  padding: 20px;
}

footer {
  text-align: center;
  color: rgba(255, 217, 0, 0.2);
  font-size: 0.8rem;
  margin-bottom: 16px;
}
</style>
