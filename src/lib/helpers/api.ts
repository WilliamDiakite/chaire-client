import { API_URL, API_TOKEN } from '$env/static/private';

type Ressources = {
	about: string;
	titulaire: string;
	axis1: string;
	axis2: string;
	participants: string;
	actualites: string;
	archives: string;
	axes: string;
};

export const fetchData = async (
	ressource: keyof Ressources,
	locale: 'fr' | 'en',
	slug?: string
) => {
	let filters = '';
	if (slug)
		if (ressource === 'axes') filters = `filters[page][$eq]=${slug}&`;
		else if (ressource === 'archives' || ressource === 'actualites')
			filters = `filters[slug][$eq]=${slug}&`;

	let url = `${API_URL}/${ressource}?${filters}locale=${locale}&populate=*`;
	url = url.replace('api//', 'api/');

	console.log('fetching', url);

	const response = fetch(url, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	}).then((res) => res.json());
	const data = await response;
	return data;
};

export const fetchArticle = async (ressource: 'archives' | 'actualites' | 'axes', slug: string) => {
	let url;
	if (ressource === 'axes') url = `${API_URL}/${ressource}?filters[page][$eq]=${slug}&populate=*`;
	else url = `${API_URL}/${ressource}?filters[slug][$eq]=${slug}&populate=*`;

	url = url.replace('api//', 'api/');

	console.log('fetching', url);

	const response = fetch(url, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	}).then((res) => res.json());
	const data = await response;

	return data.data[0].attributes;
};
