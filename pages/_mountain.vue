<template>
  <div>
    <Header />
    <main>
      <section class="py-6 info-container max-w-xl mx-auto">
        <p class="text-center font-semibold uppercase text-indigo-500">{{ mountain.continent }}</p>
        <h1 class="mt-2 mb-8 text-3xl text-center font-bold">{{ mountain.title }}</h1>
        <img :src="mountain.image" :alt="mountain.title" class="w-auto rounded mx-auto" width="600" height="300" />
        <ul class="flex gap-2 mt-2">
          <li><span class="font-bold">Height:</span> {{ mountain.height }}</li>
          <li><span class="font-bold">Country</span>: <span v-for="country in mountain.countries" :key="country"> {{ country }}</span></li>
        </ul>
        <p class="mt-4">{{ mountain.description }}</p>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const mountain = await $axios.$get(`https://api.nuxtjs.dev/mountains/${params.mountain}`)
    return { mountain }
  }
}
</script>
