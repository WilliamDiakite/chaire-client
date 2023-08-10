<script lang="ts">
	import NewsCard from '$components/NewsCard.svelte';
	import { screenType } from '$lib/stores/stores';

	export let data;

	$: news = data.news.sort((a, b) => b.date - a.date);
	$: news ? (news = [...news, ...news, ...news]) : [];
</script>

<ul>
	{#each news as n, i}
		<li>
			<NewsCard data={n} hideBorder={$screenType === 'mobile' && i === 0} />
		</li>
	{/each}
</ul>

<style>
	ul,
	li {
		display: contents;
	}
</style>
