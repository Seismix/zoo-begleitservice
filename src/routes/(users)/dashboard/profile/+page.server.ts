import { fetchUserById, updateUserDetails } from "$lib/db";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const user = await fetchUserById("dac2");

    return {
        user: user,
    };
};

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const email = data.get("email")?.toString() || "";
        const telephone = data.get("telephone")?.toString() || "";
        const address = data.get("address")?.toString() || "";

        await updateUserDetails("dac2", {
            email,
            telephone,
            address,
        });

        return { success: true };
    },
} satisfies Actions;
