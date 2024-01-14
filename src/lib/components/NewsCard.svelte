<script lang="ts">
	import { page } from '$app/stores';
	import Thumbnail from '$lib/components/Thumbnail.svelte';
	import type { News } from '$lib/data';

	export let data: News;

	export let hideBorder = false;
</script>

<a
	class={`card news-card ${hideBorder ? 'hide-border' : ''}`}
	href={`${$page.url.pathname}/${data.slug}`}
>
	<h1 class="card-title">{data.date}</h1>
	{#if data.images}
		{#if data.imgPlacement === 'top'}
			{#if data.images && data.images.data.length > 0}
				<Thumbnail image={data.images.data[0]} />
			{/if}
		{/if}
		<div class={`${data.images.data.length > 0 ? '' : 'no-images'}`}>
			<h2 class="card-description-title">{data.title}</h2>
			<p class="card-description">{data.description}</p>
		</div>

		{#if data.imgPlacement === 'bottom'}
			{#if data.images}
				<Thumbnail image={data.images.data[0]} />
			{/if}
		{/if}
	{/if}
</a>

<style>
	.no-image {
		margin-top: 1rem;
	}
</style>
