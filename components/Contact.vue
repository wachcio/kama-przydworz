<template>
  <section id="contact" class="contact">
    <h1>Kontakt</h1>
    <div class="contact__container">
      <div class="contact__picture">
        <img src="@/assets/img/contact/iphone.jpg" alt />
      </div>
      <div class="contact__description">
        <p>Głównym kontaktem do nas jest telefon.</p>
        <a class="contact__description--phone-number" :href="`tel:${phoneNumber}`">{{ phoneNumber }}</a>
        <p>
          Tutaj zawsze uzyskasz najpewniejsze i najświeższe informacje na każdy
          temat związany z domkami, kosztami czy terminami najmu.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Contact',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: { ...mapState(['phoneNumber']) },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.contact {
  @include yellowSection();
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   font-size: 0.4em;
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

  //   & h1 {
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

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // font-size: 0.4em;
    @include pictureAndDescription();

    // @include mq(xsmall) {
    //   font-size: 0.5em;
    // }
    // @include mq(small) {
    //   font-size: 0.7em;
    // }
    @include mq(small) {
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
    // @include mq(large) {
    //   font-size: 1em;
    // }
    // @include mq(xlarge) {
    //   font-size: 1.1em;
    // }
  }
  &__picture {
    // @include pictureAndDescription();
    width: 100%;
    @include mq(small) {
      width: 50%;
    }
    & img {
      width: 100%;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
      //   @include mq(small) {
      //     width: 50%;
      //   }
    }
  }
  &__description {
    padding: 2rem 0;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include mq(small) {
      width: 50%;
      padding-left: 1rem;
    }
    &--phone-number {
      text-align: center;
      font-size: 2.7rem;
      font-weight: bold;
      color: $black;
      text-decoration: none;
    }
  }
}
</style>
