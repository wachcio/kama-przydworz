<template>
  <header>
    <b-row>
      <b-col class="header-col">
        <div class="logo">
          kama
          <span class="logo__yellow">-</span>przydwórz
          <span class="logo__yellow">.</span>pl
        </div>
        <!-- <a :href="`tel:${phoneNumber}`"> -->
        <div class="call">
          <div class="call-phone">
            <img src="@/assets/img/vaadin-phone-landline.svg" alt srcset />
          </div>
          <div class="call-wrapper">
            <div class="call-number">{{phoneNumber}}</div>

            <div class="call-text">zadzwoń i zarezerwuj już dziś</div>
          </div>
        </div>
        <!-- </a> -->
      </b-col>
      <b-col class="header-col">NAV</b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      phoneNumber: '+48 123 456 789'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
header {
  background-color: $black;
  color: $white;
  height: 107px;
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   flex-basis: 50;
}
.header-col {
  height: 107px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.logo {
  //   font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3.6rem;
  min-width: 419px;
}
.logo__yellow {
  color: $yellow;
}
.call {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3.5rem;
  cursor: pointer;
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
}
.call-text {
  font-size: 1rem;
}
.call-phone {
  height: 36px;
  width: 36px;
  margin-right: 1.2rem;
}
</style>
