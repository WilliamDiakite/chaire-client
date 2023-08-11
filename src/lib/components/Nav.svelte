<script lang="ts">
	import { t } from '$i18n/i18n';
	import { page } from '$app/stores';
	import {
		redirects,
		prevPage,
		screenType,
		sectionTitle,
		archiveType,
		filterType,
		i18nSlug,
		slug
	} from '$lib/stores/stores';
	import Filters from './Filters.svelte';
	import { invalidateAll } from '$app/navigation';

	export let isMobile = false;

	const onMouseEnter = () =>
		$page.route.id?.includes('menu') ? null : prevPage.set($page.url.pathname);

	$: isFixed = $page.route.id === '/[lang=lang]';
	$: addBg = isFixed && ($screenType === 'tablet-vertical' || $screenType === 'mobile');
	$: console.log('Slugs set in Nav', $slug, $i18nSlug);
</script>

<nav class={`${isFixed ? 'nav-fixed' : ''} ${addBg ? 'clr-bg' : ''}`}>
	<a class="btn primary menu-btn" href={`${$t('route.menu')}`} on:mouseenter={onMouseEnter}>Menu</a>

	<div
		class={`btn tertiary ${$filterType === 'none' ? 'long' : ''} ${
			!$sectionTitle ? 'transparent' : ''
		} section-title`}
	>
		{#if $sectionTitle && !isMobile}
			{$sectionTitle}
		{/if}
	</div>

	{#if $filterType !== 'none'}
		{#if !isMobile && ($filterType === 'role' || $filterType === 'event')}
			<Filters addAllBtn={$page.route.id?.includes('archives')} bind:filterType={$filterType} />
		{:else if $archiveType}
			<div class="btn secondary">{$archiveType}</div>
		{/if}
	{:else}
		<div class="nav-fill" />
	{/if}

	<ul class="lang-selector">
		<li>
			<a
				class="btn primary"
				href={$page.data.lang === 'fr' ? $page.url.pathname : `${$redirects.fr}/${$i18nSlug}`}
				rel="alternative"
				on:click={() => invalidateAll()}
				hreflang="fr">FR</a
			>
		</li>
		<li>
			<a
				class="btn primary"
				href={$page.data.lang === 'en' ? $page.url.pathname : `${$redirects.en}/${$i18nSlug}`}
				rel="alternative"
				on:click={() => invalidateAll()}
				hreflang="en">EN</a
			>
		</li>
	</ul>
</nav>

<style>
	.nav-fixed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		min-height: fit-content !important;
		z-index: 1;
	}
	.clr-bg {
		background-color: #ff6118;
	}
	.section-title {
		min-width: max-content;
	}
	.long {
		width: max-content;
	}

	.lang-selector {
		display: flex;
		flex-direction: row;
	}

	.lang-selector > li:first-child {
		margin-left: auto;
		margin-right: 1rem;
	}

	.nav-fill {
		grid-column: span 5;
	}
	.transparent {
		opacity: 0;
	}
</style>
