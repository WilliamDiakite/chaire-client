import { redirect } from '@sveltejs/kit';
import { getSectionTitle, getRedirectUrls, availableUrls, getTranslatedUrls } from '$i18n/routesI18n.js'
import { PUBLIC_BASE_URL } from '$env/static/public';

export const prerender = true

export const load = async (event) => {

    let filterType: 'role' | 'event' | 'none' = 'none'
    let locale
    let redirects

    const filteredSlug = event.url.pathname.match(/(\/\w+){2}/gm)?.at(0)

    // console.log('[layout.server.ts]: event.url.pathname', event.url.pathname)
    // console.log('[layout.server.ts]: PUBLIC_BASE_URL', PUBLIC_BASE_URL)
    // console.log('[layout.server.ts]: event.locals.lang', event.locals.lang)
    // console.log('[layout.server.ts]: filteredSlug', filteredSlug)

    if (event.url.pathname === PUBLIC_BASE_URL + '/') {
        // console.log('[layout.server.ts]: redirecting to menu')
        if (event.locals.lang) {
            throw redirect(307, `${PUBLIC_BASE_URL}/${event.locals.lang}/menu`)
        }
        else {
            console.log('[layout.server.ts]: locals not set up')
            locale = 'fr'
            throw redirect(307, `${PUBLIC_BASE_URL}/fr/menu`)
        }
    }
    else if (filteredSlug && !availableUrls.includes(filteredSlug)) {
        locale = filteredSlug.split('/')[1]
        locale = ['fr', 'en'].includes(locale)
            ? locale
            : 'fr'

        redirects = getRedirectUrls(event.params)
        const redirectUrl = redirects[locale as 'fr' | 'en']

        throw redirect(307, redirectUrl)
    }
    else {
        redirects = getTranslatedUrls(event.url.pathname, event.params)
        locale = event.locals.lang
    }

    if (event.route.id === '/[lang=lang]/[participants=participants]') filterType = 'role';
    else if (event.route.id === '/[lang=lang]/[archives=archives]' ||
        event.route.id === '/[lang=lang]/[news=news]') filterType = 'event';

    return {
        lang: locale,
        sectionTitle: getSectionTitle(event.url.pathname),
        filterType,
        redirects
    }
}