<template>
  <b-navbar toggleable="sm" type="dark">
    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="item of items" :key="item.link" :href="item.link">{{ item.text }}</b-nav-item>
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
        { text: 'Domki', link: '#houses' },
        // { text: 'Galeria', link: '#galeria' },
        { text: 'Ośrodek', link: '#resort' },
        { text: 'Dojazd', link: '#access-to-us' },
        { text: 'Regulamin', link: '#regulations' },
        { text: 'Kontakt', link: '#contact' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.navbar {
  // height: 80px;
  width: 100%;
  padding-right: 1em;
  justify-content: flex-end;
  z-index: 99;
  // align-self: flex-end;
  @include mq(xxsmall) {
    padding-right: 0.2em;
  }
}
.nav-item {
  padding: 10px 0;
  color: $white;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
  &:hover,
  &:active,
  &:focus,
  &:target {
    border-bottom: 2px solid $yellow;
  }
}

.nav-link {
  color: $white !important;
  font-size: 0.5em;
  // text-transform: uppercase;
  @include mq(xxsmall) {
    padding-right: 0.6em;
    font-size: 0.6em;
  }
  @include mq(medium) {
    font-size: 0.7em;
  }

  @include mq(large) {
    font-size: 1em;
  }
}

.navbar-nav {
  align-items: center;
  justify-content: flex-end;
}
</style>
