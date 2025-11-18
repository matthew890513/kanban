import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultTheme = browser ? localStorage.getItem('theme') || 'light' : 'light';
export const theme = writable(defaultTheme);

function applyTheme(t) {
  if (!browser) return;

  const html = document.documentElement;
  html.classList.remove('dark'); // remover siempre

  if (t === 'dark') html.classList.add('dark');
  else if (t === 'system') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
    }
  }
}

export function setTheme(t) {
  theme.set(t);
  if (browser) localStorage.setItem('theme', t);
  applyTheme(t);
}

// Aplicar tema inicial al cargar
if (browser) applyTheme(defaultTheme);
