import { fetchData } from '$lib/helpers/api.js'
import showdown from 'showdown'


export const load = async (event) => {
    const converter = new showdown.Converter()
    const data = await fetchData('titulaire', event.locals.lang)

    const article = data.data.attributes
    article.bio = converter.makeHtml(article.bio)
    article.publications = converter.makeHtml(article.publications).replace('<ul>', '<ul class="publications">')

    return {
        article
    }
}