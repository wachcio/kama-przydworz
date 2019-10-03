<template>
  <section class="map-legend">
    <h2>Plan ośrodka</h2>
    <div class="map-legend__container">
      <div class="legend">
        <div class="legend__item" v-for="item in legend_items" :key="item.source">
          <img :src="require(`@/assets/img/resort/mapLegend/${item.source}.svg`)" alt />
          <p>{{item.description}}</p>
        </div>
      </div>
      <div class="map">
        <img src="@/assets/img/resort/mapLegend/map.svg" class="map__img" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MapLegend',
  components: {},
  props: {},
  data() {
    return {
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
  computed: {},
  watch: {},
  created() {},
  methods: {}
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
    @include mq(medium) {
      flex-direction: row;
      align-items: center;
    }
  }
}
.legend {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  @include pictureAndDescription();

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
      margin-left: 0.5em;
      margin-right: 0.5em;
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
}
</style>
