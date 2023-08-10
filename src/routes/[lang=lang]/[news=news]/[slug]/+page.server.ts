import { fetchData } from '$lib/helpers/api.js'
import type { News } from '$lib/data.js'
import showdown from 'showdown'


export const load = async (event) => {
    const Converter = showdown.Converter
    const converter = new Converter()
    const response = await fetchData('actualites', event.locals.lang, event.params.slug) as News
    const article = response.data[0].attributes
    article.content = converter.makeHtml(article.content).replaceAll('<h3', '<h2').replaceAll('<h1', '<h2')

    return {
        article
    }
}