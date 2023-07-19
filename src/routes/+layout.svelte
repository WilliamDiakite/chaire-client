<script lang="ts">
	import { t, locale } from '$i18n/i18n';
	import { page } from '$app/stores';
	import { archiveType, sectionTitle } from '$lib/stores/stores.js';
	import Animation from '$lib/components/Animation.svelte';
	import Nav from '$components/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import '$lib/styles/reset.css';
	import '$lib/styles/styles.css';
	import { redirects } from '$lib/stores/stores.js';

	export let data;

	// update stores
	$: locale.set(data.lang);
	$: redirects.set(data.redirects ? data.redirects : $redirects);

	$: isMenu = $page.route.id === '/[lang=lang]/[menu=menu]';
	$: showFooter = $page.route.id !== '/[lang=lang]/[menu=menu]' && $page.url.pathname !== '/';
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

{#if $page.route.id === '/'}
	<Animation />
{:else}
	<nav class={`${isMenu ? 'hidden' : ''}`}>
		<Nav
			bind:sectionTitle={$sectionTitle}
			bind:archiveTitle={$archiveType}
			bind:filterType={data.filterType}
		/>
	</nav>

	<div class={`${isMenu ? 'y-center' : ''}`}>
		<main
			class={`${$page.route.id === '/[lang=lang]/[menu=menu]' ? '' : 'page'} ${
				isGrid ? 'padded' : ''
			}`}
		>
			<slot />
		</main>
	</div>
{/if}

{#if showFooter}
	<Footer />
{/if}
