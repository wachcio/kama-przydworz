<template>
  <a href="#" v-scroll-to="'#top'" class="arrow" title="Przewiń na górę strony">
    <fa :icon="['fas', 'angle-double-up']" class="arrow__icon" />
  </a>
</template>

<script>
export default {
  name: 'Arrow',
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
  &:hover .arrow__icon {
    // transform: translate(-50%, -150%);
    animation-duration: 0.7s;
    animation-name: arrowUp;
    animation-iteration-count: infinite;
  }
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
