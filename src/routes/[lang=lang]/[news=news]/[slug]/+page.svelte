<script lang="ts">
	import Carrousel from '$lib/components/Carrousel.svelte';
	import { slug } from '$lib/stores/stores.js';
	export let data;

	$: article = data.article;

	$: article ? slug.set(article.localizations.data[0].attributes.slug) : '';

	// console.log(article.images);
</script>

<div class="empty" />

<section class="article-container">
	<header>
		<h1>{article.title}</h1>
		<p>{article.date}</p>
	</header>

	<article class="text-content">
		{@html article.content}
	</article>
	{#if article.images}
		<!-- <Carrousel images={images.data} /> -->
	{/if}
</section>

<div class="empty bottom" />

<style>
	:global(main) {
		row-gap: 0 !important;
	}
</style>
