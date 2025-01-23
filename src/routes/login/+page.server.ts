// src/routes/login/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { getUserByEmail, createUser, verifyPassword } from "$lib/db";

export const actions: Actions = {
    register: async ({ request, cookies }) => {
        console.log("register");
        
        const data = await request.formData();
        const email = data.get("email")?.toString().trim().toLowerCase();
        const password = data.get("password")?.toString().trim();

        console.log(email, password);
        

        if (!email || !password) {
            return fail(400, {
                error: "All fields are required.",
                email,
            });
        }

        // Check if the user already exists
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return fail(400, { error: "User already exists.", email });
        }

        // Create the user in the database
        const newUser = await createUser({ email, password });

        // Set cookies to remember the logged-in status and user ID
        cookies.set("logged_in", "true", {
            path: "/",
            httpOnly: false, // Accessible to client-side JavaScript
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        cookies.set("user_id", newUser.id, {
            path: "/",
            httpOnly: true, // Not accessible to client-side JavaScript
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        // Redirect to the homepage
        throw redirect(303, "/");
    },

    login: async ({ request, cookies }) => {
        const data = await request.formData();
        const email = data.get("email")?.toString().trim().toLowerCase();
        const password = data.get("password")?.toString().trim();

        if (!email || !password) {
            return fail(400, {
                error: "Email and password are required.",
                email,
            });
        }

        // Verify user credentials
        const user = await getUserByEmail(email);
        if (!user || !(await verifyPassword(user, password))) {
            // return { sucess: false };
            return fail(400, { error: "Invalid email or password.", email });
        }

        // Set cookies to remember the logged-in status and user ID
        cookies.set("logged_in", "true", {
            path: "/",
            httpOnly: false, // Accessible to client-side JavaScript
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        cookies.set("user_id", user.id, {
            path: "/",
            httpOnly: true, // Not accessible to client-side JavaScript
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        if (user.admin) {            
            console.log(user);
            
            cookies.set("admin", "true", {
                path: "/",
                httpOnly: false, // Accessible to client-side JavaScript
                maxAge: 60 * 60 * 24 * 7, // 1 week
            });
        }

        // Redirect to the homepage
        throw redirect(303, "/");
    },
};
