<template>
	<header class="p-4 flex items-center">
		<nuxt-link to="/"><h1 class="text-white font-bold uppercase text-xl">{{ title }}.</h1></nuxt-link>
		<nav class="flex text-white">
			<nuxt-link to="/about">About</nuxt-link>
			<nuxt-link to="/carousel">Carousel</nuxt-link>
		</nav>
		<button class="theme-toggle rounded-3xl" @click="toggleTheme">
			{{themeDark ? 'Dark' : 'Light'}}
		</button>
	</header>
</template>

<script>
export default {
	data() {
		return {
			title: 'Mountains inc',
			themeDark: false //put this in the store so it can be accessed in any components
		}
	},

	methods: {
		toggleTheme() {
			document.body.classList.toggle('dark');
			this.themeDark = !this.themeDark;
		}
	}
}
</script>

<style scoped>
header {
	background-image: var(--headerBg);
	height: 75px;
}

nav {
	flex: 1 0 auto;
	margin-left: 2rem;
	gap: 1rem;
}

nav a:hover,
nav a:focus {
	text-decoration: underline;
}

.theme-toggle {
	padding: 4px 20px;
	background: var(--toggleBg);
	color: var(--toggleColor);
}
</style>