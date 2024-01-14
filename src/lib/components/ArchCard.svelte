<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$i18n/i18n';
	import Thumbnail from '$lib/components/Thumbnail.svelte';

	export let archive;

	$: ({ category, title, description, date, images, imgPlacement, slug } = archive);
	const imgURL = 'https://strapi-hkwp.onrender.com';
</script>

<a class="card" href={`${$page.url.pathname}/${slug}`}>
	<header>
		<h1 class="card-title">{$t(category)}</h1>
		<p>{date}</p>
	</header>
	{#if imgPlacement === 'top'}
		{#if images}
			<Thumbnail image={images.data[0]} />
		{/if}
	{/if}
	<div>
		<h2 class="card-description-title">{title}</h2>
		<p class="card-description">{description}</p>
	</div>
	{#if imgPlacement === 'bottom'}
		{#if images}
			<Thumbnail image={images.data[0]} />
		{/if}
	{/if}
</a>
