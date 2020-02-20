<template>
  <section id="regulations" class="regulations">
    <h2>Regulamin domków</h2>
    <ol>
      <li
        v-for="(item, index) in regulationText"
        :key="index"
        v-if="item"
        v-html="parseDescriptionPhoneNumber(item)"
      />
    </ol>
    <h3>DZIĘKUJEMY ZA WSPÓŁPRACĘ I ŻYCZYMY UDANEGO WYPOCZYNKU</h3>
    <h4>Telefony alarmowe</h4>
    <p>POGOTOWIE RATUNKOWE: 999 LUB 112</p>
    <p>STRAŻ POŻARNA: 998 LUB 112</p>
    <p>POLICJA: 997 LUB 112</p>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import regulationTextRaw from '@/assets/regulations.txt'
export default {
  name: 'Regulations',
  components: {},
  props: {},
  data() {
    return {
      regulationText: regulationTextRaw.split(/\n/g)
    }
  },
  computed: { ...mapState(['phoneNumber', 'phoneNumberTxt']) },
  watch: {},
  mounted() {
    // this.regulationText = this.parseRegulationFiles()
  },
  methods: {
    parseRegulationFiles() {
      return this.regulationTextRaw.split(/\n/g)
    },
    parseDescriptionPhoneNumber(item) {
      return item.includes(this.phoneNumberTxt)
        ? item.replace(
            this.phoneNumberTxt,
            `<a href="tel:${this.phoneNumber}" >${this.phoneNumberTxt}</a>`
          )
        : item
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
    padding: 0px 1rem 3rem 3.2rem;

    @include mq(xlarge) {
      padding: 0 0 3rem 3.8rem;
    }
  }
}
</style>
