<script>
  import { lang, changeLang } from '$lib/stores/langStore.js';
  import i_usa from '$lib/assets/icons/usa.png';
  import i_mex from '$lib/assets/icons/mex.png';
  let open = false;

  function selectLang(l) {
    changeLang(l);
    open = false;   // 🔥 Cierra el dialog después de seleccionar
  }

    /** 🔥 Detectar clic fuera del dialog */
  function handleClickOutside(event) {
    if (open && dialogRef && !dialogRef.contains(event.target)) {
      open = false;
    }
  }

  
</script>

<!-- Botón flotante -->
<div
  class="button-floating bottom-4 z-[9999]"
  on:click={() => (open = !open)}
  title="Change language"
>
  {#if $lang === 'EN'}
    <img src={i_usa} alt="EN" class="w-6 h-6" />
  {:else}
    <img src={i_mex} alt="ES" class="w-6 h-6" />
  {/if}
</div>

<!-- Tooltip flotante -->
{#if open}
  <div class="droplist-floating bottom-16 z-[9999]">
    <label class="flex items-center gap-1 mb-2">
      <input
        type="radio"
        name="lang"
        value="EN"
        bind:group={$lang}
        class="accent-blue-600"
        on:change={() => selectLang('EN')}
      />
      <img src={i_usa} alt="usa" class="w-5 h-5" />
      <span>EN</span>
    </label>

    <label class="flex items-center gap-1">
      <input
        type="radio"
        name="lang"
        value="ES"
        bind:group={$lang}
        class="accent-blue-600"
        on:change={() => selectLang('ES')}
      />
      <img src={i_mex} alt="mex" class="w-5 h-5" />
      <span>ES</span>
    </label>

  </div>
{/if}
