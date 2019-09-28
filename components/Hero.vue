<template>
  <div>
    <b-carousel
      id="carousel-hero"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
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
  props: {},
  data() {
    return {
      images: [
        {
          img: 'forest_1.jpg',
          caption: 'Pierwszy',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsa quo! Nulla, '
        },
        {
          img: 'forest_2.jpg',
          caption: 'Drugi',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsa quo! Nulla, '
        },
        {
          img: 'brooke-campbell.jpg',
          caption: 'Trzeci',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsa quo! Nulla, '
        },
        {
          img: 'roe.jpg',
          caption: 'Łania',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsa quo! Nulla, '
        },
        {
          img: 'dry-leaves-fallen-leaves-fungus.jpg',
          caption: 'Grzyby',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsa quo! Nulla, '
        },
        {
          img: 'depth-of-field-fungus-green.jpg',
          caption: 'Mech',
          text:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsa quo! Nulla, '
        }
      ]
    }
  },
  components: {},
  methods: {},
  computed: {},
  created() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#carousel-hero {
  width: 100% !important;
}
</style>