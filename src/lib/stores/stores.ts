import { writable, derived } from 'svelte/store';
import { page } from '$app/stores';

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
export const homeShowFooter = writable(true)

export const screenWidth = writable(1200 as number | undefined)
export const screenType = derived(screenWidth, ($screenWidth) => {
    if (!$screenWidth) return 'desktop';
    if ($screenWidth <= 480) return 'mobile';
    else if ($screenWidth >= 481 && $screenWidth <= 820) return 'tablet-vertical';
    else if ($screenWidth >= 821 && $screenWidth <= 1024) return 'tablet-horizontal';
    else return 'desktop';
})

export const slug = writable('')
export const i18nSlug = derived([page, slug], ([$page, $slug]) => {
    if ($page && (
        $page.route.id === '/[lang=lang]/[news=news]/[slug]' ||
        $page.route.id === '/[lang=lang]/[archives=archives]/[slug]'
    ))
        return $slug
    else return ''
})