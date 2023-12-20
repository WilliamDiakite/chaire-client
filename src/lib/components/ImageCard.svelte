<script lang="ts">
	import type { Image } from '$lib/data.js';

	export let image: Image | undefined;

	const imgURL = 'https://strapi-fzxq.onrender.com';
</script>

{#if image}
	<img src={imgURL + image.attributes.url} alt={image.attributes.alternativeText} />
{/if}

<style>
	img {
		width: 100%;
		object-fit: cover;
	}
</style>
