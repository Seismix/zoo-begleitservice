import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const logged_in = cookies.get("logged_in");
    const admin = cookies.get("admin");
    const user_id = cookies.get("user_id");

    console.log("logged in?:", logged_in);
    console.log("admin?:", admin);
    console.log("user_id:", user_id);

    return {
        logged_in: logged_in,
        admin: admin,
        user_id: user_id,
    };
};