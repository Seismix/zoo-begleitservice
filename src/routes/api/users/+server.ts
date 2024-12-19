import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const response = await fetch("http://localhost:3001/users");
    const users = await response.json();

    return json(users);
};