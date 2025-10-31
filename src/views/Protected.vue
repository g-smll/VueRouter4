<template>
  <div class="protected-page">
    <h2>Greetings, {{ username }}!</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const username = ref<string>('')
const router = useRouter()

onMounted(() => {
  username.value = window.user!
})

const logout = () => {
  delete window.user
  router.push({ name: 'Home' })
}
</script>

<style scoped></style>