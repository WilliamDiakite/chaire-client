import { API_URL } from '$env/static/private'
import showdown from 'showdown'
import type { Participant } from '$lib/data'

export const load = async ({ fetch, locals }) => {
    const Converter = showdown.Converter
    const start = Date.now()
    const response = await fetch(API_URL + '/participants?populate=*')
        .then(res => res.json())
        .catch(err => [])

    // console.log('Load time: ', Date.now() - start + 'ms')

    if (!response.data) return { participants: [], lang: locals.lang }

    const participants: Participant[] = response.data.map(d => {

        const converter = new Converter()

        const bio = converter.makeHtml(d.attributes.bio)
        const publications = converter.makeHtml(d.attributes.publications)

        const image = d.attributes.image.data
            ? d.attributes.image.data.attributes.url
            : 'no-profile-image'

        return {
            id: d.id,
            ...d.attributes,
            image: image,
            bio,
            publications
        }
    })
    return {
        participants,
        lang: locals.lang,
    }
}