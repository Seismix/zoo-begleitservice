import type { PageServerLoad } from "./$types";
import { fetchOrders } from "$lib/db";

export const load: PageServerLoad = async () => {
    const orders = await fetchOrders();
    return {
        orders: orders,
    };
};
