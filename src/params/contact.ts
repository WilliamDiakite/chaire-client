import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    return (
        param === 'contact'
    )
}) satisfies ParamMatcher