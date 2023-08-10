<script lang="ts">
	import ImageCard from '$lib/components/ImageCard.svelte';
	import type { Image } from '$lib/data';

	export let images: Image[];

	console.log(images);

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
		<p class="caption">{images[imgIdx].attributes.alternativeText}</p>
		<div class="caroussel-btns">
			<button class="caroussel-btn" on:click={onClickPrevious}
				><img class="icon" src="/arrow-left.svg" alt="Previous" /></button
			>
			<button class="caroussel-btn" on:click={onClickNext}
				><img class="icon" src="/arrow-right.svg" alt="Next" /></button
			>
		</div>
	</div>
</div>

<style>
	.icon {
		width: 0.5rem;
	}

	.caption-container {
		margin-top: 0.5rem;
		display: flex;
		width: 75%;
	}

	.caption {
		font-size: 0.8rem;
	}

	.caption-container > *:last-child {
		margin-left: auto;
	}

	.caroussel-btn {
		cursor: pointer;
	}
	.caroussel-btns {
		display: flex;
		gap: 1rem;
	}
</style>
