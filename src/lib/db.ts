export async function fetchOrders(): Promise<any[]> {
    try {
        const response = await fetch("http://localhost:3001/orders");
        if (!response.ok) {
            throw new Error(`Failed to fetch orders: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
}
