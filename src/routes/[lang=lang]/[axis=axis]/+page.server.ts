import { API_URL } from '$env/static/private'
import showdown from 'showdown'

export const load = async ({ fetch, params, locals }) => {
    const Converter = showdown.Converter
    const response = await fetch(API_URL + `/axes?filters[slug]=${params.axis}`).then(res => res.json())

    const converter = new Converter()
    const content = converter.makeHtml(response.data[0].attributes.content)
    return {
        ...response.data[0].attributes,
        content,
        lang: locals.lang,
    }
}