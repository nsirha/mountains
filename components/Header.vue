<template>
	<header class="p-4">
		<h1 class="text-white font-bold uppercase text-xl">{{ title }}.</h1>
		<button class="theme-toggle rounded-3xl" @click="toggleTheme">
			{{themeDark ? 'Dark' : 'Light'}}
		</button>
	</header>
</template>

<script>
export default {
	data() {
		return {
			title: 'Mountains',
			themeDark: false
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
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 75px;
}

.theme-toggle {
	padding: 4px 20px;
	background: var(--toggleBg);
	color: var(--toggleColor);
}
</style>