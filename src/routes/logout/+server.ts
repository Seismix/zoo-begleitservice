import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ cookies }) => {
    cookies.delete("logged_in", { path: "/" });
    throw redirect(302, "/");
    return new Response();
};
