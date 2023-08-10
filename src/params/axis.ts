import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    return (
        param === 'volet-1' ||
        param === 'volet-2' ||
        param === 'axis-1' ||
        param === 'axis-2' ||
        param === 'about' ||
        param === 'a-propos'
    )
}) satisfies ParamMatcher