import { base } from "$app/paths"

const slugI18n: { fr: string, en: string }[] = [
    {
        fr: 'volet-1',
        en: 'axis-1',
    },
    {
        fr: 'volet-2',
        en: 'axis-2',
    },
    {
        fr: 'a-propos',
        en: 'about',
    },
]

const routesSectionI8n: { [name: string]: { [lang: string]: string } } = {
    about: {
        fr: 'À propos de la Chaire',
        en: 'About the Chaire',
    },
    archives: {
        fr: 'Archives',
        en: 'Archives',
    },
    axis1: {
        fr: 'Volet 1 : Vers un musée citoyen',
        en: `Axis 1`
    },
    axis2: {
        fr: `Volet 2 : Nouveaux usages des collections muséales`,
        en: `Axis 2`
    },
    contact: {
        fr: `Contact`,
        en: `Contact`
    },
    menu: {
        fr: `Menu`,
        en: `Menu`
    },
    news: {
        fr: `Actualités`,
        en: `News`
    },
    participants: {
        fr: `Participants`,
        en: `Participants`
    },
    tenured: {
        fr: `Titulaire`,
        en: `Tenured`
    },
}

export const getSectionTitle = ({ lang, ...rest }: { lang: string, }) => {
    if (Object.keys(rest).length === 0) return ''
    const key = Object.keys(rest).find(k => k !== 'lang' && k !== 'slug')

    if (key && !(key in routesSectionI8n))
        return ''

    return routesSectionI8n[key as string][lang]
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
        fr: `/fr/volet-1`,
        en: `/en/axis-1`
    },
    axis2: {
        fr: `/fr/volet-2`,
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

    try {
        // Find the section name in params and create redirects object
        let section = Object.keys(params).filter(k => k !== 'lang' && k !== 'slug')[0]
        if (section === 'axis') {
            if (params[section].includes('1') || params[section].includes('2')) section = `axis${params[section].split('-')[1]}`
            else if (params[section] === 'about' || params[section] === 'a-propos') section = 'about'
        }

        redirects = {
            fr: `${redirectLangUrl[section]['fr']}${params.slug ? '/' + params.slug : ''}`,
            en: `${redirectLangUrl[section]['en']}${params.slug ? '/' + params.slug : ''}`,
        }
    } catch (e) {
        redirects = {
            fr: `${base}/fr`,
            en: `${base}/en`,
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
        fr: `${base}/fr`,
        en: `${base}/en`,
    }

    if (pathname === '/fr' || pathname === '/en') return redirects

    if (!section && pathname) {
        const locale = pathname.split('/')[1]
        return {
            fr: pathname.replace(`${locale}`, 'fr'),
            en: pathname.replace(`${locale}`, 'en'),
        }
    }

    try {
        if (section === 'axis') {
            const slugMap = slugI18n.find(s => s.fr === params[section] || s.en === params[section])
            redirects = {
                fr: `${base}/fr/${slugMap?.fr}`,
                en: `${base}/en/${slugMap?.en}`,
            }
        }
        else
            redirects = {
                fr: `${base}${redirectLangUrl[section]['fr']}`,
                en: `${base}${redirectLangUrl[section]['en']}`,
            }
    }
    catch (e) {
        console.log('\ngetTranslatedUrls failed', { section, params })
    }

    return redirects
}