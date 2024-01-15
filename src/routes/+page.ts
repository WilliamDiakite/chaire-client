import { redirect } from '@sveltejs/kit';
import { building } from '$app/environment';

export const load = () => {
	if (!building) {
		console.log('---- building mode');
		throw redirect(300, '/fr');
	}
};
