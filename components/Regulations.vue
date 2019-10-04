<template>
  <section class="regulations">
    <h1>Regulamin domków</h1>
    <ol>
      <li v-for="(item, index) in regulationText" :key="index" v-if="item">{{item}}</li>
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
    padding: 0 3em;
  }
}
</style>
