import type { Handle } from '@sveltejs/kit';


export const handle = (({ event, resolve }) => {

    console.log('[hooks] fetching', event.request.url)
    console.log('[hooks] fetching', new URL(event.request.url).host)
    console.log('[hooks] event.params', event.params)
    console.log('[hooks] pathname', event.url.pathname)
    console.log('\n')


    // Get host to setup base url dynamically
    const host = new URL(event.request.url).host
    const base = host === 'williamdiakite.github.io' ? '/chaire-client' : ''

    let lang = event.params.lang ?? null
    if (!lang || !['fr', 'en'].includes(lang)) {
        lang = event.request.headers.get('accept-language')?.split(';')[0]
            ? 'en'
            : 'fr'
    }

    event.locals = { ...event.locals, lang, base }

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang as string)
    });

}) satisfies Handle;

