<script lang="ts">
    import "../app.css";
    import { fade } from "svelte/transition";
    let { children, data } = $props<{
        children: any;
        data: { url: string; logged_in: boolean };
    }>();
</script>

<div class="flex flex-col justify-between min-h-screen">
    <div class=" bg-gradient-to-tr from-green-500 to-orange-300 w-full h-auto">
        <div
            class="flex flex-wrap items-center justify-between md:mx-4 lg:mx-32 p-4"
        >
            <a
                href="/"
                class="flex items-center justify-between gap-8 hover:scale-110 transform transition duration-500"
            >
                <img src="/logo.png" class="h-12 rounded-md" alt="Fine" />
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap"
                >
                    Zoo Begleitservice
                </span>
            </a>
            <ul class="flex justify-between gap-12">
                <li
                    class="hover:scale-125 transform transition duration-500 flex place-items-center border-x-2 border-white px-4"
                >
                    <a
                        href={data.logged_in ? "/dashboard/request" : "/login"}
                        class="rounded hover:scale-110 transform transition duration-500"
                        >Buchen</a
                    >
                </li>
                {#if !data.logged_in}
                    <li
                        class="hover:scale-125 transform transition duration-500 flex place-items-center border-x-2 border-white px-4"
                    >
                        <a href="/login" class="rounded">Login</a>
                    </li>
                {/if}
                {#if data.logged_in}
                    <li
                        class="hover:scale-125 transform transition duration-500 flex place-items-center border-x-2 border-white px-4"
                    >
                        <a href="/dashboard" class="rounded">Dashboard</a>
                    </li>
                    <li
                        class="hover:scale-125 transform transition duration-500 flex place-items-center border-x-2 border-white px-4"
                    >
                        <a href="/adminpanel" class="rounded">Adminpanel</a>
                    </li>
                    <li
                        class="hover:scale-125 transform transition duration-500 flex place-items-center border-x-2 border-white px-4"
                    >
                        <form action="/logout" method="post">
                            <button type="submit" class="rounded">Logout</button
                            >
                        </form>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
    <div class="bg-gradient-to-br from-[#D9A84E] via-[#967B3E] to-[#5A4A2E]">
        {#key data.url}
            <div
                class="md:px-12 lg:px-32 bg-fixed min-h-[calc(100vh-6rem)] grid bg-gradient-to-br from-[#B4863D] via-[#7A6334] to-[#463620] overflow-hidden py-4"
                style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch;"
                in:fade={{ duration: 500, delay: 500 }}
                out:fade={{ duration: 500 }}
            >
                <div
                    class="slot-content flex-grow"
                    style="width: 100%; height: 100%;"
                >
                    {@render children()}
                </div>
            </div>
        {/key}
    </div>
    <div
        class="sticky bottom-0 z-50 bg-gradient-to-r from-slate-900 to-[#052e16] w-full h-auto"
    >
        <div
            class="flex flex-wrap items-center justify-center md:mx-4 lg:mx-32 py-4"
        >
            <a
                href="/"
                class="flex items-center justify-center gap-8 hover:scale-110 transform transition duration-500"
            >
                <span class="self-center font-semibold whitespace-nowrap">
                    © Oliver Stalder & Olivier Vroege 2024
                </span>
            </a>
        </div>
    </div>
</div>
