<template>
  <b-container fluid>
    <b-container>
      <Header />
      <Hero />
      <Houses />
      <Resort />
      <AccessToUs />
    </b-container>
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Houses from '@/components/Houses.vue'
import Resort from '@/components/Resort.vue'
import AccessToUs from '@/components/AccesToUs.vue'

export default {
  name: 'App',
  components: { Header, Hero, Houses, Resort, AccessToUs }
}
</script>
