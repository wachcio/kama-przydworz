<template>
  <section class="access-to-us">
    <h1>Jak dojechać do nas</h1>
    <div class="map">
      <div class="map__picture">
        <img src="~/assets/img/map/map_street_map.png" alt />
      </div>
      <div class="map__description">
        <p>Nasze domki znajdują się w miejscowości Przydwórz niedaleko Wąbrzeźna. Dokładna lokalizacja GPS to N 53.263331 i E 18.812688</p>
        <a
          href="https://www.google.pl/maps/dir//53.263331,+18.812688/@53.2623893,18.7781456"
          target="_blank"
          rel="noopener noreferrer"
        >Wyznacz trasę z Google Maps</a>
        <br />
        <a
          href="https://mapa.targeo.pl/531548N_1848457E,19,18.8126900,53.2633300"
          target="_blank"
          rel="noopener noreferrer"
        >Wyznacz trasę z Tagreo</a>
        <br />
        <a
          href="https://www.openstreetmap.org/directions?to=53.26203%2C18.81262"
          target="_blank"
          rel="noopener noreferrer"
        >Wyznacz trasę z OpenStreetMap</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccesToUs',
  props: {},
  data() {
    return {}
  },
  components: {},
  methods: {},
  computed: {},
  created() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.access-to-us {
  @include yellowSection();
}
.map {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.4em;
  @include mq(xsmall) {
    font-size: 0.5em;
  }
  @include mq(small) {
    font-size: 0.7em;
  }
  @include mq(medium) {
    flex-direction: row;
    align-items: center;
  }
  @include mq(large) {
    font-size: 1em;
  }
  @include mq(xlarge) {
    font-size: 1.1em;
  }

  &__picture {
    cursor: pointer;
    @include pictureAndDescription();
    & img {
      width: 100%;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }
  &__description {
    padding: 0.5em 1em;
    text-align: justify;
    @include pictureAndDescription();
  }
}
</style>