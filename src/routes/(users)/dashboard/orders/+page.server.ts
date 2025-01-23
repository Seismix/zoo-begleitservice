import type { PageServerLoad } from "./$types";
import { fetchOrdersByUserId } from "$lib/db";

export const load: PageServerLoad = async ({ cookies }) => {
    const user_id = cookies.get("user_id") as string;
    const orders = await fetchOrdersByUserId(user_id);
    return {
        orders: orders,
    };
};
