<script lang="ts">
    let { data, form } = $props();
</script>

<div class="h-[calc(100vh-10rem)] gap-4 overflow-auto p-4 rounded-md">
    <!-- Services Section -->
    <section
        id="request-form"
        class="bg-white text-[#0f172a] p-20 rounded-md"
    >
        {#if form?.success}
            <!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
            <p>Submitted</p>
        {/if}

        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Zoo Tour Anfrageformular</h2>
            <form class="grid grid-cols-1 gap-4 w-1/2 mx-auto" method="POST">
                <div>
                    <label for="date" class="block text-left mb-2">Datum:</label
                    >
                    <input
                        type="date"
                        id="date"
                        name="date"
                        class="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label for="time" class="block text-left mb-2"
                        >Uhrzeit:</label
                    >
                    <input
                        type="time"
                        id="time"
                        name="time"
                        class="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label for="group-size" class="block text-left mb-2"
                        >Gruppengrösse:</label
                    >
                    <input
                        type="number"
                        id="group-size"
                        name="group-size"
                        class="w-full p-2 border rounded-md"
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label for="favourite-animals" class="block text-left mb-2"
                        >Lieblingstiere:</label
                    >
                    <select
                        id="favourite-animals"
                        name="favourite-animals"
                        class="w-full p-2 border rounded-md"
                    >
                        <option value="savannah">Savanne</option>
                        <option value="elefantenpark">Elefantenpark</option>
                        <option value="aquarium">Aquarium</option>
                        <option value="maosalahalle">Maosalahalle</option>
                        <option value="streichelzoo">Streichelzoo</option>
                        <option value="panthera">Panthera</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        class="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
                        >Anfrage absenden</button
                    >
                </div>
            </form>
        </div>
    </section>
</div>
