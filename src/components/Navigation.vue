<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link 
      v-for="destination in destinations" 
      :key="destination.id" 
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
    <router-link :to="{ name: 'Protected' }">Dashboard</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '@/db/data.json'

// 设置响应式数据
const destinations = ref(data.destinations)
</script>

<style scoped>

</style>