<script lang="ts">
    let { data } = $props();

    const orders = data.orders;
</script>

<div class="h-[calc(100vh-10rem)] gap-4 overflow-auto p-4 rounded-md">
    <section id="orders" class="bg-white text-[#0f172a] p-20 rounded-md">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Bestellungen</h2>
            <button class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-8">
                <a href="/contact">Stonierung Anfragen</a>
            </button>
            <div class="grid grid-cols-2 gap-8">
                {#each orders as order}
                    <div class="p-4 border rounded-md hover:bg-slate-300 bg-slate-100">
                        <p><strong>Datum:</strong> {order.date}</p>
                        <p><strong>Uhrzeit:</strong> {order.time}</p>
                        <p><strong>Gruppengrösse:</strong> {order.groupSize}</p>
                        <p>
                            <strong>Lieblingstiere:</strong>
                            {order.favouriteAnimals}
                        </p>
                        <p><strong>Status:</strong> {order.status}</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>
