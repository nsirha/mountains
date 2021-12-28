<template>
  <div>
    <Header />
    <main>
      <Card
        v-for="mountain in mountains"
        :key="mountain.slug"
        :title="mountain.title"
        :image="mountain.image"
      />

      <ul>
        <li>✅ Get mountains api data from api.nuxt.dev - https://api.nuxtjs.dev/mountains</li>
        <li>✅ Create Card component</li>
        <li>✅ Loop cards</li>
        <li>Setup Vercel</li>
        <li>Setup dynamic pages</li>
        <li>Move data to the store. Pass in data via props</li>
        <li>Setup Tailwind CSS</li>
        <li>CSS custom properties and a dark mode toggle</li>
        <li>Gsap animations</li>
        <li>Google fonts</li>
      </ul>
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