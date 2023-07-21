import { writable } from 'svelte/store';

// selected participant
export const expandedChildIndex = writable(-1)

export const sectionTitle = writable('')
export const archiveType = writable('')

export const prevPage = writable('/')

export const filterType = writable('none' as 'role' | 'event' | 'none')
export const axisFilter = writable('filter.axis1' as 'filter.axis1' | 'filter.axis2')
export const filters = writable([] as string[])

export const redirects = writable({
    fr: '/fr',
    en: '/en'
})

export const base = writable('')