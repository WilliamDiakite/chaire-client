<script lang="ts">
	import NewsCard from '$components/NewsCard.svelte';
	import { screenType } from '$lib/stores/stores';
	import { sectionTitle } from '$lib/stores/stores';

	export let data;

	$: news = data.news ? data.news.sort((a, b) => b.date - a.date) : [];
</script>

<svelte:head>
	<title>{$sectionTitle}</title>
</svelte:head>

{#if news}
	<ul>
		{#each news as n, i}
			<li>
				<NewsCard data={n} hideBorder={$screenType === 'mobile' && i === 0} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul,
	li {
		display: contents;
	}
</style>
