<script lang="ts">
	import { t, locale } from '$i18n/i18n';
	import { page } from '$app/stores';
	import { redirects, prevPage, axisFilter, filters } from '$lib/stores/stores';

	export let sectionTitle: string;
	export let archiveTitle: string | null = null;
	export let filterType: 'role' | 'event' | 'none' = 'none';

	const filterAxis = ['filter.axis1', 'filter.axis2'];
	const allFilters = {
		role: [
			'filter.researcher',
			'filter.coresearcher',
			'filter.collaborators',
			'filter.student',
			'filter.institution'
		],
		event: ['filter.workshop', 'filter.colloque', 'filter.conf'],
		none: []
	};

	$: filterList = allFilters[filterType];

	const filterOnClick = (e) => {
		const filter = e.target.id;
		if ($filters.includes(filter)) {
			$filters.splice($filters.indexOf(filter), 1);
		} else {
			$filters.push(filter);
		}
		$filters = $filters;
	};

	const axisOnClick = (e) => axisFilter.set(e.target.id);

	const onMouseEnter = () => prevPage.set($page.url.pathname);
</script>

<a class="btn primary" href={`/${$locale}/menu`} on:mouseenter={onMouseEnter}>Menu</a>

<div class={`btn tertiary ${filterType === 'none' ? 'long' : ''}`}>
	{#if sectionTitle}
		{sectionTitle}
	{/if}
</div>

<div class="tags">
	{#if filterType !== 'none'}
		{#if filterType === 'role' || filterType === 'event'}
			<ul class="axis-filters" role="listbox">
				{#each filterAxis as f}
					<li role="option" aria-selected={$axisFilter === f}>
						<button
							id={f}
							class={`btn primary ${$axisFilter === f ? 'primary-selected' : ''}`}
							on:click={axisOnClick}
						>
							{$t(f)}
						</button>
					</li>
				{/each}
			</ul>
			<ul class="2-level" role="listbox">
				{#each filterList as f}
					<li role="option" aria-selected={$filters.includes(f)}>
						<button
							id={f}
							class={`btn secondary ${$filters.includes(f) ? 'secondary-selected' : ''}`}
							on:click={filterOnClick}
						>
							{$t(f)}
						</button>
					</li>
				{/each}
			</ul>
		{:else if archiveTitle}
			<div class="btn secondary">{archiveTitle}</div>
		{/if}
	{/if}
</div>
<ul class="lang-selector">
	<li>
		<a
			class="btn primary"
			href={$redirects.fr}
			rel="alternative"
			hreflang="fr"
			data-sveltekit-reload>FR</a
		>
	</li>
	<li>
		<a
			class="btn primary"
			href={$redirects.en}
			rel="alternative"
			hreflang="en"
			data-sveltekit-reload>EN</a
		>
	</li>
</ul>

<style>
	.axis-filters {
		display: flex;
		gap: 1rem;
	}

	button {
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}

	.long {
		width: max-content;
	}

	.tags {
		grid-column: span 5;
	}

	.lang-selector {
		display: flex;
		flex-direction: row;
	}

	.lang-selector > li:first-child {
		margin-left: auto;
		margin-right: 1rem;
	}

	.tags > ul {
		display: flex;
		gap: 1rem;
	}

	.tags > * + * {
		margin-top: 0.5rem;
	}

	.primary-selected {
		background-color: orangered;
		border-color: orangered;
	}
	.secondary-selected {
		border-color: orangered;
		color: orangered;
		border-width: 1px;
	}
</style>
