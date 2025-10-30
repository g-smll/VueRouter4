<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link v-for="destination in destinations" :key="destination.id" :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '@/db/data.json'

// 设置响应式数据
const destinations = ref(data.destinations)
</script>

<style scoped></style>