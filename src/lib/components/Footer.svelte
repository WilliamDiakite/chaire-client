<footer>
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

	<ul class="logos">
		<img class="udem" src="/logo/udem.svg" alt="Logo Université de Montréal" />
		<img class="cieco" src="/logo/cieco-grey.svg" alt="Logo CIÉCO" />
	</ul>
</footer>

<style>
	.social {
		display: flex;
		flex-direction: row;
		grid-column: span 4/6;
		gap: 2rem;
		align-items: center;
	}
	.social-logo {
		width: 1.5rem;
		max-width: 4rem;
		z-index: 2;
	}

	.logos {
		display: flex;
		flex-direction: row;
		grid-column: span 2;
		gap: 2rem;
		align-items: center;
	}

	.logos > img {
		height: min-content;
	}

	.udem {
		max-width: 80%;
		margin-bottom: 1rem;
	}

	.cieco {
		max-width: 30%;
	}
</style>
