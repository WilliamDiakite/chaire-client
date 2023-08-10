<script lang="ts">
	import ImageCard from '$lib/components/ImageCard.svelte';

	export let data;

	const article = data.article;
	console.log(article);
</script>

<div class="empty" />
<article class="container">
	<h1 class="page-title">{article.name}</h1>

	<div class="image-container">
		<ImageCard image={article.image.data} />
	</div>

	<p class="short-description">
		{article.position}
	</p>

	<div class="tenured-content">
		{@html article.bio}
		<div class="publications">
			<p class="publication-title">Publications :</p>
			{@html article.publications}
		</div>
	</div>
</article>

<div class="empty-row" />

<style>
	.container {
		display: contents;
	}

	.publications {
		margin-top: 1rem;
	}

	.short-description {
		grid-column: span 2;
		padding-top: var(--padding-small);
		width: 80%;
	}

	.tenured-content {
		grid-column: span 4;
		padding: var(--padding-small) 0 0 1rem;
		/* grid-row: 2; */
	}

	.image-container {
		grid-column: span 2;
		width: 95%;
	}

	@media screen and (max-width: 480px) {
		.image-container {
			grid-column: 1/-1;
		}
	}

	@media screen and (min-width: 481px) and (max-width: 820px) {
		.image-container {
			grid-column: 1/4;
		}
	}
</style>
