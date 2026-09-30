import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  alternates?: { languages: Record<string, string> };
};

// Fecha de la última edición **de contenido** de cada página, sacada del
// historial de git. Se actualiza en el mismo commit que cambia el contenido.
// Un `lastmod` con la fecha del build miente en cada despliegue y Google deja
// de fiarse de él justo cuando más falta hace, al reescribir el contenido.
const PAGE_DATES: Record<string, string> = {
  "": "2026-09-02", // promociones de la home
  "/services": "2026-08-25",
  "/promociones": "2026-09-02",
  "/walk-in": "2026-07-11",
  "/blog": "2026-08-25",
  "/privacy": "2026-07-11",
};

// Última edición de contenido del catálogo de servicios; las excepciones van
// en SERVICE_DATES con su propia fecha.
const SERVICES_LAST_REVIEWED = "2026-08-25";
const SERVICE_DATES: Record<string, string> = {
  "examen-heces": "2026-09-30", // B3: texto propio
  "examen-dot": "2026-09-30", // B3: texto propio
  "examenes-inmigracion": "2026-09-30", // B3: texto propio
  "alergias": "2026-09-30", // B3: texto propio
  "tiroides": "2026-09-30", // B3: texto propio
  "examen-fisico-escolar": "2026-09-30", // B3: texto propio
  farmacia: "2026-09-29", // entrega de lo indicado en la consulta (§9)
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;

  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  // Una <url> por idioma, cada una con sus alternates recíprocos.
  const entry = (path: string, lastModified: Date): SitemapEntry[] =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${path}`,
      lastModified,
      alternates: createAlternates(path),
    }));

  const staticRoutes = Object.entries(PAGE_DATES).flatMap(([path, date]) =>
    entry(path, new Date(date))
  );

  const serviceRoutes = SERVICES.flatMap((service) =>
    entry(
      `/services/${service.slug}`,
      new Date(SERVICE_DATES[service.slug] ?? SERVICES_LAST_REVIEWED)
    )
  );

  const blogRoutes = getBlogPosts("es").flatMap((post) =>
    entry(`/blog/${post.slug}`, new Date(post.dateModified ?? post.date))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
