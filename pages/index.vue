<template>
  <b-container fluid>
    <b-container>
      <Header />
      <Hero />
      <main>
        <Houses />
        <Resort />
        <AccessToUs />
        <Regulations />
        <Contact />
      </main>
      <footer>
        <p>Wachcio 2019</p>
        <p></p>
      </footer>
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
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: black;
  color: $white;
  // font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  & p {
    font-size: 1rem;
    padding: 0.6rem;

    @include mq(xsmall) {
      padding: 0.7rem;
      font-size: 1rem;
    }
    @include mq(small) {
      padding: 0.7rem;
      font-size: 1rem;
    }
    @include mq(medium) {
      padding: 0.7rem;
      font-size: 1.2rem;
    }
    @include mq(large) {
      padding: 0.7rem;
      font-size: 1.3rem;
    }
    @include mq(xlarge) {
      padding: 0.7rem;
      font-size: 1.4rem;
    }
    @include mq(xxlarge) {
      padding: 0.7rem;
      font-size: 1.5rem;
    }
  }
}
</style>
