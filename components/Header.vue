<template>
  <header>
    <div class="header">
      <div class="header__left">
        <div class="logo">
          <p>
            kama
            <span class="logo__yellow">-</span>
            przydwórz
            <span class="logo__yellow">.</span>
            pl
          </p>
        </div>
        <a :href="`tel:${phoneNumber}`">
          <div class="call">
            <div class="call-phone">
              <img class="call-phone-img" src="~/assets/img/phone.svg" alt srcset />
            </div>
            <div class="call-wrapper">
              <div class="call-number">{{ phoneNumber }}</div>

              <div class="call-text">zadzwoń i zarezerwuj już dziś</div>
            </div>
          </div>
        </a>
      </div>
      <div class="nav justify-content-end align-items-end">
        <Nav />
      </div>
    </div>
  </header>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'Header',
  components: { Nav },
  data() {
    return {
      phoneNumber: '+48 123 456 789'
    }
  },
  computed: {
    logoText() {
      return `kama<span class="logo__yellow">-</span>przydwórz<span class="logo__yellow">.</span>pl`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
header {
  background-color: $black;
  color: $white;
  height: 100%;
  display: flex;
  flex-direction: row;
  //   align-items: center;
  //   flex-basis: 50;
}
.header {
  // height: 107px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: $black;
  width: 100%;
  min-width: 465px;
  &__left {
    padding-left: 1em;
  }
}
.logo {
  //   font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  min-width: 419px;
  @media (max-width: 320px) {
    min-width: 0;
    font-size: 1.6rem;
  }
  @media (max-width: 850px) {
    font-size: 2.6rem;
  }
}
.logo__yellow {
  color: $yellow !important;
}
.call {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3.5rem;
  cursor: pointer;
  @media (max-width: 320px) {
    margin-right: 1.2rem;
  }
}
.call-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.call-number {
  font-size: 2.4rem;
  font-weight: 700;
  color: $yellow;
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
}
.call-text {
  font-size: 1rem;
}
.call-phone {
  margin-right: 1.2rem;
  @media (max-width: 320px) {
    margin-right: 1.2rem;
  }
}
.call-phone-img {
  height: 36px;
  width: 36px;
  @media (max-width: 320px) {
    height: 25px;
    width: 25px;
  }
}
a {
  text-decoration: none;
  color: $white;
}
span {
  margin: 0;
  padding: 0;
}
.nobreak {
  white-space: nowrap;
}
</style>
