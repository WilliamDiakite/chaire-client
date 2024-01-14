<script lang="ts">
	import type { Participant } from '$lib/data';
	import ImageCard from './ImageCard.svelte';
	import { expandedChildIndex } from '$lib/stores/stores';
	import { slide, fade } from 'svelte/transition';

	export let data: Participant;
	export let expanded = false;
	export let noBorder = false;

	let li: HTMLLIElement;
	let classes: string[];

	const onClick = () => {
		expandedChildIndex.set(data.id);
		expanded = !expanded;
		if (expanded) li.classList.remove('hover');
	};

	const onMouseOver = () => {
		if (!expanded) li.classList.add('hover');
	};

	$: classes = [noBorder ? 'noBorder' : ''];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={`member ${classes.join(' ')}`}
	bind:this={li}
	role="button"
	aria-label="Toggle Member Details"
	tabindex="0"
	on:click={onClick}
	on:mouseover={onMouseOver}
	on:mouseleave={() => li.classList.remove('hover')}
	on:focus={() => li.classList.add('hover')}
	on:focusout={() => li.classList.remove('hover')}
>
	{#if expanded}
		<article class="member-card" transition:slide|local={{ duration: 300, delay: 100, axis: 'y' }}>
			<header out:fade|local={{ duration: 200 }}>
				<div class="name">{data.name}</div>
				<div class="role">{data.position}</div>
				<div class="uni">{data.affiliation}</div>
			</header>

			<ImageCard image={data.image.data} />
			<div class="bio" out:fade|local>
				{@html data.bio}

				{#if data.publications}
					<p class="publications-title">Publications :</p>
					{@html data.publications}
				{/if}
			</div>
		</article>
	{:else}
		<div in:fade|local={{ delay: 300 }}>
			{data.name}
		</div>
	{/if}
</div>

<style>
	.member {
		border-top: var(--border-accent);
		padding: 0.8rem 0;
		padding-left: 0.4rem;
		transition: all 0.1s ease-in;
	}

	.img-container {
		grid-column: span 2;
	}

	.hover {
		background-color: var(--clr-accent);
		color: white;
	}

	.expanding {
		background-color: white !important;
	}

	.noBorder {
		border: none;
	}

	.name {
		font-weight: bold;
		margin-bottom: 2rem;
	}

	.role {
		margin-bottom: 0.5rem;
	}
</style>
