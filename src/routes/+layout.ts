/** @type {import('./$types').PageLoad} */
export function load({ url, data }) {
	return {
		url: url.pathname,
		logged_in: data.logged_in
	};
}

export const prerender = true;