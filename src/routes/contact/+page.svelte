<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<div class="flex items-start justify-center min-h-screen p-8 transition-transform duration-300">
    <div class="bg-white rounded-md shadow-lg p-8 w-full max-w-md">
        <div class="overflow-y-auto transition-all duration-1000">
            <h2 class="text-2xl font-bold mb-6 text-center text-[#0f172a]">Kontakt</h2>
            <form action="/submit" method="post" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium mb-2 text-[#0f172a]">Name</label>
                    <input type="text" id="name" name="name" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium mb-2 text-[#0f172a]">Email</label>
                    <input type="email" id="email" name="email" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium mb-2 text-[#0f172a]">Message</label>
                    <textarea id="message" name="message" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
                </div>
                <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300">Send</button>
            </form>
        </div>
    </div>
</div>
