<script lang="ts">
	import { sectionTitle } from '$lib/stores/stores.js';
	import ButtonBtt from '$lib/components/ButtonBtt.svelte';
	import ImageCard from '$lib/components/ImageCard.svelte';

	export let data;

	$: article = data ? data.article : null;

	$: $sectionTitle = article && article.header ? article.header : '';
</script>

<svelte:head>
	<title>{$sectionTitle}</title>
</svelte:head>

<div class="empty" />

<section>
	<article class="text-content axis">
		{@html article.content}
	</article>

	<div class="images">
		<div class="image-container">
			{#if article.image_small.data}
				<ImageCard image={article.image_small.data} />
			{/if}
			<p>{article.image_small.data.attributes.caption}</p>
		</div>
		<div class="image-container big">
			{#if article.image_big && article.image_big.data}
				<ImageCard image={article.image_big.data} />
				<p>{article.image_big.data.attributes.caption}</p>
			{/if}
		</div>
	</div>
</section>

<ButtonBtt />

<style>
	section {
		display: contents;
	}

	article {
		margin-top: 1.5rem;
	}

	.images {
		grid-column: span 3;
	}
	.images > * + * {
		margin-top: 1.5rem;
	}

	.image-container {
		margin-top: 1.5rem;
		padding-left: 3rem;
	}

	.image-container > p {
		font-size: 0.8rem;
		line-height: 1rem;
		margin-top: 0.5rem;
	}

	.big {
		max-width: 90%;
	}

	@media screen and (min-width: 481px) and (max-width: 820px) {
		.images {
			grid-column: 1/-1;
		}

		.image-container {
			padding-left: 0;
		}
	}
</style>
