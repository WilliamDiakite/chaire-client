import { derived, writable } from 'svelte/store';
import translations from './translations';
import { base } from '$lib/stores/stores';

// Code greatly inspired by:
// https://dev.to/danawoodman/svelte-quick-tip-adding-basic-internationalization-i18n-to-you-app-2lm

export const locale = writable('fr');
export const locales = Object.keys(translations);

export function translate(locale: string, key: string, vars: { [key: string]: string }) {
	if (!key) throw new Error('[error i18n] No key provided to $t()');
	if (!locale) throw new Error(`[error i18n] No translation for key "${key}"`);

	// Grab the translation from the translations object
	let text = translations[locale][key];
	if (!text) throw new Error(`[error i18n] No translation found for ${locale}.${key}`);

	// Replace variables in the translation string
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived([locale, base], ([$locale, $base]) => (key: string, vars = {}) => {
	let translation = translate($locale, key, vars);
	key.includes('route') ? (translation = `${$base}${translation}`) : null;
	return translation;
});

export const importMdFile = derived(locale, ($locale) => (path: string) => {
	const basePath = 'labouvroir/';
	return import(`../${basePath}${path}-${$locale}.md`);
});
