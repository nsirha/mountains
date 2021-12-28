<template>
  <div class="card">
    <img :src="image" :alt="title" width="150" height="150" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid black;
}
</style>