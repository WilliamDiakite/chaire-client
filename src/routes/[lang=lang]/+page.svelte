<script lang="ts">
	import { screenType, homeShowFooter } from '$lib/stores/stores';
	import ChaireLogoC from '$lib/components/ChaireLogoC.svelte';
	import ChaireLogoM from '$lib/components/ChaireLogoM.svelte';

	const showFooter = (e: PointerEvent | MouseEvent | TouchEvent) => {
		homeShowFooter.set(true);
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		});
	};

	$: showModal = false;

	setTimeout(() => {
		showModal = true;
	}, 2000);
</script>

<svelte:head>
	<title>CRC Museologie citoyenne</title>
</svelte:head>

<div class="homepage">
	<div class="bg pink">
		<div class="logo-M-container">
			<ChaireLogoM />
		</div>
	</div>
	<div class="bg green">
		{#if $screenType === 'desktop'}
			<h1 class="title">Chaire de recherche du Canada en Muséologie citoyenne</h1>
		{/if}
		<div class="logo-C-container">
			<ChaireLogoC />
		</div>
	</div>
	{#if $screenType !== 'desktop' && !$homeShowFooter}
		<div class="bg blue">
			<h1 class="title">
				Chaire de recherche du Canada<br />en Muséologie {$screenType === 'desktop' ? '<br/>' : ''} citoyenne
			</h1>

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

	:root {
		--margin-top: 15%;
		--chaire-logo-dim: 75%;
	}

	.title {
		color: white;
		width: 80%;
		margin: 0 auto;
		margin-top: var(--margin-top);
		line-height: 2.5rem;
		font-size: 2.3rem;
	}
	.logo-M-container {
		width: var(--chaire-logo-dim);
		height: var(--chaire-logo-dim);
		margin: 0 auto;
		margin-top: var(--margin-top);
	}
	.logo-C-container {
		width: var(--chaire-logo-dim);
		height: var(--chaire-logo-dim);
		margin: 0 auto;
		margin-top: 5%;
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

	/** ALl smaller screens */
	@media screen and (max-width: 1024px) {
		:root {
			--margin-top: 50%;
		}
		.title {
			margin: 2% 0 auto;
			font-size: 2rem;
		}
		.logo-C-container {
			margin-top: var(--margin-top);
		}
	}

	/** Tablet horizontal */
	@media screen and (max-width: 821px) and (max-width: 1024px) {
		.title {
			width: 45%;
		}
	}

	/** Tablet vertical */
	@media screen and (min-width: 481px) and (max-width: 820px) {
		.bg {
			height: 60vh;
		}
		.bottom {
			top: 25vh;
		}
		.title {
			width: 45%;
		}
	}
	/** Mobile */
	@media screen and (max-width: 480px) {
		:root {
			--margin-top: 80%;
		}
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
		.title {
			width: 100%;
			font-size: 2.5rem;
			line-height: 3.2rem;
		}
	}
</style>
