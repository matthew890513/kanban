<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  import i_launch_desktop from '$lib/assets/icons/launch-desktop.jpeg';
  import i_launch_mobile from '$lib/assets/icons/launch-mobile.jpeg';

  export let data;
  let labels = data.tLabels;

  onMount(() => {
    setTimeout(() => {
      const token = localStorage.getItem('auth_token');

      if (token) {
        goto('/kits-list');
      } else {
        goto('/login');
      }
    }, 2000); // 1.5 segundos de carga
  });
</script>

<!-- Contenedor principal centrado -->
<div class="w-screen h-screen flex flex-col justify-center items-center launch-background">
  <!-- Título -->
  <h1 class="text-3xl animate-fade-in launch-title">
    {labels['LaucherTitle']}
  </h1>

  <!-- Imagen pequeña según dispositivo -->
  <picture class="mt-4">
    <source srcset="{i_launch_desktop}" media="(min-width: 768px)" />
    <source srcset="{i_launch_mobile}" media="(max-width: 767px)" />
    <img src="{i_launch_mobile}" alt="Logo" class="w-20 h-auto opacity-90" />
  </picture>

  <!-- Mensaje de carga -->
  <span class="ext-xl mt-4 animate-pulse launch-loader">
    {labels['LaucherLoader']}
  </span>
</div>
  
<style>
  /* Animación suave */
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }
</style>
