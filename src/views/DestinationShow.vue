<template>
  <section class="destination">
    <h1>{{ destination?.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination?.image}`" :alt="destination?.name"/>
      <p>{{ destination?.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Experiences in {{ destination?.name }}</h2>
    <div class="cards">
      <router-link v-for="experience in destination?.experiences" :key="experience.slug" :to="{ name: 'experience.show', params: { id: props.id, slug: props.slug, experienceSlug: experience.slug } }">
        <ExperienceCard :experience="experience"/>
      </router-link>
    </div>
    <router-view />
  </section>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import data from '@/db/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'

const props = defineProps<{
  id: number
  slug: string
}>()

const destination = computed(() => {
  return data.destinations.find(dest => dest.id === props.id) || null
})
</script>

<style scoped></style>