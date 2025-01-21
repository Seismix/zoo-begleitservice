<script lang="ts">
    let { data } = $props();

    console.log(data);

    const orders = data.orders;

    // Sample data for demonstration purposes
    // let orders = [
    //     {
    //         date: "2023-10-01",
    //         time: "10:00",
    //         groupSize: 5,
    //         favouriteAnimals: "Savanne",
    //         status: "pending",
    //     },
    //     {
    //         date: "2023-10-02",
    //         time: "14:00",
    //         groupSize: 3,
    //         favouriteAnimals: "Aquarium",
    //         status: "approved",
    //     },
    //     {
    //         date: "2023-10-03",
    //         time: "09:00",
    //         groupSize: 10,
    //         favouriteAnimals: "Elefantenpark",
    //         status: "denied",
    //     },
    // ];
</script>

<div class="h-[calc(100vh-10rem)] gap-4 overflow-auto p-4 rounded-md">
    <section id="orders" class="bg-white text-[#0f172a] p-20 rounded-b-md">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Bestellungen</h2>
            <p class="mb-4">
                Wenn Sie eine Bestellung stornieren möchten, nutzen Sie bitte
                die <a href="/contact" class="text-blue-500 underline"
                    >Kontaktseite</a
                >.
            </p>
            <div class="grid grid-cols-1 gap-8">
                {#each orders as order}
                    <div class="p-4 border rounded-md">
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
