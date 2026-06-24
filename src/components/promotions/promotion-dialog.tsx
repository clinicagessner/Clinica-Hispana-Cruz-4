"use client";

import Image from "next/image";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useTranslations, useLocale } from "next-intl";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Phone,
  MapPin,
  PencilLine,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import type { Promotion } from "@/lib/promotions";

type PromotionDialogProps = {
  promos: Promotion[];
  /** Índice de la promoción abierta, o null si el modal está cerrado. */
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
  /** Ancla del formulario en la página que monta el modal (#contact, #lead-form…). */
  formHref: string;
};

/**
 * Modal de detalle de una promoción — una sola columna scrollable en todos los
 * tamaños (imagen del flyer arriba sin recorte, luego texto y CTAs). Reutilizado
 * por la sección de la home y por la página /promociones. Cerrar SOLO cierra el
 * modal; nunca navega. El CTA de formulario es la única acción que navega (ancla
 * en la misma página) y de paso cierra el modal.
 */
export function PromotionDialog({
  promos,
  openIndex,
  setOpenIndex,
  formHref,
}: PromotionDialogProps) {
  const t = useTranslations("promotions");
  const locale = useLocale();
  const isEn = locale === "en";
  const text = (es: string, en?: string) => (isEn ? en ?? es : es);

  const isOpen = openIndex !== null;
  const active = isOpen ? promos[openIndex] : null;
  const many = promos.length > 1;

  // Navega entre promociones con flechas / teclado (wraparound).
  const go = (dir: number) =>
    setOpenIndex((i) =>
      i === null ? i : (i + dir + promos.length) % promos.length
    );

  // Teclado ←/→ para navegar (autocontenido: depende solo de isOpen y del total).
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      const n = promos.length;
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + n) % n));
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, promos.length, setOpenIndex]);

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => !open && setOpenIndex(null)}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-blue-deep/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-md -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95">
          {active && (
            <div className="relative flex max-h-[90vh] flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl">
              {/* Cerrar — solo cierra, nunca navega */}
              <Dialog.Close
                aria-label={t("close")}
                className="absolute right-3 top-3 z-20 flex size-9 cursor-pointer items-center justify-center rounded-full bg-blue-deep/60 text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-blue-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="size-5" aria-hidden="true" />
              </Dialog.Close>

              {/* Flyer completo (4:5, sin recorte) */}
              <div className="relative aspect-4/5 w-full shrink-0 bg-cyan-bg">
                <Image
                  src={active.image}
                  alt={text(active.alt, active.altEn)}
                  fill
                  sizes="(max-width: 768px) 95vw, 448px"
                  className="object-cover"
                  priority
                />

                {/* Flechas de navegación */}
                {many && (
                  <>
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label={t("prev")}
                      className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-blue-deep shadow-md ring-1 ring-blue-dark/10 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-accent"
                    >
                      <ChevronLeft className="size-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label={t("next")}
                      className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-blue-deep shadow-md ring-1 ring-blue-dark/10 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-accent"
                    >
                      <ChevronRight className="size-5" aria-hidden="true" />
                    </button>

                    {/* Contador */}
                    <div className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-blue-deep/60 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                      <Tag className="size-3.5" aria-hidden="true" />
                      {(openIndex ?? 0) + 1} / {promos.length}
                    </div>
                  </>
                )}
              </div>

              {/* Detalle */}
              <div className="flex flex-col gap-4 p-5 sm:p-6">
                {/* Título */}
                <Dialog.Title className="text-xl font-heading font-bold leading-tight text-slate-dark sm:text-2xl">
                  {text(active.title, active.titleEn)}
                </Dialog.Title>

                {/* Precio */}
                {active.price && (
                  <p className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-slate-muted">
                      {t("priceLabel")}
                    </span>
                    <span className="text-4xl font-heading font-bold text-blue-primary">
                      {active.price}
                    </span>
                  </p>
                )}

                {/* Descripción */}
                <Dialog.Description className="text-sm leading-relaxed text-slate-primary sm:text-base">
                  {active.description
                    ? text(active.description, active.descriptionEn)
                    : t("dialogHint")}
                </Dialog.Description>

                {/* Incluye */}
                {active.includes && active.includes.length > 0 && (
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-accent">
                      {t("includesLabel")}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {(isEn && active.includesEn
                        ? active.includesEn
                        : active.includes
                      ).map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-primary/10">
                            <Check
                              className="size-3.5 text-blue-primary"
                              aria-hidden="true"
                            />
                          </span>
                          <span className="text-sm font-medium text-slate-dark">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTAs */}
                <div className="mt-1 flex flex-col gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-red-accent hover:bg-red-accent-dark text-white gap-2 shadow-lg shadow-red-accent/30"
                  >
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      aria-label={`${t("callCta")} — ${CONTACT_INFO.phoneFormatted}`}
                    >
                      <Phone className="size-5" aria-hidden="true" />
                      {t("callCta")} · {CONTACT_INFO.phoneFormatted}
                    </a>
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white gap-2 bg-white"
                    >
                      <a
                        href={CONTACT_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("directionsCta")} — ${CONTACT_INFO.address}, ${CONTACT_INFO.city} ${CONTACT_INFO.state}`}
                      >
                        <MapPin className="size-5" aria-hidden="true" />
                        {t("directionsCta")}
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="ghost"
                      className="text-blue-primary hover:bg-blue-primary/10 gap-2"
                    >
                      <a
                        href={formHref}
                        onClick={() => setOpenIndex(null)}
                      >
                        <PencilLine className="size-5" aria-hidden="true" />
                        {t("formCta")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
