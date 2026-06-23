"use client";

import { useEffect } from "react";

// Orden de las secciones del home. El primero se trata como "tope":
// al estar en él se limpia el hash para dejar la URL base.
const DEFAULT_SECTION_IDS = [
  "home",
  "promotions",
  "services",
  "chronic-care",
  "testimonials",
  "faq",
  "location",
  "blog",
  "contact",
] as const;

type Props = {
  /** IDs de sección a observar, en orden de aparición. */
  ids?: readonly string[];
};

/**
 * Actualiza el hash de la URL según la sección visible al hacer scroll.
 * Usa history.replaceState (no Router) para no provocar navegación ni saltos,
 * y no contaminar el historial del navegador.
 */
export function ScrollSpy({ ids = DEFAULT_SECTION_IDS }: Props) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const topId = ids[0];

    const applyHash = (id: string) => {
      const targetHash = id === topId ? "" : `#${id}`;
      if (window.location.hash === targetHash) return;
      const base = window.location.pathname + window.location.search;
      window.history.replaceState(window.history.state, "", base + targetHash);
    };

    // La raíz del observer es una línea fina en el centro vertical del viewport:
    // la sección que cruza esa línea es la "activa".
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.find((e) => e.isIntersecting);
        if (active) applyHash(active.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return null;
}
