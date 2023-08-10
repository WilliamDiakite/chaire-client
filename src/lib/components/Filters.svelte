<script lang="ts">
	import { t } from '$i18n/i18n';
	import { slide } from 'svelte/transition';
	import { axisFilter, filters, screenType } from '$lib/stores/stores';

	export let addAllBtn = false;
	export let filterType: 'role' | 'event' | 'none' = 'none';

	let axisFilters = ['filter.axis1', 'filter.axis2'];

	const allFilters = {
		role: [
			'filter.researcher',
			'filter.coresearcher',
			'filter.collaborators',
			'filter.student',
			'filter.institution'
		],
		event: ['filter.workshop', 'filter.colloque', 'filter.conference'],
		none: []
	};

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

	let expanded = false;
	const expandOnClick = () => (expanded = !expanded);

	$: addAllBtn ? axisFilters.splice(0, 0, 'filter.all') : null;
	$: axisFilters = axisFilters.sort();
	$: filterList = allFilters[filterType];
</script>

<div class="tags">
	<ul class="axis-filters" role="listbox">
		{#each axisFilters as f}
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
		{#if $screenType === 'mobile'}
			<li class="filter-expand">
				<button
					class={`btn primary filter-expand ${expanded ? 'primary-selected' : ''}`}
					on:click={expandOnClick}>{`${expanded ? '-' : '+'}`}</button
				>
			</li>
		{/if}
	</ul>
	{#if $screenType !== 'mobile' || ($screenType === 'mobile' && expanded)}
		<ul class="document-filters" role="listbox" transition:slide={{ axis: 'y', delay: 0.35 }}>
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
	{/if}
</div>

<style>
	.axis-filters,
	.document-filters {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.document-filters {
		margin-top: 1rem;
	}

	button {
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
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
