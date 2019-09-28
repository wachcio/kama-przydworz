<template>
  <b-container fluid>
    <b-container>
      <Header />
      <Hero />
    </b-container>
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'App',
  components: { Header, Hero }
}
</script>
