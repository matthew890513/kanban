// src/lib/stores/langStore.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialLang = browser ? localStorage.getItem('lang') || 'ES' : 'ES';

export const lang = writable(initialLang);

export function changeLang(newLang) {
  if (browser) {
    localStorage.setItem('lang', newLang);

     // Guardar en cookie para SSR
    document.cookie = `lang=${newLang}; path=/`;
    location.reload(); // fuerza que el servidor lea la nueva cookie
  }
  lang.set(newLang);
}