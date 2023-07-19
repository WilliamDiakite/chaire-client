<script lang="ts">
	import ButtonBtt from '$lib/components/ButtonBtt.svelte';
	import { sectionTitle } from '$lib/stores/stores.js';

	export let data;

	$sectionTitle = data.header;
</script>

<div class="empty" />

<section>
	<article class="text-content">
		{@html data.content}
	</article>

	<div class="images">
		<div class="image-container big">
			<img src="/sample2.png" alt="" />
			<p>La Chaire de muséologie citoyenne aborde le musée à travers.</p>
		</div>
		<div class="image-container">
			<img class="medium" src="/sample1.png" alt="" />
			<p>La Chaire de muséologie citoyenne aborde le musée à travers.</p>
		</div>
	</div>
</section>

<ButtonBtt />

<style>
	section {
		display: contents;
	}

	article {
		margin-top: 1.5rem;
	}

	.images {
		grid-column: span 3;
	}
	.images > * + * {
		margin-top: 1.5rem;
	}

	.image-container {
		margin-top: 1.5rem;
		padding-left: 3rem;
	}

	.image-container > p {
		font-size: 0.8rem;
		line-height: 1rem;
		margin-top: 0.5rem;
	}

	.big {
		max-width: 80%;
	}
	.medium {
		max-width: 60%;
	}
</style>
