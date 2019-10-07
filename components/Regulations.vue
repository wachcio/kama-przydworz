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

  ol {
    padding: 0 0 3rem 1.8rem;
    @include mq(xsmall) {
      padding: 0 0 3rem 2rem;
    }
    @include mq(small) {
      padding: 0 0 3rem 2.2rem;
    }
    @include mq(medium) {
      padding: 0 0 3rem 2.8rem;
    }
    @include mq(large) {
      padding: 0 0 3rem 3.2rem;
    }
    @include mq(xlarge) {
      padding: 0 0 3rem 3.8rem;
    }
    @include mq(xxlarge) {
      padding: 0 0 3rem 3.8rem;
    }
  }
}
</style>
