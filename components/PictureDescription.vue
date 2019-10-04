<template>
  <div class="content" :style="checkReverse()">
    <div class="content__picture" @click="modalShowHide()">
      <img :src="require(`@/assets/img/${path}${img}`)" />
      <div v-if="modal" class="content__picture--modal" :style="modalStyle">
        <img :src="require(`@/assets/img/${path}${img}`)" />
        <div class="x">X</div>
      </div>
    </div>
    <div class="content__description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureDescription',
  components: {},
  props: { path: String, img: String, description: String, reverse: Number },
  data() {
    return {
      windowWidth: null,
      modal: false
    }
  },
  computed: {
    modalStyle() {
      return this.modal ? { display: 'block' } : { display: 'none' }
    }
  },
  watch: {},
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  created() {},
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
    },
    modalShowHide() {
      this.modal = !this.modal
    }
  }
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
    font-size: 1.1em;
  }

  &__picture {
    cursor: pointer;
    @include pictureAndDescription();
    & img {
      width: 100%;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
      transition: 0.1s transform;
      &:hover {
        transform: scale(1.03) rotate(1deg);
      }
    }

    &--modal {
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
      & img {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1000;
        width: 90%;
        height: auto;
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
  &__description {
    padding: 0.5em 1em;
    text-align: justify;
    @include pictureAndDescription();
  }
}
</style>
