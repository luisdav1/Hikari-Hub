<template>
    <div class="flex items-center justify-center cat-found">
        <div class="bg-base-100 text-white rounded-lg shadow-lg p-8 w-full max-w-sm">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium mb-2">Email</label>
                    <input v-model="email" type="email" id="email" required
                        class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium mb-2">Password</label>
                    <input v-model="password" type="password" id="password" required
                        class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" class="w-full py-2 bg-[#fd7e14] hover:bg-[#FF4E00] rounded text-white font-bold">
                    Log In
                </button>
                <p class="mt-4 text-center">
                    Already haven't an account? <RouterLink to="/register" class="text-[#FF4E00] hover:underline">Sign up</RouterLink>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.js';
import { ref } from 'vue';

export default {
    components: {
        RouterLink
    },
    setup() {
        const email = ref('');
        const password = ref('');
        const userStore = useUserStore();
        const router = useRouter();

        const login = async () => {
            await userStore.keepUser(email.value, password.value);
            if (userStore.user) {
                router.push('/manga'); // Utiliza `router.push` en lugar de `this.$router.push`
            }
        };

        return {
            email,
            password,
            login
        };
    }
};
</script>

<style>
.cat-found {
    min-height: 100vh;
    background-image: url('../assets/images/fondo_v3.png');
    background-size: cover;
    background-position: center;
}
</style>
