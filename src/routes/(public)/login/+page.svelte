<script lang="ts">
	import { onMount } from 'svelte';
  	import { goto } from '$app/navigation';;
   	
	export let data;
  	let labels = data.tLabels;

	let user = '';
  	let password = '';
  	let errorMessage = '';

	onMount(() => {
      const token = localStorage.getItem('auth_token');

      if (token) {
        goto('/kits-list');
	  }
	})

	async function login(e: Event) {
        e.preventDefault();

		 // Validación básica
    	if (!user.trim() || !password.trim()) {
      		errorMessage = "LoginErrorEmptyFields"; //"Por favor llena todos los campos.";
      		return;
    	}

        // Aquí podrías validar correo/contraseña o llamar a tu API.
        // Ejemplo rápido:
        // const res = await fetch('/api/login', { method: 'POST', body: ... })

		// Simular un token generado (puedes generar uno dinámico si quieres)
    	const fakeToken = "token_simulado_123456";

    	// Guardarlo en localStorage
    	localStorage.setItem("auth_token", fakeToken);

        // Redirigir después del login
        goto('/kits-list');
    }
</script>

<main class="container-login">
	<!--<div class="container-login flex items-center justify-center min-h-screen">-->
		<div class="form-login">
			<h1 class="form-title">{labels['LoginTitle']}</h1>

			<form class="space-y-5" on:submit|preventDefault={login}>
				<div>
					<label for="user" class="input-form-title">{labels['LoginUser']}</label
					>
					<input
						type="text"
						id="user"
						bind:value={user}
						placeholder="ESTRADAG"
						class="input-form"
					/>
				</div>

				<div>
					<label for="password" class="input-form-title">{labels['LoginPassword']}</label
					>
					<input
						type="password"
						id="password"
						bind:value={password}
						placeholder="••••••••"
						class="input-form"
					/>
				</div>
				
				{#if errorMessage}
    				<p class="message-danger">{labels[errorMessage]}</p>
  				{/if}

				<button
					type="submit"
					class="primary-button w-full"
				>
					{labels['LoginBtn']}
				</button>
			</form>

			<div class="text-center mt-5">
				<p class="text-sm text-gray-600">
					<a href="#" class="a-link">{labels['LoginRecoveryPassword']}</a>
				</p>
			</div>
		</div>
	<!--/div>-->
</main>