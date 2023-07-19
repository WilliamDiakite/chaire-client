<script lang="ts">
	import ArchCard from '$components/ArchCard.svelte';
	import { sectionTitle } from '$lib/stores/stores';

	export let data;

	$sectionTitle = 'Archives';

	const dummy = {
		date: '20.12.23',
		type: 'filter.publication',
		img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F51%2F194651-050-747F0C18%2FInterior-National-Gallery-of-Art-Washington-DC.jpg&f=1&nofb=1&ipt=8b9dcf3a751aac5bbf0d06695d61204dff71a7a720b719053a7ec29fd6a6244f&ipo=images',
		imgDesc: 'image description',
		title: 'A glorious event',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi labore sunt tenetur nostrum odio! Maxime ipsam, atque ratione unde, laboriosam optio obcaecati quasi accusamus voluptatem quidem, earum inventore aliquam labore?'
	};
	const dummy2 = {
		date: '20.12.23',
		img: '/sample1.png',
		type: 'filter.workshop',
		imgDesc: 'image description',
		title: 'A glorious event',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi labore sunt tenetur nostrum odio! Maxime ipsam, atque ratione unde, laboriosam optio obcaecati quasi accusamus voluptatem quidem, earum inventore aliquam labore?'
	};
</script>

<ArchCard {...dummy} />
<ArchCard {...dummy2} />
<ArchCard {...dummy} />
<ArchCard {...dummy} />
<ArchCard {...dummy2} />
<ArchCard {...dummy} />
<ArchCard {...dummy} />
