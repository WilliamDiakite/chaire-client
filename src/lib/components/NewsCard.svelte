<script lang="ts">
	import { page } from '$app/stores';
	import ImageCard from './ImageCard.svelte';

	export let data: {
		date: string;
		title: string;
		description: string;
		images: {
			data: {
				attributes: {
					alternativeText: string;
				};
				formats: {
					thumbnail: {
						url: string;
					};
				};
			};
		}[];
		imgPlacement?: 'top' | 'bottom';
		slug: string;
	};

	export let hideBorder = false;
</script>

<a
	class={`card news-card ${hideBorder ? 'hide-border' : ''}`}
	href={`${$page.url.pathname}/${data.slug}`}
>
	<h1 class="card-title">{data.date}</h1>
	{#if data.imgPlacement === 'top'}
		{#if data.images.length > 0}
			<ImageCard image={data.images.data[0]} />
		{/if}
	{/if}
	<div class={`${data.images.length > 0 ? '' : 'no-images'}`}>
		<h2 class="card-description-title">{data.title}</h2>
		<p class="card-description">{data.description}</p>
	</div>

	{#if data.imgPlacement === 'bottom'}
		{#if data.images}
			<ImageCard image={data.images.data[0]} />
		{/if}
	{/if}
</a>

<style>
	.no-image {
		margin-top: 1rem;
	}
</style>
