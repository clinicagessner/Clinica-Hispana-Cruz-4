// Fecha de la última revisión de contenido de cada servicio. La usan el
// sitemap (lastmod) y la página del servicio (caja de revisión médica y
// MedicalWebPage.lastReviewed), para que las tres fechas no diverjan.
// Última edición de contenido del catálogo de servicios; las excepciones van
// en SERVICE_DATES con su propia fecha.
export const SERVICES_LAST_REVIEWED = "2026-08-25";
export const SERVICE_DATES: Record<string, string> = {
  "sueros-vitaminados": "2026-09-30", // B3: texto propio
  "unas-encarnadas": "2026-09-30", // B3: texto propio
  "drenaje-abscesos": "2026-09-30", // B3: texto propio
  "cirugias-menores": "2026-09-30", // B3: texto propio
  "curacion-heridas": "2026-09-30", // B3: texto propio
  "suturas-heridas": "2026-09-30", // B3: texto propio
  "enfermedades-respiratorias": "2026-09-30", // B3: texto propio
  "salud-hombre": "2026-09-30", // B3: texto propio
  "extraccion-implantes": "2026-09-30", // B3: texto propio
  "anticonceptivos": "2026-09-30", // B3: texto propio
  "prueba-embarazo": "2026-09-30", // B3: texto propio
  "enfermedades-transmision-sexual": "2026-09-30", // B3: texto propio
  "prueba-tuberculosis": "2026-09-30", // B3: texto propio
  "prueba-strep": "2026-09-30", // B3: texto propio
  "infecciones-urinarias": "2026-09-30", // B3: texto propio
  "examenes-sangre": "2026-09-30", // B3: texto propio
  "ultrasonido": "2026-09-30", // B3: texto propio
  "condiciones-cronicas": "2026-09-30", // B3: texto propio (Ads, aprobado)
  "ginecologia": "2026-09-30", // B3: texto propio (Ads, aprobado)
  "electrocardiograma": "2026-09-30", // B3: texto propio
  "vacunas": "2026-09-30", // B3: texto propio
  "examen-alcohol-drogas": "2026-09-30", // B3: texto propio
  "examen-heces": "2026-09-30", // B3: texto propio
  "examen-dot": "2026-09-30", // B3: texto propio
  "examenes-inmigracion": "2026-09-30", // B3: texto propio
  "alergias": "2026-09-30", // B3: texto propio
  "tiroides": "2026-09-30", // B3: texto propio
  "examen-fisico-escolar": "2026-09-30", // B3: texto propio
  farmacia: "2026-09-30", // B3: texto propio (entrega de lo indicado en consulta, §9)
};

export function serviceLastReviewed(slug: string): string {
  return SERVICE_DATES[slug] ?? SERVICES_LAST_REVIEWED;
}
