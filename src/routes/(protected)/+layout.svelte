<script>
  import logo from '$lib/assets/icons/logo.png'; 

  let open = false;

	export let data;
  let labels = data.tLabels;

  const menuItems = [
    { name: 'MenuItemKitsList', href: '/kits-list' },
    { name: 'MenuItemKitNew', href: '/kit-new' },
    { name: 'MenuItemStocks', href: '/stocks' },
    { name: 'MenuItemLabels', href: '/labels' },
    { name: 'MenuItemLogout', href: '/logout' },
  ];
</script>

<!-- NAVBAR -->
<nav class="navbar">
  <!-- Logo -->
  <div class="flex items-center space-x-3">
    <img src={logo} alt="Logo" class="w-10 h-10 rounded-md shadow-md" />
    <span class="text-2xl font-bold tracking-wide">Kanban</span>
  </div>

  <!-- Menu Desktop -->
  <div class="menu">
    {#each menuItems as item}
      <a href={item.href} class="hover:text-gray-300 transition">
        {labels[item.name]}
      </a>
    {/each}
  </div>

  <!-- Hamburguesa Mobile -->
  <button 
    class="button-collapse"
    on:click={() => open = !open}
    aria-label="Open menu"
  >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </button>
</nav>

<!-- MENU MOBILE -->
{#if open}
  <div class="navbar-responsive animate-slide-down">
    {#each menuItems as item}
      <a 
        href={item.href} 
        class="pl-2 block text-lg hover:text-gray-300 transition"
        on:click={() => open = false}
      >
        {labels[item.name]}
      </a>
    {/each}
  </div>
{/if}
<main class="container-layout">
  <slot />
</main>

<style>
  @keyframes slide-down {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-down {
    animation: slide-down 0.2s ease-out;
  }
</style>
