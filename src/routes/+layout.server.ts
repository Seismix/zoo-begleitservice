import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const logged_in = cookies.get("logged_in");

    console.log("logged in?:", logged_in);

    return {
        logged_in: logged_in,
    };
};