import { fetchData } from "$lib/helpers/api";
import type { Archive } from "$lib/data.d.ts";

export const load = async (event) => {
    const response = await fetchData('archives', event.locals.lang);
    const archives = response.data.map((d: { attributes: Archive }) => d.attributes);

    return {
        archives,
        lang: event.locals.lang,
    }
}