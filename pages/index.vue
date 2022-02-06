<template>
  <div>
    <Header />
    <main>
      <section class="card-container">
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
main {
  padding: 2rem 1rem;
  background-color: var(--mainBg);
}

.card-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>
