<script lang="ts">
	import ParticipantCard from '$lib/components/ParticipantCard.svelte';
	import { expandedChildIndex } from '$lib/stores/stores';
	import { axisFilter, filters } from '$lib/stores/stores';
	import type { Participant } from '$lib/data.d.ts';

	export let data;

	$: grouped = data.participants
		.sort()
		.filter((p) => p.axis === $axisFilter)
		.filter((p) => ($filters.length > 0 ? $filters.includes(p.role) : true))
		.reduce((grouped: { [key: string]: Participant[] }, p) => {
			const key = p.name[0];
			grouped[key] ? grouped[key].push(p) : (grouped[key] = [p]);
			return grouped;
		}, {});
</script>

<svelte:head>
	<title>Participants</title>
</svelte:head>

{#each Array.from(Object.keys(grouped)).sort() as l}
	<section class="member-list">
		<h1>{l}</h1>
		<ul>
			{#each grouped[l] as data, i}
				<ParticipantCard
					{data}
					noBorder={i === 0 ? true : false}
					expanded={data.id === $expandedChildIndex}
				/>
			{/each}
		</ul>
	</section>
{/each}

<div class="empty-row" />

<style>
	section {
		display: contents;
	}
	h1 {
		/* position: relative; */
		width: 300%;
		font-size: 3rem;
		padding-top: 0.8rem;
		height: fit-content;
	}

	h1,
	ul {
		border-top: var(--border-accent);
		height: fit-content;
	}

	ul {
		grid-column: span 7;
	}
</style>
