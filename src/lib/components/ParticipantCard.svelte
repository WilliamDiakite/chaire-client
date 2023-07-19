<script lang="ts">
	import type { Participant } from '$lib/data';
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
<li
	class={`${classes.join(' ')}`}
	bind:this={li}
	on:click={onClick}
	on:mouseover={onMouseOver}
	on:mouseleave={() => li.classList.remove('hover')}
	on:focus={() => li.classList.add('hover')}
	on:focusout={() => li.classList.remove('hover')}
>
	{#if expanded}
		<article class="member-card" transition:slide|local={{ duration: 300, delay: 100, axis: 'y' }}>
			<div out:fade|local={{ duration: 200 }}>
				<div class="name">{data.name}</div>
				<div class="role">{data.position}</div>
				<div class="uni">{data.affiliation}</div>
			</div>

			<img out:fade|local src={data.image} alt={`photo de profil de ${data.name}`} />
			<div class="content" out:fade|local>
				<p class="bio">
					{@html data.bio}
				</p>

				<p>Publications</p>
				<p class="publications">
					{@html data.publications}
				</p>
			</div>
		</article>
	{:else}
		<div in:fade|local={{ delay: 300 }}>
			{data.name}
		</div>
	{/if}
</li>

<style>
	li {
		border-top: var(--border-accent);
		padding: 0.8rem 0;
		padding-left: 0.4rem;
		transition: all 0.1s ease-in;
	}

	img {
		grid-column: span 3;
		display: block;
		max-width: 70%;
		object-fit: contain;
		filter: grayscale();
	}

	.hover {
		background-color: var(--clr-accent);
		color: white;
	}

	.expanding {
		background-color: white !important;
	}

	.content {
		grid-column: span 8;
	}

	.noBorder {
		border: none;
	}

	.member-card {
		display: grid;
		grid-template-columns: repeat(16, 1fr);
	}

	.member-card > div:first-child {
		grid-column: span 5;
	}

	/* .member-card > div:nth-child(2) {
		grid-column: span 11;
		display: flex;
		flex-direction: row;
		gap: 3rem;
		align-items: start;
	} */

	.name {
		font-weight: bold;
		margin-bottom: 2rem;
	}

	.role {
		margin-bottom: 0.5rem;
	}

	.publications {
		margin-top: 1rem;
		font-size: 0.7rem;
		line-height: 1rem;
	}
</style>
