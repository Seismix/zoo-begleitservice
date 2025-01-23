import { createOrder } from "$lib/db";
import type { Actions } from "./$types";

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const user_id = cookies.get("user_id") as string;

        // maybe do some form action error handling here
        const date = data.get("date")?.toString() || "";
        const time = data.get("time")?.toString() || "";
        const groupSize = String(data.get("group-size"));
        const favouriteAnimals = String(data.get("favourite-animals"));
        const status = "pending";


        await createOrder(user_id, {
            date,
            time,
            groupSize,
            favouriteAnimals,
            status,
        });

        return { success: true };
    },
} satisfies Actions;
