<script lang="ts">
	import { t } from '$i18n/i18n';
	import { prevPage } from '$lib/stores/stores';
</script>

<a href={$prevPage} class="menu-close"><i class="fa-solid fa-xmark" /></a>
<ul class="menu-navigation">
	<li><a href={`${$t('route.home')}`}>{$t('menu.home')}</a></li>
	<li><a href={`${$t('route.about')}`}>{$t('menu.about')}</a></li>
	<li>
		<a href={`${$t('route.axis1')}`}>{$t('menu.axe1')}</a>
		<span>{$t('menu.axe1-sub')}</span>
	</li>
	<li>
		<a href={`${$t('route.axis2')}`}>{$t('menu.axe2')}</a>
		<span>{$t('menu.axe2-sub')}</span>
	</li>
	<li><a href={`${$t('route.tenured')}`}>{$t('menu.tenured')}</a></li>
	<li><a href={`${$t('route.participants')}`}>{$t('menu.participants')}</a></li>
	<li><a href={`${$t('route.news')}`}>{$t('menu.news')}</a></li>
	<li><a href={`${$t('route.archives')}`}>{$t('menu.archives')}</a></li>
	<li><a href={`${$t('route.contact')}`}>{$t('menu.contact')}</a></li>
</ul>

<style>
	.menu-close {
		/* background-color: var(--clr-accent); */
		position: absolute;
		font-size: 3rem;
		border: none;
		top: -4rem;
		left: var(--padding-main);
		color: white;
		cursor: pointer;
	}

	.menu-navigation {
		grid-column: 1/-1;
		display: flex;
		flex-direction: column;
	}

	.menu-navigation > li {
		--padding-vertical: 0.8rem;
		border-top: var(--border);
		border-bottom: var(--border);
		padding: var(--padding-vertical) 0 var(--padding-vertical) 0.1rem;
		transition: background-color 0.2s ease;
	}

	.menu-navigation > li:first-child {
		border-top: var(--border);
	}

	.menu-navigation > li:hover {
		background-color: white;
	}

	a {
		color: black;
		font-size: 2.4rem;
		text-decoration: none;
		margin-right: 2.5rem;
	}

	i {
		width: 150%;
		color: white;
	}
</style>
