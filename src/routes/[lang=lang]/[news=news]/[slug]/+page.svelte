<script lang="ts">
	import Carrousel from '$lib/components/Carrousel.svelte';
	import ImageCard from '$lib/components/ImageCard.svelte';

	export let data;

	$: article = data.article;
	$: console.log(article.content, '\n\n');

	// $: article ? slug.set(article.localizations.data[0].attributes.slug) : '';
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
	{#if article.images.data}
		<Carrousel images={article.images.data} />
	{/if}
</section>

<div class="empty bottom" />

<style>
	:global(main) {
		row-gap: 0 !important;
	}
</style>
