<template>
  <section class="houses">
    <H1>Nasze domki</H1>
    <div class="houses__content">
      <PictureDescription
        v-for="(item, index) in content"
        :key="item.img"
        :img="item.img"
        :description="item.text"
        :reverse="index%2"
      />
    </div>
  </section>
</template>

<script>
import PictureDescription from '@/components/PictureDescription.vue'
export default {
  name: 'Houses',
  props: {},
  data() {
    return {
      content: [
        {
          img: 'IMG_6160.jpg',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt ad, itaque, dicta qui ipsa quae dolores quo nobis, ea maiores ullam vel cumque velit quia iste minima. Consequatur, illum?'
        },
        {
          img: 'IMG_6172.jpg',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt ad, itaque, dicta qui ipsa quae dolores quo nobis, ea maiores ullam vel cumque velit quia iste minima. Consequatur, illum?'
        },
        {
          img: 'IMG_6174.jpg',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt ad, itaque, dicta qui ipsa quae dolores quo nobis, ea maiores ullam vel cumque velit quia iste minima. Consequatur, illum?'
        },
        {
          img: 'IMG_9140.jpg',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sunt ad, itaque, dicta qui ipsa quae dolores quo nobis, ea maiores ullam vel cumque velit quia iste minima. Consequatur, illum?'
        }
      ]
    }
  },
  components: { PictureDescription },
  methods: {},
  computed: {},
  created() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.houses {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $yellow;
  color: $black;
  h1 {
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5em 0;

    @include mq(medium) {
      padding: 0.7em;
      font-size: 1.4em;
    }
    @include mq(large) {
      padding: 0.8em;
      font-size: 1.6em;
    }
    @include mq(medium) {
      padding: 0.7em;
      font-size: 1.4em;
    }
    @include mq(xxlarge) {
      padding: 1em;
      font-size: 1.7em;
    }
  }
}
</style>