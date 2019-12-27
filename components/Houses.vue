<template>
  <section id="houses" class="houses">
    <H1>Nasze domki</H1>
    <div class="houses__content">
      <PictureDescription
        v-for="(item, index) in content"
        :key="index"
        path="houses/"
        :img="item.img"
        :description="item.text"
        :alt="`Kama Przydwórz domek_${index+1}`"
        :reverse="index % 2"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script>
import PictureDescription from '@/components/PictureDescription.vue'
export default {
  name: 'Houses',
  components: { PictureDescription },
  props: {},
  data() {
    return {
      content: [
        {
          img: 'IMG_6176.jpg',
          text:
            'Mamy do wynajęcia domek w cichym Przydworzu nad jeziorem Wieczno, gmina Wąbrzeźno.'
        },
        {
          img: 'IMG_6173.jpg',
          text:
            'Domek w zabudowie bliźniaczej, do wynajęcia każda z części, teren ogrodzony z możliwością zaparkowania na nim auta. W każdej części znajduje się kuchnia (lodówka, kuchenka gazowa), łazienka z prysznicem (ciepła woda) oraz dwa pokoje w których najmłodsi goście w razie niepogody znajdą zabawki, karty, szachy czy kolorowanki.'
        },
        {
          img: 'IMG_9205.jpg',
          text:
            'Możliwość wynajęcia dwóch stron domku jednocześnie. Domek z TV naziemną kompletnie wyposażony (talerze, szklanki, sztućce, garnki itp). Dla naszych gości dostępny jest grill, hamak, miejsce na ognisko i dwa stoły z ławkami. Ogrodzony teren wspaniale nadaje się do zabawy z dziećmi, jak również dla dorosłych.'
        },
        {
          img: 'IMG_9219.jpg',
          text:
            'Piękne malownicze jezioro, ok 150 m do plaży. Idealne miejsce do wypoczynku z dziećmi (płytka czysta woda). Doskonałe tereny do wypoczynku wraz z rodziną, raj dla wędkarzy.'
        },
        {
          img: 'IMG_9226.jpg',
          text:
            'W sezonie czynne sklepy, bary, dyskoteki przy plaży, możliwość wypożyczenia rowerów wodnych, kajaków. NIE WYNAJMUJEMY MŁODZIEŻY BEZ OPIEKUNA.'
        },
        {
          img: 'IMG_9238.jpg',
          text:
            'Czas wynajmu minimum 2 doby w okresie poza sezonem. W sezonie czas wynajmu minimum 5 dni. Cena za wynajęcie 200 zł na dobę, dotyczy jednej strony domku w której pomieści się maksymalnie 6 osób. Doba zaczyna się w dniu przyjazdu od godz. 15:00 do godz. 12:00 dnia następnego.'
        },
        {
          img: 'IMG_9251.jpg',
          text:
            'Więcej informacji udzielamy pod numerem telefonu +48 787 784 556'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.houses {
  @include yellowSection();
  //   h1 {
  //     font-size: 1em;
  //     font-weight: bold;
  //     text-transform: uppercase;
  //     padding: 0.5em 0;

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
}
</style>
