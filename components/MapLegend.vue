<template>
  <section class="map-legend">
    <h2>Plan ośrodka</h2>
    <div class="map-legend__container">
      <div class="map">
        <!-- <img
          :src="require(`@/assets/img/resort/fullSize/map.svg`)"
          class="map__img"
          @click="mapFullSizeShowHide()"
        />-->

        <!-- Dobra wersja -->
        <MapSVG class="map__img" @click="mapFullSizeShowHide()" />

        <!-- <svg id="map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">{{mapSVG}}</svg> -->
        <div
          v-if="mapFullSize"
          class="map__full-size"
          :style="fullSizeStyle"
          @click="mapFullSizeShowHide()"
        >
          <MapSVG />

          <!-- <img src="@/assets/img/resort/fullSize/map.svg" loading="lazy" /> -->
          <!-- <img :src="require(`@/assets/img/resort/fullSize/map.svg`)" loading="lazy" /> -->
          <!-- <div v-html="require(`!html-loader!@/assets/img/resort/fullSize/map.svg`)" loading="lazy"></div> -->
          <div class="x">X</div>
        </div>
      </div>
      <div class="legend">
        <div
          v-for="item in legend_items"
          :key="item.source"
          class="legend__item"
        >
          <img
            :src="require(`@/assets/img/resort/mapLegend/${item.source}.svg`)"
            :alt="item.description"
            loading="lazy"
          />
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MapSVG from '@/assets/img/resort/fullSize/map.svg?inline'

export default {
  name: 'MapLegend',
  components: { MapSVG },
  props: {},
  data() {
    return {
      mapURL: 'map.svg',
      mapFullSize: false,
      legend_items: [
        { source: 'our_houses', description: 'nasze domki' },
        { source: 'playground', description: 'plac zabaw' },
        { source: 'information', description: 'tablica informacyjna' },
        { source: 'parking', description: 'parking' },
        { source: 'reception', description: 'recepcja' },
        { source: 'parkomat', description: 'parkomat' },
        { source: 'police', description: 'policja' },
        {
          source: 'bicycle_parking_place',
          description: 'miejsce postojowe dla rowerów'
        },
        { source: 'beach', description: 'plaża' },
        { source: 'wc', description: 'WC' },
        {
          source: 'water_equipment_rental',
          description: 'wypożyczalnia sprzętu wodnego'
        },
        { source: 'houses', description: 'domki letniskowe' },
        { source: 'lake', description: 'jezioro Wieczno' },
        { source: 'barbecue_with_gazebo', description: 'grill z altaną' },
        { source: 'bridge', description: 'pomost' },
        { source: 'campsite', description: 'pole namiotowe' },
        { source: 'watering_place', description: 'kąpielisko' },
        { source: 'volleyball_court', description: 'boisko do siatkówki' },
        { source: 'shop', description: 'sklep' },
        { source: 'bar', description: 'bar' },
        { source: 'green_areas', description: 'tereny ziolone' }
      ]
    }
  },
  computed: {
    fullSizeStyle() {
      return this.mapFullSize ? { display: 'block' } : { display: 'none' }
    }
  },
  watch: {},
  created() {},
  methods: {
    mapFullSizeShowHide() {
      this.mapFullSize = !this.mapFullSize
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.map-legend {
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

  @include mq(large) {
    font-size: 1em;
  }
  @include mq(xlarge) {
    font-size: 1.1em;
  }
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // @include mq(small) {
    //   flex-direction: row;
    //   align-items: center;
    // }
  }
}
.legend {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  //   @include pictureAndDescription();

  //   @include mq(small) {
  //     width: 50%;
  //   }
  //   @include flexColumn();
  &__item {
    width: 33%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.7em;
    margin-bottom: 1.1em;

    & img {
      width: 3em;
      height: 3em;
      margin: 0 0.1em;
      @include mq(small) {
      }
    }
    & p {
      font-size: 1rem;

      @include mq(xsmall) {
        font-size: 1.1rem;
      }
      @include mq(small) {
        font-size: 1.1rem;
      }
      @include mq(medium) {
        font-size: 1.3rem;
      }
      @include mq(large) {
        font-size: 1.7rem;
      }
      @include mq(xlarge) {
        font-size: 1.8rem;
      }
      @include mq(xxlarge) {
        font-size: 1.9rem;
      }
    }
  }
}

.map {
  cursor: pointer;
  @include pictureAndDescription();

  &__img {
    width: 100%;
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  }

  &__full-size {
    display: none;
    position: fixed;
    //   position: absolute;
    left: 0;
    top: 0;
    //   text-align: center;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.95);
    & img,
    & svg {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1000;
      width: auto;
      height: 90%;
      transform: translate(-50%, -50%);
    }
    & .x {
      position: absolute;
      z-index: 1001;
      width: 1.5em;
      height: 1.5em;
      background-color: rgba(0, 0, 0, 0.75);
      right: 2em;
      top: 2em;
      color: gray;
      font-size: 1.5em;
      text-align: center;
      line-height: 1.5em;
      transition: 0.3s color;
      &:hover {
        color: $white;
      }
    }
  }
}
</style>
