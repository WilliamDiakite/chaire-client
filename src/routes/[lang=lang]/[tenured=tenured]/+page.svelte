<script lang="ts">
	import img from './righettino.png';
	import ButtonBtt from '$lib/components/ButtonBtt.svelte';
</script>

<div class="empty" />

<h1>Lamoureux, Johanne</h1>

<img src={img} alt="Righettino" />

<p class="short-description">
	Professeure au Département d’histoire de l’art et d’études cinématographiques de l’Université de
	Montréal
</p>

<div class="text-content">
	<p>
		Officia aute eiusmod ad ipsum et. Dolore tempor ex ullamco et tempor Lorem eu sunt sint. Nulla
		do labore cupidatat voluptate nulla irure nulla proident tempor cillum fugiat cupidatat.
	</p>
	<p>Anim nisi duis nulla laborum nostrud deserunt anim.</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione commodi molestiae voluptatum
		odio consequuntur labore, et eveniet repellat recusandae assumenda nisi itaque quia ut. Porro
		sed recusandae dolore explicabo tenetur! Lorem ipsum, dolor sit amet consectetur adipisicing
		elit. Ratione commodi molestiae voluptatum odio consequuntur labore, et eveniet repellat
		recusandae assumenda nisi itaque quia ut. Porro sed recusandae dolore explicabo tenetur!
	</p>
</div>

<div class="empty-row" />
<ButtonBtt />

<style>
	h1 {
		margin-bottom: 1.4rem;
		grid-column: 1/-1;
	}
	img {
		grid-column: span 2;
		width: 100%;
	}

	.short-description {
		grid-column: span 2;
		/* padding: var(--padding-small) 2rem 0 0; */
		padding-top: var(--padding-small);
	}

	.text-content {
		grid-column: span 4;
		padding: var(--padding-small) 0 0 var(--padding-small);
		/* grid-row: 2; */
	}
</style>
