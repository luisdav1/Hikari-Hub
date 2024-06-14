<template>
    <div class="cat-found flex items-center justify-center bg-black">
        <div class="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-full max-w-sm">
            <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
            <form @submit.prevent="register">
                <div class="mb-4">
                    <label for="username" class="block text-sm font-medium mb-2">Username</label>
                    <input v-model="username" type="text" id="username" required
                        class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium mb-2">Email</label>
                    <input v-model="email" type="email" id="email" required
                        class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium mb-2">Password</label>
                    <input v-model="password" type="password" id="password" required
                        class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <div class="mb-6">
                    <label for="confirmPassword" class="block text-sm font-medium mb-2">Confirm Password</label>
                    <input v-model="confirmPassword" type="password" id="confirmPassword" required
                        class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" class="w-full py-2 bg-[#fd7e14] hover:bg-[#FF4E00] rounded text-white font-bold">
                    Register
                </button>
                <p class="mt-4 text-center">
                    Already have an account? <RouterLink to="/login" class="text-[#FF4E00] hover:underline">Log in</RouterLink>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

export default {
    components: {
        RouterLink
    },
    setup() {
        const username = ref('');
        const email = ref('');
        const password = ref('');
        const confirmPassword = ref('');
        const userStore = useUserStore();
        const router = useRouter();

        const register = async () => {
            if (password.value !== confirmPassword.value) {
                alert('Passwords do not match!');
                return;
            }

            const success = await userStore.register(username.value, email.value, password.value);
            if (success) {
                router.push('/login'); // Redirige después de un registro exitoso
            } else {
                alert('Registration failed.'); // Maneja el error de registro
            }
        };

        return {
            username,
            email,
            password,
            confirmPassword,
            register
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
