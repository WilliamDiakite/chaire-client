<script lang="ts">
	import { sectionTitle } from '$lib/stores/stores';

	let submissionResult = '';

	let firstname: string = '',
		name: string = '',
		email: string = '',
		subject: string = '',
		message: string = '';

	const onFormSubmit = async (e: SubmitEvent) => {
		const formData = {
			name,
			firstname,
			email,
			subject,
			message
		};

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		}).then((res) => {
			if (res.ok) submissionResult = 'Le message a bien été envoyé';
			else submissionResult = "Une erreur est survenue lors de l'envoi du message";
		});
	};

	$sectionTitle = 'Contact';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="left">
	<section id="section-adress">
		<h2>Adresse</h2>
		<p>1375 Ave.Thérèse-Lavoie-Roux,</p>
		<p>Montréal, QC H2V 0B3</p>
		<p>Canada</p>
	</section>

	<section id="section-follow">
		<h2>Nous suivre</h2>
	</section>
</div>

<section id="section-mail">
	<h2>Courriel</h2>
	<form method="POST" on:submit|preventDefault={onFormSubmit}>
		<div class="input-group">
			<label for="name">Nom</label>
			<div class="multi-input">
				<input
					placeholder="Prénom"
					type="text"
					name="firstname"
					id="firstname"
					bind:value={firstname}
					required
				/>
				<input placeholder="Nom" type="text" name="name" id="name" bind:value={name} required />
			</div>
		</div>
		<div>
			<label for="email">Courriel</label>
			<input
				placeholder="Adresse"
				type="email"
				name="email"
				id="email"
				bind:value={email}
				required
			/>
		</div>
		<div>
			<label for="subject">Sujet du message</label>
			<input
				placeholder="Objet"
				type="text"
				name="subject"
				id="subject"
				bind:value={subject}
				required
			/>
		</div>
		<div>
			<label for="message">Message</label>
			<input
				size="500"
				spellcheck="true"
				type="text"
				name="message"
				id="message"
				bind:value={message}
				required
			/>
		</div>
		<button class="btn primary" type="submit">Envoyer</button>
		<p class="submission-msg">{submissionResult}</p>
	</form>
</section>

<style>
	:global(main) {
		row-gap: 0;
	}
	h2 {
		font-size: var(--fs-title);
	}

	section,
	.left {
		grid-column: span 2;
		border-top: var(--border-accent);
		padding-top: var(--padding-small);
	}

	.left {
		grid-row: span 2;
		border: none;
		padding-top: 0;
	}

	label {
		display: block;
		margin-bottom: 0.2rem;
	}

	input {
		height: 2.5rem;
		width: 50%;
		border: var(--border-accent);
		padding: 1rem 1rem;
		font-size: 0.9rem;
		display: flex;
		text-align: start;
	}

	input::placeholder {
		opacity: 0.4;
	}

	section > *:nth-child(2) {
		margin-top: 2rem;
	}

	#section-follow {
		margin-right: 0.5rem;
		grid-row: 2;
	}

	#section-adress > p + p {
		margin-top: 0;
	}

	form > * + * {
		margin-top: 1rem;
	}

	.multi-input {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	#subject {
		width: 100%;
	}

	#message {
		width: 100%;
		height: 11rem;
	}

	#message {
		text-align: top !important;
	}
</style>
