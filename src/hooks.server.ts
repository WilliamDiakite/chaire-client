import type { Handle } from '@sveltejs/kit';


export const handle = (({ event, resolve }) => {

    console.log('[hooks] fetching', event.request.url)

    let lang = event.params.lang ?? null

    if (!lang || !['fr', 'en'].includes(lang)) {
        lang = event.request.headers.get('accept-language')?.split(';')[0]
            ? 'en'
            : 'fr'
    }

    event.locals = { ...event.locals, lang }

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang as string)
    });

}) satisfies Handle;

