import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
    return (
        param === 'menu'
    )
}) satisfies ParamMatcher