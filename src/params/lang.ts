import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return param === 'fr' || param === 'en';
}) satisfies ParamMatcher;
