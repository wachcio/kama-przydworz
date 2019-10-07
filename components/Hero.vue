<template>
  <div>
    <b-carousel
      id="carousel-hero"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      background="#333"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="image of images"
        :key="image.img"
        :caption="image.caption"
        :text="image.text"
      >
        <template v-slot:img>
          <img
            class="d-block w-100"
            :src="require(`@/assets/img/hero/${image.img}`)"
            :alt="image.caption"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {},
  props: {},
  data() {
    return {
      images: [
        {
          img: 'forest_2.jpg',
          caption: 'Nieskażona niczym przyroda...',
          text: 'Weź głęboki wdech świeżego leśnego powietrza.'
        },
        {
          img: 'forest_1.jpg',
          caption: 'Leśne ścieżki...',
          text: 'Wyjdź na spacer z rodziną lub pupilem.'
        },
        {
          img: 'brooke-campbell.jpg',
          caption: 'Czyste jezioro...',
          text: 'Weź orzeźwiającą kąpiel w płytkiej i czystej wodzie.'
        },
        {
          img: 'roe.jpg',
          caption: 'Dzika natura...',
          text:
            'Jeśli będziesz miał odrobinę szczęścia zobaczysz dzikie zwierzęta.'
        },
        {
          img: 'dry-leaves-fallen-leaves-fungus.jpg',
          caption: 'Udane grzybobranie...',
          text: 'Masz ochotę na grzyby? Tutaj jest ich dostatek...'
        },
        {
          img: 'depth-of-field-fungus-green.jpg',
          caption: 'Cuda natury...',
          text: 'Dbajmy o nią a ona się nam odwdzięczy.'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
#carousel-hero {
  width: 100% !important;

  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;
    padding: 0.2rem 0;
    // bottom: 0.2rem;

    h3 {
      font-size: 0.6rem;
      color: $yellow;
      font-weight: bold;
      @include mq(xsmall) {
        font-size: 0.8rem;
      }
      @include mq(small) {
        font-size: 1.3rem;
      }
      @include mq(large) {
        font-size: 1.6rem;
      }
      @include mq(xlarge) {
        font-size: 1.9rem;
      }
    }
    p {
      padding: 0;
      margin: 0;
      margin-bottom: 0.3rem;
      font-size: 0.4rem;
      @include mq(xsmall) {
        font-size: 0.6rem;
      }
      @include mq(small) {
        font-size: 1rem;
      }
      @include mq(large) {
        font-size: 1.2rem;
      }
      @include mq(xlarge) {
        font-size: 1.5rem;
      }
    }
  }

  .carousel-indicators {
    //   width: 0.5em;
    //   height: 0.5em;
    //   border-radius: 50%;
    // height: 0.1rem;
  }
  ol li {
    height: 0.2rem;
    padding: 0;
    margin: 0;
    @include mq(small) {
      height: 0.25rem;
    }
    @include mq(large) {
      height: 0.3rem;
    }
    @include mq(xlarge) {
      height: 0.3rem;
    }
  }
  ol li.active {
    background-color: $yellow;
  }
}
</style>
