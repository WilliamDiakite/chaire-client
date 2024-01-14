import { fetchData } from '$lib/helpers/api';
import type { News } from '$lib/data.d.ts';

export const load = async (event) => {
	const response = await fetchData('actualites', event.locals.lang);
	const news = response ? response.data.map((d: { attributes: News }) => d.attributes) : [];

	return {
		news,
		lang: event.locals.lang
	};
};
