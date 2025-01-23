import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ cookies }) => {
    const allCookies = cookies.getAll();
    allCookies.forEach(cookie => {
        cookies.delete(cookie.name, { path: "/" });
    });
    throw redirect(302, "/");
};
