<template>
  <div class="card shadow-xl">
    <nuxt-link :to="slug">
      <img :src="image" :alt="title" width="250" height="125" loading="lazy" />
      <div class="card-content p-2.5">
        <h3 class="title">{{ title }}</h3>
        <p class="continent text-gray-400 text-xs">{{ continent }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    continent: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    slug: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.card {
  width: 250px;
  border-bottom-left-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);
}

.card-content {
  border-bottom-left-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);
  background-color: var(--cardBg);
}

.title {
  color: var(--cardTextColor);
}

img {
  background-color: crimson;
  width: 250px;
  height: 125px;
  object-fit: cover;
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
}

a:hover .title,
a:focus .title {
  text-decoration: underline;
}
</style>