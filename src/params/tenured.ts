import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    return param === 'tenured' || param === 'titulaire';
}) satisfies ParamMatcher