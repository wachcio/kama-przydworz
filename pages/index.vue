<template>
  <b-container fluid>
    <b-container>
      <Header />
      <Hero />
      <Houses />
    </b-container>
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Houses from '@/components/Houses.vue'

export default {
  name: 'App',
  components: { Header, Hero, Houses }
}
</script>
