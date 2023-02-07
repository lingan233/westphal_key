import { error } from '@sveltejs/kit';
import { PUBLIC_STRAPI_SERVER_URL } from '$env/static/public';

const endpoint = `${PUBLIC_STRAPI_SERVER_URL}/api/majors?populate=*`;

export const load = async ({ params }) => {
	try {
		const response = await fetch(endpoint);
		const data = await response.json();
		return data.data.find(
			(major) => major.attributes.shorthand.toLowerCase() === params.slug.toLowerCase()
		);
	} catch {
		return error(404, 'Not found');
	}
};
