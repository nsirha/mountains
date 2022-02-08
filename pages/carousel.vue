<template>
  <div>
    <Header />
    <main>
      <div class="app">
        <carousel @next="next" @prev="prev">
          <carousel-slide
            v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
          >
            <img :src="slide" />
          </carousel-slide>
        </carousel>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Carousel from '~/components/Carousel.vue';
import CarouselSlide from '~/components/CarouselSlide.vue'

export default {
  data() {
    return {
      slides: [
        'https://picsum.photos/id/237/600/350',
        'https://picsum.photos/id/236/600/350',
        'https://picsum.photos/id/235/600/350',
        'https://picsum.photos/id/234/600/350',
        'https://picsum.photos/id/233/600/350',
        'https://picsum.photos/id/232/600/350',
      ],
      visibleSlide: 0,
      direction: 'left'
    }
  },
  computed: {
    slidesLength() {
      return this.slides.length;
    }
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLength - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = 'left';
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLength - 1;
      } else {
        this.visibleSlide--;
      }
        this.direction = 'right';
    }
  },
  components: {
    Carousel,
    CarouselSlide
  }
}
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}
</style>