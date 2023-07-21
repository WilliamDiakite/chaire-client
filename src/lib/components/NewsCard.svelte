<script lang="ts">
	import { t } from '$lib/i18n/i18n';

	export let date: string;
	export let img: string;
	export let imgDesc: string;
	export let title: string;
	export let description: string;
</script>

<div class="card news-card">
	<a href={`${$t('route.news')}/test1`}>bla</a>
	<h2>{date}</h2>
	{#if img}
		<img src={img} alt={imgDesc} />
	{/if}
	<div>
		<p class="title">{title}</p>
		<p class="description">{description}</p>
	</div>
</div>

<style>
	h2 {
		font-size: var(--fs-title);
	}
	img {
		max-width: 100%;
		margin-top: 1rem;
	}

	.title {
		font-weight: bold;
	}
</style>
