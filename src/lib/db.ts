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
            `http://localhost:3001/users?userId=${userId}`
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

export async function createOrder(
    userId: number,
    order: {
        date: string;
        time: string;
        groupSize: string;
        favouriteAnimals: string;
        status: string;
    }
): Promise<any> {
    try {
        // Fetch all orders for the user
        const response = await fetch(
            `http://localhost:3001/orders?userId=${userId}`
        );
        if (!response.ok) {
            throw new Error(
                `Failed to fetch user orders: ${response.statusText}`
            );
        }

        const userOrders = await response.json();

        // Calculate the new order ID
        const newOrderId = userOrders.length > 0 ? userOrders.length + 1 : 1;

        // Create the new order object with the generated ID
        const newOrder = {
            id: newOrderId,
            userId,
            ...order,
        };

        // Send the new order to the server
        const createResponse = await fetch("http://localhost:3001/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newOrder),
        });

        if (!createResponse.ok) {
            throw new Error(
                `Failed to create order: ${createResponse.statusText}`
            );
        }

        const data = await createResponse.json();
        return data;
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
}

export async function updateUserDetails(
    userId: number,
    updatedDetails: {
        email?: string;
        telephone?: string;
        address?: string;
    }
): Promise<any> {
    try {
        // Fetch the current user details using fetchUserById function
        const currentUser = await fetchUserById(userId);        

        // Update only the changed values
        const updatedUser = {
            ...currentUser,
            ...updatedDetails,
        };

        // Send the updated user details to the server
        const updateResponse = await fetch(
            `http://localhost:3001/users/${updatedUser.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            }
        );

        if (!updateResponse.ok) {
            throw new Error(
                `Failed to update user: ${updateResponse.statusText}`
            );
        }

        const updatedData = await updateResponse.json();

        console.log("Updated user details:", updatedData);
        
        return updatedData;
    } catch (error) {
        console.error("Error updating user details:", error);
        throw error;
    }
}
