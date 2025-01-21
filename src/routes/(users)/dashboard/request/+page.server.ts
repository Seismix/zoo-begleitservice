import { createOrder } from "$lib/db";
import type { Actions } from "./$types";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        // maybe do some form action error handling here
        const date = data.get("date")?.toString() || "";
        const time = data.get("time")?.toString() || "";
        const groupSize = String(data.get("groupSize"));
        const favouriteAnimals = String(data.get("favouriteAnimals"));
        const status = "pending";

        await createOrder(1, {
            date,
            time,
            groupSize,
            favouriteAnimals,
            status,
        });

        return { success: true };
    },
} satisfies Actions;
