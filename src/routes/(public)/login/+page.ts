import type { PageLoad } from './$types';
import { getLabels } from '$lib/i18n/getLabels';
import { lang } from '$lib/stores/langStore.js';
import { get } from 'svelte/store';

export const load = (() => {
    const currentLang = get(lang);
    const tLabels = getLabels(currentLang);

    return { lang, tLabels };
}) satisfies PageLoad;
