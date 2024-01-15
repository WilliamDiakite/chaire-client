<script lang="ts">
	import Carrousel from '$lib/components/Carrousel.svelte';
	import { t } from '$lib/i18n/i18n.js';
	import { sanitize } from '$lib/helpers/helpers';

	export let data;

	$: article = data.article;
</script>

<div class="empty" />

<section class="article-container">
	<header>
		<h1>{$t(article.category)}</h1>
		<p>{article.date}</p>
	</header>

	<article class="text-content">
		{@html sanitize(article.content)}
	</article>
	{#if article.images && article.images.data}
		<Carrousel images={article.images.data} />
	{/if}
</section>

<div class="empty bottom" />

<style>
	:global(main) {
		row-gap: 0 !important;
	}
</style>
