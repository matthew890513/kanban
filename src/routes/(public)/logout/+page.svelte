<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    export let data;
  	let labels = data.tLabels;

    onMount(() => {
        // Espera 1.5 segundos y luego redirige
        setTimeout(() => {
            localStorage.removeItem("auth_token");
            goto('/launch');
        }, 1500);
    });
</script>

<main class="container-logout">
    <div class="card-logout">
        <h2 class="title">{labels['LogoutTitle']}</h2>
        <p class="description">{labels['LoginDescription']}</p>

        <div class="flex justify-center mt-4">
            <!-- Loader -->
            <div class="loading"></div>
        </div>
    </div>
</main>
