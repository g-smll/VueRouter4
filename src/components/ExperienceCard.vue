<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name"/>
    <span class="card__text">{{ experience.name }}</span>
  </div>
</template>

<script setup lang="ts">
interface Experience {
  name: string
  slug: string
  image: string
  description: string
}

defineProps<{
  experience: Experience
}>()
</script>