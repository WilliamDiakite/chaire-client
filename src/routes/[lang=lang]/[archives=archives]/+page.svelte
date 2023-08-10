<script lang="ts">
	import ArchCard from '$components/ArchCard.svelte';
	import { sectionTitle } from '$lib/stores/stores';

	export let data;

	$: archives = data.archives.sort((a, b) => b.date - a.date);
	$: archives ? (archives = [...archives, ...archives, ...archives]) : [];

	$sectionTitle = 'Archives';
</script>

<ul>
	{#each archives as a}
		<li>
			<ArchCard archive={a} />
		</li>
	{/each}
</ul>

<style>
	ul,
	li {
		display: contents;
	}
</style>
