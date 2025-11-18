import en from "$lib/i18n/EN.json";
import es from "$lib/i18n/ES.json";

export function getLabels(lang: string) {
    if (lang === "ES") return es;
    return en;
}