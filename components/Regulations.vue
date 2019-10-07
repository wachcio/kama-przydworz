<template>
  <section id="regulations" class="regulations">
    <h1>Regulamin domków</h1>
    <ol>
      <li v-for="(item, index) in regulationText" v-if="item" :key="index">{{ item }}</li>
    </ol>
  </section>
</template>

<script>
import regulationTextRaw from '@/static/regulations.txt'
export default {
  name: 'Regulations',
  components: {},
  props: {},
  data() {
    return {
      regulationText: regulationTextRaw.split(/\n/g)
    }
  },
  computed: {},
  watch: {},
  mounted() {
    // this.regulationText = this.parseRegulationFiles()
  },
  methods: {
    parseRegulationFiles() {
      return this.regulationTextRaw.split(/\n/g)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.regulations {
  @include graySection();
  text-align: justify;
  //   @include mq(xsmall) {
  //     font-size: 0.5em;
  //   }
  //   @include mq(small) {
  //     font-size: 0.7em;
  //   }

  //   @include mq(large) {
  //     font-size: 1em;
  //   }
  //   @include mq(xlarge) {
  //     font-size: 1.1em;
  //   }
  //   h1 {
  //     @include mq(medium) {
  //       padding: 0.7em;
  //       font-size: 1.4em;
  //     }
  //     @include mq(large) {
  //       padding: 0.8em;
  //       font-size: 1.6em;
  //     }
  //     @include mq(medium) {
  //       padding: 0.7em;
  //       font-size: 1.4em;
  //     }
  //     @include mq(xxlarge) {
  //       padding: 1em;
  //       font-size: 1.7em;
  //     }
  //   }
  ol {
    padding: 0 3em;
  }
}
</style>
