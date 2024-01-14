// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			lang: 'en' | 'fr';
			redirects: {
				fr: string;
				en: string;
			};
		}
	}
}

export {};
