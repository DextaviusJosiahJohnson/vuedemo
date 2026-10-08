<template>
  <div class="archive-page">
    <div class="structural-grid">
      <div class="archive-index">
        <span class="label">DATABASE_INDEX</span>
        <h2 class="index-title">User Archives</h2>

        <div class="query-container">
          <span class="query-label">QUERY_TERM</span>
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search by first or last name..."
            id="searchInput"
          >
        </div>

        <div id="user-list">
          <div v-if="filteredUsers.length === 0" class="no-results">
            NO MATCHING ARCHIVES FOUND.
          </div>
          <div
            v-for="user in filteredUsers"
            :key="user._id"
            class="user-card"
          >
            <div class="user-details">
              <span class="field id-field">ID: {{ user._id }}</span>
              <span class="field name-field">NAME: {{ user.fName }}</span>
              <span class="field name-field">LOCATION: {{ user.lName }}</span>
              <span class="field age-field">AGE: {{ user.age }}</span>
            </div>
            <div class="user-actions">
              <router-link :to="'/users/edit/' + user._id" class="edit-link">[Re-Remember]</router-link>
              <button
                @click="deleteUser(user._id)"
                class="delete-btn"
              >
                [Forget This Soul.]
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="structural-void"></div>
    </div>
    <footer><em class="footer-label">&copy; Nengasca, Renzo D.:WD303</em></footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const users = ref([])
const searchTerm = ref('')

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`)
    users.value = await response.json()
  } catch (err) {
    console.error('Failed to load archives:', err)
  }
}

const deleteUser = async (id) => {
  if (!confirm('What sinks often cannot be recovered.')) return

  try {
    await fetch(`${API_BASE_URL}/api/delete-user/${id}`, {
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
  background: #050808;
  font-family: 'Courier New', Courier, monospace;
  color: #c0c0c0;
  min-height: 100vh;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
}

.structural-grid {
  display: grid;
  grid-template-columns: 45% 1fr;
  gap: 0;
  flex: 1;
}

.archive-index {
  border-left: 1px solid rgba(202, 165, 82, 0.2);
  padding-left: 30px;
}

.structural-void {
  /* Intentional void */
}

.label {
  font-family: 'Geist Mono', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(202, 165, 82, 0.5);
  display: block;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.index-title {
  font-family: 'Geist Mono', monospace;
  font-size: 24px;
  font-weight: 400;
  color: #caa552;
  margin: 0 0 40px 0;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.query-container {
  margin-bottom: 40px;
}

.query-label {
  font-family: 'Geist Mono', monospace;
  font-size: 9px;
  letter-spacing: 1px;
  color: rgba(192, 192, 192, 0.4);
  display: block;
  margin-bottom: 6px;
}

#searchInput {
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(192, 192, 192, 0.2);
  color: #d3d8d3;
  border-radius: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  transition: border-color 0.1s ease;
}

#searchInput:focus {
  outline: none;
  border-bottom-color: #caa552;
  background-color: transparent;
  box-shadow: inset 0 0 0 1px #caa552;
  caret-color: #caa552;
}

.user-card {
  padding: 20px 0;
  border-bottom: 1px solid rgba(192, 192, 192, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background-color 0.2s ease;
}

.user-card:hover {
  background-color: #0d0d0d;
  border-left: 2px solid #caa552;
  padding-left: -2px;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.field {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.id-field {
  color: #caa552;
  font-weight: bold;
}

.name-field {
  color: #c0c0c0;
}

.age-field {
  color: rgba(192, 192, 192, 0.5);
}

.user-actions {
  display: flex;
  gap: 20px;
  align-items: center;
}

.edit-link {
  color: #caa552;
  text-decoration: none;
  font-size: 11px;
  text-transform: uppercase;
  transition: text-decoration 0.1s ease;
}

.edit-link:hover {
  text-decoration: underline;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff5555;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  font-size: 11px;
  text-transform: uppercase;
  padding: 0;
  transition: text-decoration 0.1s ease;
}

.delete-btn:hover {
  text-decoration: underline;
}

.no-results {
  text-align: left;
  padding: 20px 0;
  color: rgba(202, 165, 82, 0.4);
  font-size: 12px;
  letter-spacing: 1px;
}

footer {
  text-align: left;
  margin-top: 60px;
  border-top: 1px solid rgba(192, 192, 192, 0.1);
  padding-top: 20px;
  width: 45%;
}

.footer-label {
  color: rgba(202, 165, 82, 0.3);
  font-size: 10px;
  font-family: 'Geist Mono', monospace;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
