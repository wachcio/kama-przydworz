<template>
  <div class="content" :style="checkReverse()">
    <div class="content__picture">
      <img :src="require(`@/assets/img/houses/${img}`)" />
    </div>
    <div class="content__description">
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureDescription',
  props: { img: String, description: String, reverse: Number },
  data() {
    return {
      windowWidth: null
    }
  },
  components: {},
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
      //   this.window.width = window.innerWidth
      //   this.window.height = window.innerHeight
    },
    checkReverse() {
      if (this.windowWidth > 767) {
        return this.reverse
          ? { flexDirection: 'row' }
          : { flexDirection: 'row-reverse' }
      }
    }
  },
  computed: {},
  created() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.content {
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
    font-size: 1.3em;
  }

  &__picture {
    padding: 0.5em 1em;
    @include mq(xsmall) {
      fpadding: 0.6em 1.1em;
    }
    @include mq(small) {
      padding: 0.7em 1.3em;
    }
    @include mq(medium) {
      width: 50%;
    }
    @include mq(large) {
      padding: 0.8em 1.5em;
    }
    @include mq(xlarge) {
      padding: 1em 1.9em;
    }
    & img {
      width: 100%;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }
  &__description {
    padding: 0.5em 1em;
    @include mq(xsmall) {
      fpadding: 0.6em 1.1em;
    }
    @include mq(small) {
      padding: 0.7em 1.3em;
    }
    @include mq(medium) {
      width: 50%;
    }
    @include mq(large) {
      padding: 0.8em 1.5em;
    }
    @include mq(xlarge) {
      padding: 1em 1.9em;
    }
  }
}
</style>