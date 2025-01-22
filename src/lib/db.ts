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
export async function fetchUserById(id: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3001/users/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user: ${response.statusText}`);
        }
        const data = await response.json();

        if (data.length === 0) {
            throw new Error(`User with id ${id} not found`);
        }
        return data; // Return the first user object from the array
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

export async function createOrder(
    id: string,
    order: {
        date: string;
        time: string;
        groupSize: string;
        favouriteAnimals: string;
        status: string;
    }
): Promise<any> {
    const newOrder = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...order,
            userId: id,
        }),
    });

    if (!newOrder.ok) {
        throw new Error(`Failed to create order: ${newOrder.statusText}`);
    }

    const data = await newOrder.json();

    return data;
}

export async function updateUserDetails(
    userId: string,
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

        return updatedData;
    } catch (error) {
        console.error("Error updating user details:", error);
        throw error;
    }
}

export async function updateOrderStatus(orderId: string, newStatus: string): Promise<any> {
    try {
        // Fetch the current order details
        const response = await fetch(`http://localhost:3001/orders/${orderId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch order: ${response.statusText}`);
        }
        const order = await response.json();

        // Update only the status
        const updatedOrder = {
            ...order,
            status: newStatus,
        };

        // Send the updated order details to the server
        const updateResponse = await fetch(`http://localhost:3001/orders/${orderId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedOrder),
        });

        if (!updateResponse.ok) {
            throw new Error(`Failed to update order status: ${updateResponse.statusText}`);
        }

        const data = await updateResponse.json();
        return data;
    } catch (error) {
        console.error("Error updating order status:", error);
        throw error;
    }
}

export async function getUserByEmail(email: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3001/users?email=${email}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user by email: ${response.statusText}`);
        }
        const data = await response.json()        

        return data[0]; // Return the first user object from the array
    } catch (error) {
        console.error("Error fetching user by email:", error);
        throw error;
    }
}

export async function createUser(user: {
    email: string;
    password: string;
}): Promise<any> {
    try {
        const response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error(`Failed to create user: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export async function verifyPassword(user: any, password: string): Promise<boolean> {
    // Compare the provided password with the user's password
    return user.password === password;
}