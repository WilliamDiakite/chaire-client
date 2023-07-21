<script lang="ts">
	import { t } from '$i18n/i18n';
	import { base } from '$lib/stores/stores.js';

	export let date: string;
	export let img: string;
	export let imgDesc: string;
	export let title: string;
	export let description: string;
	export let type: string;
</script>

<div class="card archive-card">
	<header>
		<h1>{$t(type)}</h1>
		<p>{date}</p>
		<a href={`${$t('route.archives')}/test1`}>bla</a>
	</header>
	{#if img}
		<img class={`${type === 'filter.publication' ? 'shadow' : ''}`} src={img} alt={imgDesc} />
	{/if}
	<div>
		<h3>{title}</h3>
		<p class="card-description">{description}</p>
	</div>
</div>

<style>
	.shadow {
		box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.34);
	}
</style>
