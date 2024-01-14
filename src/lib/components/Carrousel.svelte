<script lang="ts">
	import ImageCard from '$lib/components/ImageCard.svelte';
	import type { Image } from '$lib/data';

	export let images: Image[];

	const onClickNext = () => {
		if (!images) return;
		if (imgIdx < images.length - 1) imgIdx++;
		else imgIdx = 0;
		imgIdx = imgIdx;
	};
	const onClickPrevious = () => {
		if (!images) return;
		if (imgIdx > 0) imgIdx--;
		else imgIdx = images.length - 1;
		imgIdx = imgIdx;
	};

	$: imgIdx = 0;
	$: image = images[imgIdx];
</script>

<div class="carrousel">
	<ImageCard {image} />
	<div class="caption-container">
		<p class="caption">
			{image.attributes.caption}
		</p>
		{#if images.length > 1}
			<div class="carrousel-btns">
				<button class="carrousel-btn" on:click={onClickPrevious}
					><img class="icon" src="/arrow-left.svg" alt="Previous" /></button
				>
				<button class="carrousel-btn" on:click={onClickNext}
					><img class="icon" src="/arrow-right.svg" alt="Next" /></button
				>
			</div>
		{/if}
	</div>
</div>

<style>
	.icon {
		width: 0.5rem;
	}

	.caption-container {
		margin-top: 0.5rem;
		display: flex;
	}

	.caption {
		font-size: 0.8rem;
		width: 80%;
		margin-right: auto;
	}

	.carrousel-btn {
		cursor: pointer;
	}
	.carrousel-btns {
		display: flex;
		gap: 1rem;
		margin-left: auto;
		align-items: start;
	}
</style>
