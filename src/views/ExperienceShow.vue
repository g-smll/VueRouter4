<template>
  <section v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import sourceData from '@/db/data.json'

interface Experience {
  name: string
  slug: string
  image: string
  description: string
}

interface Destination {
  id: number
  name: string
  slug: string
  image: string
  description: string
  experiences: Experience[]
}

const props = defineProps<{
  id: number
  slug: string
  experienceSlug: string
}>()

const experience = computed(() => {
  const destination = sourceData.destinations.find((dest: Destination) => dest.id === props.id)
  if (!destination) return null
  
  return destination.experiences.find((exp: Experience) => exp.slug === props.experienceSlug)
})
</script>