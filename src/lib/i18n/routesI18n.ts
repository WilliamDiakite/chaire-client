import { PUBLIC_BASE_URL } from "$env/static/public"


export const routesSectionI8n: { [route: string]: string } = {
    '/tenured': 'Tenured',
    '/titulaire': 'Titulaire',
    '/team': 'Team',
    '/equipe': 'Équipe',
    '/news': 'News',
    '/actualites': 'Actualités',
    '/archives': 'Archives',
    '/contact': 'Contact',
    '/axe-1': 'Axe 1 : Vers un musée citoyen',
    '/axis-1': 'Axis 1: ([i18n/routesI18n.ts] needs translation)',
    '/axe-2': 'Axe 2 : Nouveaux usages des collections muséales',
    '/axis-2': 'Axis 1: Museum collections, new practices',
    '/about': 'About',
    '/a-propos': 'À propos',
}

export const getSectionTitle = (pathname: string) => {
    // console.log('PATHNAME', pathname)
    const section = pathname.match(/(\/\w+){2}/gm)?.at(1)
    return routesSectionI8n[section as string]
}

const redirectLangUrl: { [name: string]: { [lang: string]: string } } = {
    about: {
        fr: `/fr/a-propos`,
        en: `/en/about`
    },
    archives: {
        fr: `/fr/archives`,
        en: `/en/archives`
    },
    axis1: {
        fr: `/fr/axe-1`,
        en: `/en/axis-1`
    },
    axis2: {
        fr: `/fr/axe-2`,
        en: `/en/axis-1`
    },
    contact: {
        fr: `/fr/contact`,
        en: `/en/contact`
    },
    menu: {
        fr: `/fr/menu`,
        en: `/en/menu`
    },
    news: {
        fr: `/fr/actualites`,
        en: `/en/news`
    },
    participants: {
        fr: `/fr/participants`,
        en: `/en/participants`
    },
    tenured: {
        fr: `/fr/titulaire`,
        en: `/en/tenured`
    },
}

/**
 * Creates a list of available urls for redirection
 */
export const availableUrls = Object.keys(redirectLangUrl).reduce((acc, id: string) => {
    Object.keys(redirectLangUrl[id]).forEach((lang: string) => {
        acc.push(redirectLangUrl[id][lang])
    })
    return acc
}, [] as string[])


/**
 * Creates a list of available urls for i18n redirection
 * @param params : { [abtractSectionName: string, ie news], slug?: string, lang: string  }
 */
export const getRedirectUrls = (params: { [name: string]: string }) => {
    let redirects

    console.log('[routesI18n.getRedirectUrls] params', params)

    try {
        // Find the section name in params and create redirects object
        const section = Object.keys(params).filter(k => k !== 'lang' && k !== 'slug')[0]
        redirects = {
            fr: `${redirectLangUrl[section]['fr']}${params.slug ? '/' + params.slug : ''}`,
            en: `${redirectLangUrl[section]['en']}${params.slug ? '/' + params.slug : ''}`,
        }
    } catch (e) {
        console.log('[routesI18n.getRedirectUrls] WARN: locale or section in url not found in available routes')
        redirects = {
            fr: `${PUBLIC_BASE_URL}/fr`,
            en: `${PUBLIC_BASE_URL}/en`,
        }
    }
    return redirects
}

/**
 * Based on a pathname and params, returns a list of translated urls
 */
export const getTranslatedUrls = (pathname: string, params: { [name: string]: string }) => {
    const section = Object.keys(params).filter(k => k !== 'lang' && k !== 'slug')[0]
    let redirects = {
        fr: `${PUBLIC_BASE_URL}/fr`,
        en: `${PUBLIC_BASE_URL}/en`,
    }

    if (pathname === '/fr' || pathname === '/en') return redirects

    if (!section && pathname) {
        const locale = pathname.split('/')[1]
        redirects = {
            fr: pathname.replace(`${locale}`, 'fr'),
            en: pathname.replace(`${locale}`, 'en'),
        }
    }

    try {
        redirects = {
            fr: `${PUBLIC_BASE_URL}${redirectLangUrl[section]['fr']}${params.slug ? '/' + params.slug : ''}`,
            en: `${PUBLIC_BASE_URL}${redirectLangUrl[section]['en']}${params.slug ? '/' + params.slug : ''}`,
        }
    }
    catch (e) {
        console.log('\ngetTranslatedUrls failed')
        console.log(params)
        console.log(section)
    }

    return redirects
}