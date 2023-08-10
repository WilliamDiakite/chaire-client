<script lang="ts">
	import { page } from '$app/stores';
	import { screenType } from '$lib/stores/stores';
</script>

<a href={$page.url.pathname} class={`btn primary btt ${$screenType === 'mobile' ? 'center' : ''}`}
	><img src="/arrow-up.svg" alt="" /></a
>

<style>
	.btt {
		position: relative;
		margin-top: 2rem;
		width: 3rem;
		height: 1.8rem;
		border-radius: 50px;
		grid-row: 5;
		bottom: 1%;
		left: var(--padding-main);
	}

	.center {
		left: 45%;
	}

	img {
		width: 0.5rem;
	}
</style>
