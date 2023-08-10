import { fetchData } from '$lib/helpers/api.js'
import showdown from 'showdown'

/** Slug to strapi page property */
const map: { [slug: string]: string } = {
    'volet-1': 'axe-1',
    'volet-2': 'axe-2',
    'axis-1': 'axe-1',
    'axis-2': 'axe-2',
    'about': 'a-propos',
    'a-propos': 'a-propos',
}

export const load = async (event) => {
    const converter = new showdown.Converter()
    const slug = map[event.params.axis]

    const response = await fetchData('axes', event.locals.lang, slug)
    const article = response.data[0].attributes
    article.content = converter.makeHtml(article.content)

    return {
        article,
        lang: event.locals.lang,
    }
}