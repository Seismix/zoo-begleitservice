/** @type {import('./$types').PageLoad} */
export function load({ url }: { url: URL }) {
	return {
		url: url.pathname,
	};
}

export const prerender = true;
