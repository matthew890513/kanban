<script lang="ts">
	import "../app.css";
	import favicon from '$lib/assets/favicon.svg';
	import FloatingLangSelector from '$lib/components/FloatingLangSelector.svelte';
	import FloatingThemeSelector from '$lib/components/FloatingThemeSelector.svelte';
	import { onMount } from 'svelte';
	import { setTheme } from '$lib/stores/themeStore.js';

	onMount(() => {
		// Intentar obtener el tema del localStorage
		const storedTheme = localStorage.getItem('theme');

		if (storedTheme) {
			// Si existe, usar el guardado
			setTheme(storedTheme);
		} else {
			// Si no existe, establecer 'light' y guardarlo
			setTheme('light');
			localStorage.setItem('theme', 'light');
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<slot />
<FloatingThemeSelector />
<FloatingLangSelector />