<template>
  <b-container fluid>
    <b-container>
      <Header />
      <Hero />
      <Houses />
      <Resort />
      <AccessToUs />
      <Regulations />
      <Contact />
      <footer>Wachcio 2019</footer>
    </b-container>
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Houses from '@/components/Houses.vue'
import Resort from '@/components/Resort.vue'
import AccessToUs from '@/components/AccesToUs.vue'
import Regulations from '@/components/Regulations.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'App',
  components: { Header, Hero, Houses, Resort, AccessToUs, Regulations, Contact }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

footer {
  width: 100%;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
  background-color: black;
  color: $white;
  font-size: 1em;
  text-transform: uppercase;
  margin-bottom: 2em;
}
</style>
