<template>
  <b-container fluid>
    <b-container>
      <Header />
    </b-container>
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
body {
  background-color: $bgcbody;
  width: 100vw;
  min-height: 100vh;
}
</style>
