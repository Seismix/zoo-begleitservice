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
export async function fetchUserById(userId: number): Promise<any> {
    try {
        const response = await fetch(
            `http://localhost:3001/users?id=${userId}`
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch user: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.length === 0) {
            throw new Error(`User with id ${userId} not found`);
        }
        return data[0]; // Return the first user object from the array
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}
