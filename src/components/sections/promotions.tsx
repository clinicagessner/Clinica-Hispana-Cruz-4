"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import * as Dialog from "@radix-ui/react-dialog";
import Autoplay from "embla-carousel-autoplay";
import {
  Phone,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Tag,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PROMOS } from "@/lib/promotions";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Promotions() {
  const t = useTranslations("promotions");
  const locale = useLocale();
  const isEn = locale === "en";
  const text = (es: string, en?: string) => (isEn ? en ?? es : es);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const active = isOpen ? PROMOS[openIndex] : null;

  const go = (dir: number) =>
    setOpenIndex((i) =>
      i === null ? i : (i + dir + PROMOS.length) % PROMOS.length
    );

  // Teclado ←/→ para navegar el lightbox (autocontenido: depende solo de isOpen)
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      const n = PROMOS.length;
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + n) % n));
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // ===== Carrusel (embla / shadcn) =====
  const autoplayRef = useRef<ReturnType<typeof Autoplay> | null>(null);
  if (!autoplayRef.current) {
    autoplayRef.current = Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    });
  }

  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const movedRef = useRef(false);

  // Dots: índice activo y lista de snaps
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    const onReInit = () => {
      setSnaps(api.scrollSnapList());
      onSelect();
    };
    onReInit();
    api.on("select", onSelect);
    api.on("reInit", onReInit);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onReInit);
    };
  }, [api]);

  // Respeta prefers-reduced-motion: pausa el autoplay
  useEffect(() => {
    if (!api) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ap = api.plugins().autoplay as
      | { play: () => void; stop: () => void }
      | undefined;
    const sync = () => {
      if (!ap) return;
      if (mq.matches) ap.stop();
      else ap.play();
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [api]);

  // Distingue arrastre de clic: si el puntero se movió, no abrimos el lightbox
  useEffect(() => {
    if (!api) return;
    const node = api.rootNode();
    let pressed = false;
    let sx = 0;
    let sy = 0;
    const down = (e: PointerEvent) => {
      pressed = true;
      sx = e.clientX;
      sy = e.clientY;
      movedRef.current = false;
    };
    const move = (e: PointerEvent) => {
      if (pressed && (Math.abs(e.clientX - sx) > 8 || Math.abs(e.clientY - sy) > 8))
        movedRef.current = true;
    };
    const up = () => {
      pressed = false;
    };
    node.addEventListener("pointerdown", down);
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerup", up);
    node.addEventListener("pointercancel", up);
    return () => {
      node.removeEventListener("pointerdown", down);
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerup", up);
      node.removeEventListener("pointercancel", up);
    };
  }, [api]);

  if (PROMOS.length === 0) return null;

  return (
    <section
      id="promotions"
      aria-labelledby="promotions-heading"
      className="relative overflow-hidden bg-cyan-warm py-14 md:py-20"
    >
      {/* glows decorativos de marca */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-20 size-96 rounded-full bg-red-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-yellow-accent/15 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-accent">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {t("eyebrow")}
          </span>
          <h2
            id="promotions-heading"
            className="mt-4 text-3xl md:text-4xl font-heading font-bold text-slate-dark"
          >
            {t("title")}
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-primary">
            {t("subtitle")}
          </p>
        </div>

        {/* Carrusel de promociones */}
        <Carousel
          setApi={setApi}
          plugins={autoplayRef.current ? [autoplayRef.current] : []}
          opts={{ loop: true, align: "start" }}
          className="px-1 sm:px-0"
        >
          <CarouselContent className="-ml-4">
            {PROMOS.map((promo, i) => (
              <CarouselItem
                key={promo.id}
                className="basis-[80%] pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (!movedRef.current) setOpenIndex(i);
                  }}
                  aria-label={`${text(promo.title, promo.titleEn)} — ${t("viewLabel")}`}
                  className="group relative block aspect-4/5 w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-blue-dark/5 transition-shadow duration-500 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-accent"
                >
                  <Image
                    src={promo.image}
                    alt={text(promo.alt, promo.altEn)}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 24vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay al hover/focus */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-deep/90 via-blue-deep/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

                  {/* Lupa central */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-12 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-sm opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100">
                      <ZoomIn className="size-6" aria-hidden="true" />
                    </span>
                  </span>

                  {/* Título + "ver promoción" */}
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-left translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <h3 className="text-sm font-heading font-bold text-white leading-tight line-clamp-2">
                      {text(promo.title, promo.titleEn)}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-yellow-accent">
                      {t("viewLabel")}
                      <ChevronRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 z-10 flex size-10 cursor-pointer border-none bg-white text-blue-deep shadow-lg ring-1 ring-blue-dark/10 hover:bg-blue-primary hover:text-white disabled:cursor-default disabled:opacity-40 md:left-3" />
          <CarouselNext className="right-2 z-10 flex size-10 cursor-pointer border-none bg-white text-blue-deep shadow-lg ring-1 ring-blue-dark/10 hover:bg-blue-primary hover:text-white disabled:cursor-default disabled:opacity-40 md:right-3" />
        </Carousel>

        {/* Dots */}
        {snaps.length > 1 && (
          <div className="mt-7 flex items-center justify-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => api?.scrollTo(i)}
                aria-label={`${t("goToSlide")} ${i + 1}`}
                aria-current={selected === i}
                className={cn(
                  "h-2 cursor-pointer rounded-full transition-all",
                  selected === i
                    ? "w-6 bg-red-accent"
                    : "w-2 bg-blue-dark/20 hover:bg-blue-dark/40"
                )}
              />
            ))}
          </div>
        )}

        {/* Hint de swipe en móvil */}
        <p className="mt-3 text-center text-xs text-slate-muted sm:hidden">
          {t("swipeHint")}
        </p>
      </div>

      {/* ============ Lightbox ============ */}
      <Dialog.Root
        open={isOpen}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-blue-deep/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95">
            {active && (
              <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
                {/* Cerrar */}
                <Dialog.Close
                  aria-label={t("close")}
                  className="absolute right-3 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-blue-deep/60 text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-blue-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="size-5" aria-hidden="true" />
                </Dialog.Close>

                {/* Imagen grande (completa) */}
                <div className="relative h-[55vh] sm:h-[60vh] w-full bg-cyan-bg">
                  <Image
                    src={active.image}
                    alt={text(active.alt, active.altEn)}
                    fill
                    sizes="(max-width: 768px) 95vw, 768px"
                    className="object-contain"
                    priority
                  />

                  {/* Flechas navegación */}
                  {PROMOS.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label={t("prev")}
                        className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-blue-deep shadow-md ring-1 ring-blue-dark/10 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-accent"
                      >
                        <ChevronLeft className="size-5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label={t("next")}
                        className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-blue-deep shadow-md ring-1 ring-blue-dark/10 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-accent"
                      >
                        <ChevronRight className="size-5" aria-hidden="true" />
                      </button>
                    </>
                  )}
                </div>

                {/* Detalle + CTA */}
                <div className="flex flex-col gap-3 border-t border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <Dialog.Title className="text-lg font-heading font-bold text-slate-dark">
                      {text(active.title, active.titleEn)}
                    </Dialog.Title>
                    <Dialog.Description className="mt-1 text-sm text-slate-primary">
                      {active.description
                        ? text(active.description, active.descriptionEn)
                        : t("dialogHint")}
                    </Dialog.Description>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="bg-red-accent hover:bg-red-accent-dark text-white gap-2 shadow-lg shadow-red-accent/30"
                    >
                      <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        aria-label={`${t("callCta")} — ${CONTACT_INFO.phoneFormatted}`}
                      >
                        <Phone className="size-5" aria-hidden="true" />
                        {t("callCta")}
                      </a>
                    </Button>
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
                  </div>
                </div>

                {/* contador */}
                {PROMOS.length > 1 && (
                  <div className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-blue-deep/60 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                    <Tag className="size-3.5" aria-hidden="true" />
                    {(openIndex ?? 0) + 1} / {PROMOS.length}
                  </div>
                )}
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
