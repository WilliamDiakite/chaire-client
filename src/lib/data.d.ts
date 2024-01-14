export type Participant = {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: 'fr' | 'en';
	bio: string;
	publications: string;
	role: string;
	position: string;
	affiliation: string;
	axis: string;
	slug: string;
	image: string;
};

export type News = {
	description: string;
	title: string;
	date: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: 'en' | 'fr';
	slug: string | null;
	images?: {
		data: Image[];
	};
	imgPlacement: 'top' | 'bottom';
	localization?: {
		data: [
			{
				id: number;
				attributes: {
					description: string;
					title: string;
					date: string;
					content: string;
					createdAt: string;
					updatedAt: string;
					publishedAt: string;
					locale: 'fr' | 'en';
					slug: string;
				};
			}
		];
	};
};

export type Archive = {
	title: string;
	description: string;
	content: string;
	category: string;
	date: string;
	axis: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: 'fr' | 'en';
	slug: string;
	imgPlacement: string;
	images: Image;
};

export type Image = {
	id: number;
	attributes: {
		name: string;
		alternativeText: string;
		caption: null;
		width: number;
		height: number;
		formats: {
			thumbnail: {
				name: string;
				hash: string;
				ext: string;
				mime: string;
				path: null;
				width: number;
				height: number;
				size: number;
				url: string;
			};
		};
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: string | null;
		provider: string;
		provider_metadata: null;
		createdAt: string;
		updatedAt: string;
	};
};
