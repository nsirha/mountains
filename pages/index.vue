<template>
  <div>
    <Header />
    <main class="py-8 px-4">
      <section class="card-container max-w-6xl mx-auto grid place-items-center gap-4">
        <Card
          v-for="mountain in mountains"
          :key="mountain.slug"
          :image="mountain.image"
          :title="mountain.title"
          :continent="mountain.continent"
          :slug="mountain.slug"
        />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      mountains: null
    }
  },

  async asyncData({ $axios }) {
    const mountains = await $axios.$get(`https://api.nuxtjs.dev/mountains`);
    return { mountains };
    this.mountains = data;
  }

  // mounted() {
  //   const data = this.$axios.$get('https://api.nuxtjs.dev/mountains');
  //   console.log(data);
  //   this.mountains = data;
  // }
}
</script>

<style scoped>
.card-container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
