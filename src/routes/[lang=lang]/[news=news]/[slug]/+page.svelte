<script lang="ts">
	import { archiveType } from '$lib/stores/stores';

	const data = {
		type: 'Événement',
		date: '21.02.09',
		title: 'Integer tincidunt dictum justo',
		images: [
			{
				link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F51%2F194651-050-747F0C18%2FInterior-National-Gallery-of-Art-Washington-DC.jpg&f=1&nofb=1&ipt=8b9dcf3a751aac5bbf0d06695d61204dff71a7a720b719053a7ec29fd6a6244f&ipo=images',
				description: 'Integer tincidunt dictum justo'
			}
		],
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat enim leo, in im- perdiet lacus lobortis non. In hac habitasse platea dictumst. Fusce vulputate accumsan nisi. Maecenas tempus ex nulla, id convallis lorem tempor et. Aliquam sollicitudin, felis in pharetra luctus, tellus orci tempus ex, sit amet semper arcu justo et augue. Nam rutrum ex at lectus porttitor condimentum. Ut cursus eros est, ut posuere ex imperdiet quis. Duis convallis viverra malesuada.'
	};

	archiveType.set(data.type);
</script>

<div class="empty" />

<section class="text-content">
	<header>
		<h1>{data.type}</h1>
		<p>{data.date}</p>
	</header>
	<div>
		<h2>{data.title}</h2>
		<p>{data.content}</p>
		<p>
			Integer mollis interdum dolor eget varius. Cras rutrum dignissim turpis, ultricies sodales
			eros vulputate varius. Morbi vitae tortor quam. Vivamus aliquam non augue at hendrerit. Fusce
			aliquam tinci- dunt vehicula. Orci varius natoque penatibus et magnis dis parturient montes,
			nascetur ridiculus mus
		</p>
	</div>
</section>

<div class="image-section">
	<div class="img-container">
		<img src="/righettino.png" alt={data.images[0].description} />
		<p class="legend">This is righettino</p>
	</div>
</div>

<div class="empty bottom" />

<style>
	:global(main) {
		row-gap: 0 !important;
	}

	.image-section {
		grid-column: 5/8;
		grid-row: 2;
		padding-top: 4rem;
		padding-left: 2rem;
		position: relative;
	}

	.bottom {
		margin-top: 6rem;
	}
</style>
