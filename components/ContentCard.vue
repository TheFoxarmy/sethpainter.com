<template>
	<div class="card base-border">
		<h3><nuxt-link class="card-title" :to="location">{{title}}</nuxt-link></h3>
		<img v-if="loadedImage" :src="loadedImage" :alt="title + ' image missing'">
		<hr>
		<p v-html="description"></p>
		<nuxt-link v-if="readMore" class="card-title" :to="location"><strong>Read More</strong></nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'ContentCard',
	props: ['title', 'link', 'description', 'image', 'location', 'readMore'],
	data() {
		let loadedImage;
		try {
			loadedImage = require(`../assets/images/projects/${this?.image}`);
		} catch (error) {
			loadedImage = null;
			console.error(error);
		}
		return { loadedImage };
	}
}
</script>

<style scoped>
.card {
	display: inline-flex;
	flex-direction: column;
	padding: 1.5em;
	text-align: center;
	background: var(--main-bkg);
	line-height: 2;
	justify-content: space-between;
}
.card-title {
	text-decoration: none;
	color: black;
}
img {
	max-height: 150px;
	padding: 0.1em;
	/* width: 100%; */
	align-self: center;
}
</style>
