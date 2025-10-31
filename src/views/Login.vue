<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      
      <label for="username">Username</label>
      <input name="username" type="text" class="input" v-model="username">
      
      <label for="password">Password</label>
      <input name="password" type="password" class="input" v-model="password">
      
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  window.user = username.value
  router.push({ name: 'Protected' })
}
</script>

<style>

</style>