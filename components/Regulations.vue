<template>
  <section id="regulations" class="regulations">
    <h2>Regulamin domków</h2>

    <div class="regulationList">
      <transition-group name="list" tag="ol" v-if="regulationText">
        <li
          v-for="(item, index) in listLimit(1)"
          :key="`ListLess_${index}`"
          v-html="parseDescriptionPhoneNumber(item)"
        />
        <template v-if="showMore">
          <li
            v-for="(item, index) in listLimit(2)"
            :key="`ListMore_${index}`"
            v-html="parseDescriptionPhoneNumber(item)"
          />
        </template>
      </transition-group>
    </div>

    <button
      class="readMore"
      @click="showMore = !showMore"
    >{{ !showMore ? 'Czytaj więcej...' : 'Czytaj mniej...' }}</button>

    <h3>DZIĘKUJEMY ZA WSPÓŁPRACĘ I ŻYCZYMY UDANEGO WYPOCZYNKU</h3>
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
      regulationText: regulationTextRaw.split(/\n/g),
      showMore: false,
      howManyLiShow: 5
    }
  },
  computed: {
    ...mapState(['phoneNumber', 'phoneNumberTxt'])
  },
  watch: {},
  mounted() {},
  methods: {
    parseDescriptionPhoneNumber(item) {
      return item.includes(this.phoneNumberTxt)
        ? item.replace(
            this.phoneNumberTxt,
            `<a href="tel:${this.phoneNumber}" >${this.phoneNumberTxt}</a>`
          )
        : item
    },
    listLimit(parameter) {
      if (parameter == 1) {
        return this.regulationText.slice(0, this.howManyLiShow)
      }
      if (parameter == 2) {
        return this.regulationText.slice(this.howManyLiShow, -1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.regulations {
  @include graySection();
  text-align: justify;

  .regulationList {
    padding: 0px 1rem 3rem 3.2rem;

    @include mq(xlarge) {
      padding: 0 0 3rem 3.8rem;
    }
  }
  .readMore {
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.45);
    text-align: center;
    background-color: $black;
    border: 2px solid $black;
    border-radius: 1em;
    border-bottom-right-radius: 0;
    padding: 0.3em 0.8em;
    margin: 0.3em;
    color: $yellow;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>
