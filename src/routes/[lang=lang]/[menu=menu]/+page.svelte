<script lang="ts">
	import { t } from '$i18n/i18n';
	import { prevPage, screenType } from '$lib/stores/stores';
</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

{#if $screenType !== 'desktop'}
	<a href={$prevPage} class="menu-close"><img src="/xmark.svg" alt="Close menu logo" /></a>
{/if}
<ul class="menu-navigation">
	<li><a href={`${$t('route.home')}`}>{$t('menu.home')}</a></li>
	<li><a href={`${$t('route.about')}`}>{$t('menu.about')}</a></li>
	<li>
		<a href={`${$t('route.axis1')}`}>{$t('menu.axe1')}</a>
		<span>{$t('menu.axe1-sub')}</span>
	</li>
	<li>
		<a href={`${$t('route.axis2')}`}>{$t('menu.axe2')}</a>
		<span>{$t('menu.axe2-sub')}</span>
	</li>
	<li><a href={`${$t('route.tenured')}`}>{$t('menu.tenured')}</a></li>
	<li><a href={`${$t('route.participants')}`}>{$t('menu.participants')}</a></li>
	<li><a href={`${$t('route.news')}`}>{$t('menu.news')}</a></li>
	<li><a href={`${$t('route.archives')}`}>{$t('menu.archives')}</a></li>
	<li><a href={`${$t('route.contact')}`}>{$t('menu.contact')}</a></li>
</ul>

<style>
	.menu-close {
		font-size: 3rem;
		border: none;
		left: var(--padding-main);
		color: white;
		cursor: pointer;
		margin-bottom: 1rem;
	}

	.menu-close > img {
		width: 3.5rem;
		color: white;
	}

	.menu-navigation {
		grid-column: 1/-1;
		display: flex;
		flex-direction: column;
	}

	.menu-navigation > li {
		--padding-vertical: 0.8rem;
		/* border-top: var(--border); */
		border-bottom: var(--border);
		padding: var(--padding-vertical) 0 var(--padding-vertical) 0.1rem;
		transition: background-color 0.2s ease;
	}

	.menu-navigation > li:first-child {
		border-top: var(--border);
	}

	a {
		color: black;
		font-size: 2.4rem;
		text-decoration: none;
		margin-right: 2.5rem;
	}

	@media (hover: hover) {
		.menu-navigation > li:hover {
			background-color: white;
		}
	}
	@media (pointer: coarse) {
		.menu-navigation > li:t {
			background-color: white;
		}
	}
</style>
