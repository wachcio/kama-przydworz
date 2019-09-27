<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="item of items" :key="item.link" :href="item.link">{{
          item.text
        }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Nav',

  data() {
    return {
      items: [
        { text: 'Domki', link: '#domki' },
        { text: 'Galeria', link: '#galeria' },
        { text: 'Ośrodek', link: '#osrodek' },
        { text: 'Dojazd', link: '#dojazd' },
        { text: 'Regulamin', link: '#regulamin' },
        { text: 'Kontakt', link: '#kontakt' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  padding: 20px 0;
}
</style>
