export async function handle({ event, resolve }) {
    // Leer el idioma desde la cookie
    const lang = event.cookies.get("lang") ?? "ES";

    // Guardarlo en locals para usarlo en load() del servidor
    event.locals.lang = lang;

    return resolve(event);
}