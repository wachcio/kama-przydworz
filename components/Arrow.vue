<template>
  <a
    href="#"
    v-scroll-to="{ el: '#top', onDone: onDone }"
    class="arrow"
    :class="isAnimation ? 'arrowAnimation' : ''"
    title="Przewiń na górę strony"
  >
    <fa :icon="['fas', 'angle-double-up']" class="arrow__icon" />
  </a>
</template>

<script>
export default {
  name: 'Arrow',
  data() {
    return {
      isAnimation: true
    }
  },
  components: {},
  methods: {
    onDone() {
      console.log('koniec')
    },
    is_touch_device() {
      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
      var mq = function(query) {
        return window.matchMedia(query).matches
      }

      if (
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      ) {
        return true
      }

      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(
        ''
      )
      return mq(query)
    }
  },
  computed: {},
  mounted() {
    if (this.is_touch_device()) {
      // alert('Your device is Touch')
      this.isAnimation = false
    } else {
      // alert('Your device is NOT touch')
      this.isAnimation = true
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.arrow {
  position: fixed;
  bottom: 1em;
  right: 1em;
  height: 2em;
  width: 2em;
  background-color: $yellow;
  border: 0.1em solid $black;
  border-radius: 50%;
  opacity: 0.3;
  overflow: hidden;
  transition: 0.4s opacity;
  &:hover {
    opacity: 1;
  }
}

.arrowAnimation:hover .arrow__icon {
  // transform: translate(-50%, -150%);

  animation-duration: 0.7s;
  animation-name: arrowUp;
  animation-iteration-count: infinite;
}

@keyframes arrowUp {
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-50%, -150%);
    opacity: 1;
  }
  26% {
    opacity: 0;
  }
  27% {
    transform: translate(-50%, 150%);
    opacity: 1;
  }
  28% {
    opacity: 1;
  }

  100% {
    transform: translate(-50%, -50%);
  }
}

.arrow__icon {
  position: absolute;
  color: $black;
  font-size: 1em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;

  transition: 0.2s transform;
}
</style>
