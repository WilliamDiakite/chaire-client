import { t } from "$lib/i18n/i18n";
import { dev } from "$app/env";
import { PUBLIC_BASE_URL } from "$env/static/public";

export function createUrlSlug(title: string) {
    const accentsMap: { [key: string]: string } = {
        'à': 'a', 'â': 'a', 'ä': 'a', 'á': 'a', 'ã': 'a', 'å': 'a',
        'ç': 'c',
        'è': 'e', 'ê': 'e', 'ë': 'e', 'é': 'e',
        'ì': 'i', 'î': 'i', 'ï': 'i', 'í': 'i',
        'ñ': 'n',
        'ò': 'o', 'ô': 'o', 'ö': 'o', 'ó': 'o', 'õ': 'o', 'ø': 'o',
        'ß': 's',
        'ù': 'u', 'û': 'u', 'ü': 'u', 'ú': 'u',
        'ÿ': 'y',
        'æ': 'ae',
        'œ': 'oe'
    };

    const slug = title.toLowerCase().replace(/[^\w\s-]/g, function (character) {
        return accentsMap[character] || '';
    }).replace(/\s+/g, '-').replace(/--+/g, '-');

    return slug;
}
