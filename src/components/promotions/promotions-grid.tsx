"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { PromotionDialog } from "@/components/promotions/promotion-dialog";
import { PROMOS } from "@/lib/promotions";

/**
 * Grid de cards compactas de promociones para la página /promociones. Cada card
 * abre el mismo PromotionDialog (formHref = #lead-form). Soporta deep-link: si se
 * llega a /promociones#<slug>, abre ese dialog y limpia el hash de inmediato para
 * que cerrar no reabra ni "redirija".
 */
export function PromotionsGrid() {
  const t = useTranslations("promotions");
  const locale = useLocale();
  const isEn = locale === "en";
  const text = (es: string, en?: string) => (isEn ? en ?? es : es);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Deep-link #<slug>: abre el dialog y limpia el hash ANTES de abrir.
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const idx = PROMOS.findIndex((p) => p.id === hash);
    if (idx === -1) return;
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
    // Lectura única del deep-link al montar (sincroniza con la URL, un sistema
    // externo). El linter del React Compiler avisa de setState en efecto; aquí
    // es intencional y corre una sola vez tras hidratar.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenIndex(idx);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROMOS.map((promo, i) => (
          <button
            key={promo.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-lg ring-1 ring-blue-dark/5 transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-accent"
          >
            {/* Flyer (thumbnail 4:5, ya horneado, sin recorte) */}
            <div className="relative aspect-4/5 w-full shrink-0 bg-cyan-bg">
              <Image
                src={promo.image}
                alt={text(promo.alt, promo.altEn)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Texto */}
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-heading text-base font-bold leading-tight text-slate-dark">
                {text(promo.title, promo.titleEn)}
              </h3>

              {promo.price && (
                <p className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-xs font-medium text-slate-muted">
                    {t("priceLabel")}
                  </span>
                  <span className="text-2xl font-heading font-bold text-blue-primary">
                    {promo.price}
                  </span>
                </p>
              )}

              {/* Resumen — line-clamp solo visual; el texto completo queda en el DOM (indexable) */}
              {promo.description && (
                <p className="mt-2 line-clamp-2 text-sm text-slate-primary">
                  {text(promo.description, promo.descriptionEn)}
                </p>
              )}

              {/* CTA */}
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-accent transition-colors group-hover:text-red-accent-dark">
                {t("viewDetail")}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </button>
        ))}
      </div>

      <PromotionDialog
        promos={PROMOS}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
        formHref="#lead-form"
      />
    </>
  );
}
