<template>
  <section class="resort">
    <H1>Ośrodek wypoczynkowy Przydwórz</H1>
    <div class="resort__content">
      <PictureDescription
        v-for="(item, index) in content"
        :key="item.img"
        path="resort/"
        :img="item.img"
        :description="item.text"
        :reverse="index%2"
      />
    </div>
  </section>
</template>

<script>
import PictureDescription from '@/components/PictureDescription.vue'
export default {
  name: 'Resort',
  props: {},
  data() {
    return {
      content: [
        {
          img: 'IMG_6324.jpg',
          text:
            'Ośrodek wypoczynkowy w Przydworzu położony jest nad jeziorem Wieczno. Jest to obszar działania lokalnej Grupy Rybackiej "RYBAK" obejmującej teren sześciu partnerskich gmin położonych w północno wschodniej części województwa kujawsko pomorskiego: Chełmżę, Grudziądz, Płużnicę, Radzyń Chełmiński, Świecie n/O, Wąbrzeźno. Obszar objęty jest Lokalną Strategią Rozwoju Obszarów Rybackich. Największym z jezior położonym na tym terenie jest WIECZNO.'
        },
        {
          img: 'IMG_6316.jpg',
          text:
            ' Niegdyś jeden akwen, dziś podzielony na dwie części: Północną i Południową, które łączy wąski przesmyk Północna część jeziora Wieczno ma powierzchnię 147 ha, w najgłębszym miejscu dno osiąga 18 m (klara wody II) Południowa część jeziora Wieczno ma powierzchnię 199 ha i jest stosunkowo płytkie-średnia głębokość akwenu to 2,2 m (klara wody II). Przy zachodnim brzegu jeziora znajduje się wyspa, która w 1998 r została uznana za pomnik przyrody. Wyspa jest miejscem lęgowym ptaków, głównie kormorana czarnego.'
        },
        {
          img: 'IMG_6201.jpg',
          text:
            'Jednak spotkać tu można ok. 18 gatunków innych ptaków, jak rybitwa zwyczajna, rybitwa czarna, gęgawa oraz mewa śmieszka. Zapaleni wędkarze cenią zasoby jeziora, w którym żyją liczne gatunki ryb takie jak: węgorz, okoń, szczupak, wzdręga, lin, leszcz , a nawet raki. W okolicy jeziora występuje charakterystyczny drzewostan z dominacją olszy czarnej, sosny zwyczajnej i jesionu wyniosłego. Spotkać można także dęby bezszypułkowe, brzozy brodawkowate, topolę szarą i świerk zwyczajny.'
        },
        {
          img: 'IMG_6328.jpg',
          text:
            'Chętni na grzybobranie też znajdą ciekawe miejsca dla siebie. Jest to rejon o niepowtarzalnych walorach krajobrazowych i przyrodniczych co sprzyja rozwojowi turystyki i atrakcyjności tego regionu. W południowej części jeziora Wieczno, zlokalizowany jest znany w kraju Ośrodek Wypoczynkowy w Przydworzu. Dysponuje rozległą plażą z wydzielonym miejscem do zabaw dla najmłodszych, licznymi domkami letniskowymi, hotelikiem, pokojami noclegowymi, wypożyczalnią sprzętu wodnego, parkingiem, punkami handlowymi i gastronomicznymi.'
        },
        {
          img: 'IMG_6269.jpg',
          text:
            'Na terenie ośrodka jest również pole namiotowe z wydzielonym miejscem na ognisko i grillowanie, jak również boisko do siatkówki i place zabaw. Jest to idealne miejsce dla rodzin z małymi dziećmi, czemu sprzyja czysta i płytka woda. Rejon jeziora słynie z silnych wiatrów, co sprzyja miłośnikom sportów wodnych jak żeglarstwo i windsurfing.'
        }
      ]
    }
  },
  components: { PictureDescription },
  methods: {},
  computed: {},
  created() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.resort {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $gray;
  color: $white;
  h1 {
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5em 0;

    @include mq(medium) {
      padding: 0.7em;
      font-size: 1.4em;
    }
    @include mq(large) {
      padding: 0.8em;
      font-size: 1.6em;
    }
    @include mq(medium) {
      padding: 0.7em;
      font-size: 1.4em;
    }
    @include mq(xxlarge) {
      padding: 1em;
      font-size: 1.7em;
    }
  }
}
</style>