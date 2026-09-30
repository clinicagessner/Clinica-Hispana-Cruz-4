import { SITE_CONFIG } from "@/lib/constants";

export const DESCRIPTION_MAX = 155;

/** Corta en el último límite de palabra que quepa, sin dejar puntuación colgando. */
function trimToWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max + 1);
  const at = cut.lastIndexOf(" ");
  return cut.slice(0, at > 0 ? at : max).replace(/[\s,.;:–—-]+$/, "");
}

/** Descripción dentro de 155. Es una red de seguridad, no una excusa para no escribirlas. */
export function seoDescription(text: string, max: number = DESCRIPTION_MAX): string {
  return trimToWord(text.trim(), max);
}

/**
 * Imagen OG por defecto. El `openGraph` de una página **reemplaza entero** al
 * del layout: si la página no pone imagen, se queda sin ninguna.
 */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: SITE_CONFIG.name,
};
