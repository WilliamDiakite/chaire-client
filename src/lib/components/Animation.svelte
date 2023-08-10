<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly, slide } from 'svelte/transition';
	writable;
	// 7 divs qui slident. La dernière s'arrênt à 50%
	//             bleu, vert, orange
	// const colors = [];

	const colors = {
		blue: '#4330be',
		green: '#19a119',
		orange: '#ff4500',
		prink: '#ffc0cb',
		red: '#e04e4e'
	};

	const state = writable({
		blue: false,
		green: false,
		orange: false,
		prink: false,
		red: false
	});

	setTimeout(() => {
		$state.blue = true;
	}, 2000);
	setTimeout(() => {
		$state.green = true;
	}, 2300);

	// const timers = colors.map((c, i) => setTimeout(() => return))
</script>

{#if $state.green}
	<div
		transition:slide|global={{ axis: 'x', duration: 700 }}
		class="full"
		style="background-color: green"
	/>
{/if}
{#if $state['blue']}
	<div
		transition:slide|global={{ axis: 'x', duration: 700 }}
		class="full"
		style="background-color: blue"
	/>
{/if}

<div class="abs full" style="background-color: orange;" />

<style>
	.abs {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.full {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
