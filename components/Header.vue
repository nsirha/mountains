<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
export default {
	data() {
		return {
			title: "Mountains"
		}
	}
}
</script>

<style scoped>
h1 {
	color: crimson;
	font-weight: bold;
	text-align: center;
	text-decoration: underline;
	text-transform: uppercase;
}
</style>