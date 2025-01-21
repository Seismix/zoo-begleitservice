import type { PageServerLoad } from "./$types";
import { fetchUserById } from "$lib/db";

export const load: PageServerLoad = async () => {
    const user = await fetchUserById(1);
    return {
        user: user,
    };
};
