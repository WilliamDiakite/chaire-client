<script lang="ts">
	import Carrousel from '$lib/components/Carrousel.svelte';
	import { t } from '$lib/i18n/i18n.js';
	import { slug } from '$lib/stores/stores.js';

	export let data;

	$: article = data.article;
	$: article ? slug.set(article.localizations.data[0].attributes.slug) : '';

	// console.log(article.images);
</script>

<div class="empty" />

<section class="article-container">
	<header>
		<h1>{$t(article.category)}</h1>
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
