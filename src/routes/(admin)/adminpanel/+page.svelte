<script lang="ts">
    import type { PageData } from "./$types";
    import { updateOrderStatus } from "$lib/db";

    let { data }: { data: PageData } = $props();
    let activeTab = $state<"pending" | "approved" | "denied" | "all">("pending");

    const orders = data.orders;

    async function changeStatus(order: { id: string; status: string }, newStatus: string) {
        try {
            await updateOrderStatus(order.id, newStatus);
            order.status = newStatus;
            activeTab = newStatus as "pending" | "approved" | "denied" | "all";
        } catch (error) {
            console.error("Failed to update order status:", error);
        }
    }
</script>

<div class="h-[calc(100vh-10rem)] gap-4 overflow-auto p-4 rounded-md">
    <section id="orders" class="bg-white text-[#0f172a] p-20 rounded-md">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8">Bestellungen (Admin)</h2>
            <div class="flex justify-center border-b-2 border-gray-300 mb-6">
                <button
                    class="py-2 px-6 font-bold transition duration-300 border-b-4 {activeTab ===
                    'all'
                        ? 'text-green-500 border-green-500'
                        : 'text-gray-400 border-transparent'}"
                    onclick={() => (activeTab = "all")}
                >
                    All
                </button>
                <button
                    class="py-2 px-6 font-bold transition duration-300 border-b-4 {activeTab ===
                    'pending'
                        ? 'text-green-500 border-green-500'
                        : 'text-gray-400 border-transparent'}"
                    onclick={() => (activeTab = "pending")}
                >
                    Pending
                </button>
                <button
                    class="py-2 px-6 font-bold transition duration-300 border-b-4 {activeTab ===
                    'approved'
                        ? 'text-green-500 border-green-500'
                        : 'text-gray-400 border-transparent'}"
                    onclick={() => (activeTab = "approved")}
                >
                    Approved
                </button>
                <button
                    class="py-2 px-6 font-bold transition duration-300 border-b-4 {activeTab ===
                    'denied'
                        ? 'text-green-500 border-green-500'
                        : 'text-gray-400 border-transparent'}"
                    onclick={() => (activeTab = "denied")}
                >
                    Denied
                </button>
            </div>
            <div class="grid grid-cols-1 gap-8">
                {#each orders.filter((order) => activeTab === "all" || order.status === activeTab) as order}
                    <div class="p-4 border rounded-md">
                        <p><strong>Datum:</strong> {order.date}</p>
                        <p><strong>Uhrzeit:</strong> {order.time}</p>
                        <p><strong>Gruppengrösse:</strong> {order.groupSize}</p>
                        <p>
                            <strong>Lieblingstiere:</strong>
                            {order.favouriteAnimals}
                        </p>
                        <p><strong>Status:</strong> {order.status}</p>
                        {#if activeTab !== "all"}
                        <div class="mt-4">
                            <label
                                for="status"
                                class="block text-sm font-medium mb-2 text-[#0f172a]"
                                >Change Status</label
                            >
                            <select
                                id="status"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                bind:value={order.status}
                                onchange={(e) =>
                                    changeStatus(
                                        order,
                                        (e.target as HTMLSelectElement).value
                                    )}
                            >
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="denied">Denied</option>
                            </select>
                        </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>
