<script lang="ts">
    import { enhance } from "$app/forms";
    let activeTab = $state<"login" | "register">("login");
</script>

<div class="flex items-start justify-center min-h-screen p-8 transition-transform duration-300" >
    <div class="bg-white rounded-md shadow-lg p-8 w-full max-w-md" >
        <div class="flex justify-center border-b-2 border-gray-300 mb-6">
            <button
                class="py-2 px-6 font-bold transition duration-300 border-b-4 {activeTab ===
                'login'
                    ? 'text-green-500 border-green-500'
                    : 'text-gray-400 border-transparent'}"
                onclick={() => (activeTab = "login")}
            >
                Login
            </button>
            <button 
                class="py-2 px-6 font-bold transition duration-300 border-b-4 {activeTab ===
                'register'
                    ? 'text-green-500 border-green-500'
                    : 'text-gray-400 border-transparent'}"
                onclick={() => (activeTab = "register")}
            >
                Register
            </button>
        </div>
        <div class="overflow-y-auto transition-all duration-1000">
            {#if activeTab === "login"}
                <div>
                    <h2
                        class="text-2xl font-bold mb-6 text-center text-[#0f172a]"
                    >
                        Login
                    </h2>
                    <form method="POST" action="?/login" use:enhance class="space-y-4">
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium mb-2 text-[#0f172a]"
                                >Email</label
                            >
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                class="block text-sm font-medium mb-2 text-[#0f172a]"
                                >Password</label
                            >
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            {:else if activeTab === "register"}
                <div>
                    <h2
                        class="text-2xl font-bold mb-6 text-center text-[#0f172a]"
                    >
                        Register
                    </h2>
                    <form method="POST" action="?/register" use:enhance class="space-y-4">
                        <div>
                            <label
                                for="name"
                                class="block text-sm font-medium mb-2 text-[#0f172a]"
                                >Name</label
                            >
                            <input
                                type="text"
                                id="name"
                                name="name"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium mb-2 text-[#0f172a]"
                                >Email</label
                            >
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                class="block text-sm font-medium mb-2 text-[#0f172a]"
                                >Password</label
                            >
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                </div>
            {/if}
        </div>
    </div>
</div>