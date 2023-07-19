import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    return (
        param === 'volet-1-musee-citoyen' ||
        param === 'volet-2' ||
        param === 'volet-1' ||
        param === 'volet-2'
    )
}) satisfies ParamMatcher