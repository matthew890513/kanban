<script>
  import { theme, setTheme } from '$lib/stores/themeStore.js';
  import { onMount } from 'svelte';

  let open = false;
  let dialogRef;

  function selectTheme(value) {
    setTheme(value);
    open = false; // Cerrar dialog al seleccionar
  }

  /** 🔥 Detectar clic fuera del dialog */
  function handleClickOutside(event) {
    if (open && dialogRef && !dialogRef.contains(event.target)) {
      open = false;
    }
  }

  onMount(() => {
    /** 🔥 Listener global para cerrar al hacer clic fuera */
    document.addEventListener('click', handleClickOutside);

    /** 🔥 Listener para cambios del sistema */
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const systemListener = () => {
      if ($theme === 'system') {
        setTheme('system'); // Recalcula basado en el sistema
      }
    };

    media.addEventListener('change', systemListener);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      media.removeEventListener('change', systemListener);
    };
  });
</script>

<!-- Botón flotante -->
<div
  class="button-floating bottom-16 z-50"
    on:click={(e) => { 
      e.stopPropagation(); 
      open = !open;
    }}
    title="Change theme"
>
  {#if $theme === 'light'}
    <span class="w-6 h-6 inline-flex items-center justify-center">☀️</span>
  {:else if $theme === 'dark'}
    <span class="w-6 h-6 inline-flex items-center justify-center">🌙</span>
  {:else}
    <span class="w-6 h-6 inline-flex items-center justify-center">🖥️</span>
  {/if}
</div>

<!-- Dialog -->
{#if open}
  <div class="droplist-floating bottom-28 z-50">
    <label class="flex items-center gap-2 mb-2">
      <input
        type="radio"
        name="theme"
        value="light"
        bind:group={$theme}
        on:change={() => selectTheme('light')}
      />
      <span>Claro</span>
    </label>

    <label class="flex items-center gap-2 mb-2">
      <input
        type="radio"
        name="theme"
        value="dark"
        bind:group={$theme}
        on:change={() => selectTheme('dark')}
      />
      <span>Oscuro</span>
    </label>

    <label class="flex items-center gap-2">
      <input
        type="radio"
        name="theme"
        value="system"
        bind:group={$theme}
        on:change={() => selectTheme('system')}
      />
      <span>Sistema</span>
    </label>
  </div>
{/if}
