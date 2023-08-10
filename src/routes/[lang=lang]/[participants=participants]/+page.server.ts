import { fetchData } from '$lib/helpers/api.js'
import showdown from 'showdown'
import type { Participant } from '$lib/data'

export const load = async ({ locals }) => {
    const { data } = await fetchData('participants', locals.lang)
    if (!data) return { participants: [], lang: locals.lang }

    const Converter = showdown.Converter

    const participants: Participant[] = data.map(d => {
        const converter = new Converter()

        const bio = converter.makeHtml(d.attributes.bio).replaceAll('<h1', '<h2')
        const publications = converter.makeHtml(d.attributes.publications)?.replaceAll('<ul', '<ul class="publications"')

        return {
            id: d.id,
            ...d.attributes,
            bio,
            publications
        }
    })

    return {
        participants,
        lang: locals.lang,
    }
}