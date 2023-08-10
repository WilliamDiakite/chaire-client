<script lang="ts">
	import { screenType, homeShowFooter } from '$lib/stores/stores';
	import { slide } from 'svelte/transition';

	const closeFooter = (e: MouseEvent) => {
		console.log('click');
		homeShowFooter.set(false);
	};

	$: isDesktop = $screenType === 'desktop';
</script>

<footer transition:slide={{ axis: 'y' }}>
	{#if $screenType === 'tablet-vertical' || $screenType === 'mobile'}
		<button class="btn primary bottom" on:click={closeFooter}>x</button>
	{/if}
	<ul class="social">
		<li>
			<a rel="external" href="/">
				<img class="social-logo" src="/logo/brands/instagram.svg" alt="logo twitter" />
			</a>
		</li>
		<li>
			<a rel="external" href="https://www.linkedin.com/company/ciecorecherche/">
				<img class="social-logo" src="/logo/brands/linkedin.svg" alt="logo twitter" />
			</a>
		</li>
		<li>
			<a rel="external" href="https://www.facebook.com/cieco.co">
				<img class="social-logo" src="/logo/brands/square-facebook.svg" alt="logo twitter" />
			</a>
		</li>
	</ul>
	{#if $screenType === 'tablet-horizontal'}
		<button class="btn primary bottom" on:click={closeFooter}>x</button>
	{/if}

	<ul class="logos">
		<img class="udem" src="/logo/udem.svg" alt="Logo Université de Montréal" />
		<img class="cieco" src="/logo/cieco-grey.svg" alt="Logo CIÉCO" />
	</ul>
</footer>

<style>
	footer {
		top: 100vh;
	}
	footer > * {
		width: fit-content !important;
		margin: 0 auto !important;
	}
	.social {
		display: flex;
		flex-direction: row;
		grid-column: 1/5;
		gap: 2rem;
		align-items: center;
	}
	.social-logo {
		width: 1.5rem;
		max-width: 4rem;
	}

	.logos {
		display: flex;
		flex-direction: row;
		grid-column: 6/8;
		gap: 2rem;
		align-items: center;
		width: fit-content;
	}

	.logos > img {
		object-fit: fill;
	}

	.udem {
		width: 100rem;
		max-width: 70%;
		margin-bottom: 1rem;
	}

	.cieco {
		width: 10rem;
		max-width: 25%;
	}

	.primary {
		background-color: white !important;
		color: black !important;
	}

	.bottom {
		cursor: pointer;
	}

	/** Tablet horizontal */
	@media screen and (min-width: 821px) and (max-width: 1024px) {
		footer {
			height: 18vh;
			bottom: 0;
			top: unset;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.bottom {
			position: absolute;
			left: 48%;
			top: 10%;
		}
		.udem {
			width: 11rem;
			margin-left: auto;
		}

		.cieco {
			width: 6rem;
			margin-right: auto;
		}

		.logos {
			position: relative;
			left: 3rem;
		}
	}

	/** Tablet vertical */
	@media screen and (min-width: 481px) and (max-width: 820px) {
		footer {
			height: 40vh;
			top: 60vh;
			padding: 3vh 0 0rem 0;
		}
		.udem {
			width: 20rem;
			margin-left: auto;
		}

		.cieco {
			width: 7rem;
			margin-right: auto;
		}

		.logos {
			position: relative;
			top: -10%;
		}
	}

	@media screen and (max-width: 480px) {
		footer {
			top: 50vh;
			height: 50vh;
			/* padding: 3vh 0 !important; */
			padding-top: 3vh;
			padding-bottom: 3vh;
		}
		.udem {
			max-width: 50%;
			margin-left: auto;
		}

		.cieco {
			max-width: 25%;
			margin-right: auto;
		}

		.logos {
			gap: 1rem;
			position: relative;
			top: -10%;
		}
	}

	/** Tablet vertical and mobile */
	@media screen and (min-width: 0px) and (max-width: 820px) {
		footer {
			display: flex !important;
			flex-direction: column;
			justify-content: space-between;
			z-index: 1;
		}
	}
</style>
