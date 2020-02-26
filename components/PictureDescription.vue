<template>
  <div class="content" :style="checkReverse()">
    <div class="content__picture" @click="modalShowHide()">
      <!-- <div class="content__picture--img">
        <img
          :src="require(`@/assets/img/${path}${img}`)"
          :alt="alt"
          loading="lazy"
        /> -->
      <figure class="content__picture--img">
        <picture class="content__picture--img">
          <source
            :srcSet="require(`@/assets/img/${path}${img}?webp`)"
            type="image/webp"
            :alt="alt"
            loading="lazy"
          />
          <source
            :srcSet="require(`@/assets/img/${path}${img}`)"
            type="image/jpeg"
            :alt="alt"
            loading="lazy"
          />
          <img
            :srcSet="require(`@/assets/img/${path}${img}`)"
            :alt="alt"
            loading="lazy"
          />
        </picture>
      </figure>
      <!-- </div> -->
      <div v-if="modal" class="content__picture--modal" :style="modalStyle">
        <img :src="require(`@/assets/img/${path}fullSize/${img}`)" :alt="alt" />
        <div class="x">X</div>
      </div>
    </div>
    <div class="content__description">
      <p v-html="parseDescriptionPhoneNumber()" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PictureDescription',
  components: {},
  props: {
    path: String,
    img: String,
    description: String,
    alt: String,
    reverse: Number
  },
  data() {
    return {
      windowWidth: null,
      modal: false
    }
  },
  computed: {
    ...mapState(['phoneNumber, phoneNumberTxt']),
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
      if (this.windowWidth > 576) {
        return this.reverse
          ? { flexDirection: 'row' }
          : { flexDirection: 'row-reverse' }
      }
    },
    modalShowHide() {
      this.modal = !this.modal
    },
    parseDescriptionPhoneNumber() {
      return this.description.includes(this.phoneNumber)
        ? this.description.replace(
            this.phoneNumber,
            `<a href="tel:${this.phoneNumber}">${this.phoneNumberTxt}</a>`
          )
        : this.description
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
  @include flexColumn();

  &__picture {
    @include pictureAndDescription();

    &--img {
      width: 100%;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);

      & > img,
      & > source {
        width: 100%;
        position: relative;
        display: block;
        cursor: pointer;
        transition: 0.4s ease-in-out transform;
        &:hover {
          transform: scale(1.2);
        }
      }
    }

    &--modal {
      display: none;
      position: fixed;
      z-index: 999;
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
