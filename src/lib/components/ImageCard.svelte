<script lang="ts">
	import type { Image } from '$lib/data.js';

	export let image: Image | undefined;

	const imgURL = 'https://strapi-fzxq.onrender.com';
</script>

{#if image}
	<figure>
		<img src={imgURL + image.attributes.url} alt={image.attributes.alternativeText} />
	</figure>
{/if}

<style>
	figure {
		width: 100%;
	}

	img {
		width: 100%;
		object-fit: cover;
	}
</style>
