<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$i18n/i18n';

	export let archive;

	$: ({ category, title, description, date, image, imgPlacement, slug } = archive);

	const imgURL = 'https://strapi-hkwp.onrender.com';

	console.log(slug);
</script>

<a class="card" href={`${$page.url.pathname}/${slug}`}>
	<header>
		<h1 class="card-title">{$t(category)}</h1>
		<p>{date}</p>
	</header>
	{#if imgPlacement === 'top'}
		{#if image}
			<img src={imgURL + image.data.attributes.url} alt={image.data.attributes.altText} />
		{/if}
	{/if}
	<div>
		<h2 class="card-description-title">{title}</h2>
		<p class="card-description">{description}</p>
	</div>
	{#if imgPlacement === 'bottom'}
		{#if image}
			<img src={imgURL + image.data.attributes.url} alt={image.data.attributes.altText} />
		{/if}
	{/if}
</a>
