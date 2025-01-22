<script lang="ts">
    let { data, form} = $props();

    const user = data.user;
</script>

<!-- ...existing code... -->

<div class="h-[calc(100vh-10rem)] gap-4 overflow-auto p-4 rounded-md">
    <section id="profile" class="bg-white text-[#0f172a] p-20 rounded-b-md">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Profil</h2>
            <p class="mb-4">Hallo {user.email}, Sie können hier Ihre Daten ändern.</p>
            {#if form?.success}
            <!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
            <p>Updated profile for {user.email}</p>
        {/if}
            <form class="grid grid-cols-1 gap-8" method="POST">
                <div class="p-4 border rounded-md">
                    <label for="email" class="block text-left mb-2"
                        ><strong>Email:</strong></label
                    >
                    <input
                        type="email"
                        id="email"
                        name="email"
                        bind:value={user.email}
                        required
                        class="w-full p-2 border rounded-md"
                    />
                </div>
                <div class="p-4 border rounded-md">
                    <label for="telephone" class="block text-left mb-2"
                        ><strong>Telephone (optional):</strong></label
                    >
                    <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        bind:value={user.telephone}
                        class="w-full p-2 border rounded-md"
                    />
                </div>
                <div class="p-4 border rounded-md">
                    <label for="address" class="block text-left mb-2"
                        ><strong>Address:</strong></label
                    >
                    <input
                        type="text"
                        id="address"
                        name="address"
                        bind:value={user.address}
                        required
                        class="w-full p-2 border rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    class="w-full p-2 bg-blue-500 text-white rounded-md"
                    >Save</button
                >
            </form>
        </div>
    </section>
</div>

<!-- ...existing code... -->
