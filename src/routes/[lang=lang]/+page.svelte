<script lang="ts">
	import { screenType, homeShowFooter } from '$lib/stores/stores';

	const showFooter = (e: PointerEvent | MouseEvent | TouchEvent) => {
		console.log('click');
		homeShowFooter.set(true);
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		});
	};
</script>

<div class="homepage">
	<div class="bg pink"></div>
	<div class="bg green">
		{#if $screenType === 'desktop'}
			<h1 class="title">Chaire de Recherche du Canada en Muséologie citoyenne</h1>
		{/if}
	</div>
	{#if $screenType !== 'desktop' && !$homeShowFooter}
		<div class="bg blue">
			<h1 class="title">Chaire de Recherche du Canada<br />en Muséologie<br />citoyenne</h1>
			<button class="btn primary bottom" on:click={showFooter}
				><img class="icon" src="/arrow-down.svg" alt="show Footer" /></button
			>
		</div>
	{/if}
</div>

<!-- <div class="title"></div> -->

<style>
	.homepage {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.icon {
		width: 0.5rem;
		cursor: pointer;
	}

	.btn,
	.primary {
		position: relative;
		left: 48%;
		cursor: pointer !important;
	}

	.bottom {
		position: absolute;
		/* bottom: 5vh; */
		z-index: 1;
	}

	.bg {
		position: absolute;
		top: 0;
		height: 100vh;
		width: 50%;
	}
	.pink {
		left: 0;
		background-color: #eb3b89;
		z-index: -2;
	}

	.green {
		left: 50%;
		background-color: #4fb05e;
		z-index: -1;
	}

	.blue {
		left: 0;
		background-color: #1431ba;
		width: 100%;
		top: 60vh;
		height: 50vh;
	}
	.title {
		position: relative;
		color: white;
		top: 20%;
		left: 5%;
		width: 80%;
		line-height: 2.5rem;
		font-size: 2.3rem;
	}

	/** All touch devices */
	@media screen and (min-width: 0px) and (max-width: 1024px) {
		.blue {
			padding: 2rem 2rem;
		}
		.title {
			position: unset;
		}
	}

	/** Tablet horizontal */
	@media screen and (min-width: 821px) and (max-width: 1024px) {
		.bg {
			height: 100vh;
		}
		.blue {
			position: absolute;
			height: 23vh;
			bottom: 0vh;
			left: 0;
			top: unset;
		}
		.bottom {
			bottom: 2vh;
		}
	}

	@media screen and (max-height: 684px) {
		.title {
			font-size: 1.5rem;
		}
	}

	/** Tablet vertical */
	@media screen and (min-width: 481px) and (max-width: 820px) {
		.bg {
			height: 60vh;
		}

		.title {
			top: 5%;
			left: 2%;
			width: 45%;
		}

		.bottom {
			top: 25vh;
		}
	}
	/** Mobile */
	@media screen and (max-width: 480px) {
		.bottom {
			bottom: 2vh;
		}
		.bg {
			height: 50vh;
		}
		.blue {
			bottom: 0;
			top: 50vh;
		}
	}
</style>
