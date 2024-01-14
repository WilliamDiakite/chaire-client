import { redirect } from '@sveltejs/kit';
import {
	getSectionTitle,
	getRedirectUrls,
	availableUrls,
	getTranslatedUrls
} from '$i18n/routesI18n.js';

// export const prerender = true

export const load = async (event) => {
	let filterType: 'role' | 'event' | 'none' = 'none';
	let locale;
	let redirects;

	const filteredSlug = event.url.pathname.match(/\/\w{2}\/[\w-]+(?=\/|$)/gm)?.at(0);

	const base = event.locals.base;

	if (event.url.pathname === base + '/') {
		if (event.locals.lang) {
			throw redirect(307, `${base}/${event.locals.lang}`);
		} else {
			locale = 'fr';
			throw redirect(307, `${base}/fr`);
		}
	} else if (filteredSlug && !availableUrls.includes(filteredSlug)) {
		locale = filteredSlug.split('/')[1];
		locale = ['fr', 'en'].includes(locale) ? locale : 'fr';

		redirects = getRedirectUrls(event.params);
		const redirectUrl = redirects[locale as 'fr' | 'en'];
		throw redirect(307, redirectUrl);
	} else {
		redirects = getTranslatedUrls(event.url.pathname, event.params);
		locale = event.locals.lang;
	}

	if (event.route.id === '/[lang=lang]/[participants=participants]') filterType = 'role';
	else if (event.route.id === '/[lang=lang]/[archives=archives]') filterType = 'event';

	return {
		lang: locale,
		sectionTitle: getSectionTitle({ lang: event.locals.lang, ...event.params }),
		filterType,
		redirects,
		base
	};
};
