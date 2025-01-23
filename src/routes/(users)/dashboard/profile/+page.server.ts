import { fetchUserById, updateUserDetails } from "$lib/db";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const user_id = cookies.get("user_id") as string;
    const user = await fetchUserById(user_id);

    return {
        user: user,
    };
};

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const user_id = cookies.get("user_id") as string;

        const email = data.get("email")?.toString() || "";
        const telephone = data.get("telephone")?.toString() || "";
        const address = data.get("address")?.toString() || "";

        await updateUserDetails(user_id, {
            email,
            telephone,
            address,
        });

        return { success: true };
    },
} satisfies Actions;
