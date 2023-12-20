<script lang="ts">
	import { t, locale } from '$i18n/i18n';
	import { page } from '$app/stores';
	import Nav from '$components/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import Filters from '$lib/components/Filters.svelte';
	import {
		redirects,
		archiveType,
		sectionTitle,
		base,
		screenWidth,
		screenType,
		homeShowFooter,
		prevPage,
		filterType
	} from '$lib/stores/stores.js';
	import '$lib/styles/reset.css';
	import '$lib/styles/styles.css';

	export let data;

	$: isMobile = $screenType === 'mobile';
	// $: console.log('screen', $screenType, $screenWidth);

	// update stores
	$: locale.set(data.lang);
	$: redirects.set(data.redirects ? data.redirects : $redirects);
	$: base.set(data.base);
	$: sectionTitle.set(data.sectionTitle);
	$: filterType.set(data.filterType);
	$: $screenType !== 'desktop' ? homeShowFooter.set(false) : null;

	$: showFilters =
		$screenType === 'mobile' &&
		($page.route.id === '/[lang=lang]/[archives=archives]' ||
			$page.route.id?.includes('participants'));
	$: isMenu = $page.route.id === '/[lang=lang]/[menu=menu]';
	$: showFooter =
		($page.route.id === '/[lang=lang]' && $homeShowFooter) || $page.url.pathname === '/';
	$: isGrid =
		$page.route.id === '/[lang=lang]/[archives=archives]' ||
		$page.route.id === '/[lang=lang]/[news=news]';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/398deee16b.js" crossorigin="anonymous"></script>
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
</svelte:head>

{#if isMenu}
	<div class="background" />
{/if}
<!-- 
{#if !isMenu}
	<Nav bind:isMobile />
{:else if isMenu && $screenType === 'desktop'}
	<a href={$prevPage} class="menu-close"><img src="/xmark.svg" alt="Close menu logo" /></a>
{/if} -->

<div class={`${isMenu ? 'center-menu' : ''}`}>
	<main
		bind:clientWidth={$screenWidth}
		class={`${$page.route.id === '/[lang=lang]/[menu=menu]' ? '' : 'page'} ${
			isGrid ? 'padded' : ''
		}`}
	>
		{#if !isMenu}
			{#if $screenType === 'mobile'}
				<div class="section-title-mobile">{$sectionTitle}</div>
				{#if showFilters}
					<Filters bind:filterType={data.filterType} />
				{/if}
			{/if}
		{/if}
		<slot />
	</main>
</div>

{#if showFooter}
	<Footer />
{/if}

<style>
	.menu-close {
		/* background-color: var(--clr-accent); */
		position: absolute;
		font-size: 3rem;
		border: none;
		top: 4rem;
		left: var(--padding-main);
		color: white;
		cursor: pointer;
		top: 1rem;
	}

	.menu-close > img {
		width: 3.5rem;
		color: white;
	}
</style>
