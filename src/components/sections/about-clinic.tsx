import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";

// Bloque de entidad (§12 B1 del playbook): define la clínica en 130-170
// palabras con datos verificables y enlaza a los servicios principales. Es el
// texto que citan las IAs y el que, recortado, sirve de descripción del GBP.
const LINKS: Record<string, string> = {
  chronic: "/services/condiciones-cronicas",
  women: "/services/ginecologia",
  men: "/services/salud-hombre",
  school: "/services/examen-fisico-escolar",
  dot: "/services/examen-dot",
  immigration: "/services/examenes-inmigracion",
  lab: "/services/examenes-sangre",
  ultrasound: "/services/ultrasonido",
  ekg: "/services/electrocardiograma",
  pharmacy: "/services/farmacia",
  welcome: "/blog/bienvenidos-clinica-hispana-cruz-4",
};

export async function AboutClinic() {
  const t = await getTranslations("about");

  const tags = Object.fromEntries(
    Object.entries(LINKS).map(([tag, href]) => [
      tag,
      (chunks: ReactNode) => (
        <Link
          href={href}
          className="font-semibold text-blue-primary underline decoration-blue-primary/30 underline-offset-4 hover:decoration-blue-primary"
        >
          {chunks}
        </Link>
      ),
    ])
  );

  return (
    <section id="about" className="py-14 md:py-20 bg-cyan-warm">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-primary">
            <MapPin className="size-3.5" aria-hidden="true" />
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-slate-dark">
            {t("title")}
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-primary">
            {t.rich("body", tags)}
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-primary">
            {t.rich("body2", tags)}
          </p>
        </div>
      </div>
    </section>
  );
}
