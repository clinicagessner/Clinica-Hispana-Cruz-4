"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { GoogleReview } from "@/lib/google-places";

interface TestimonialsCarouselProps {
  reviews: GoogleReview[];
}

function getInitial(name: string): string {
  const trimmed = name.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : "?";
}

/** Logo "G" de Google en sus 4 colores — marca de confianza en cada reseña. */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

export function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Edge fades — sugieren más reseñas a los lados (solo desktop) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-1 hidden w-12 bg-linear-to-r from-cyan-bg to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-1 hidden w-12 bg-linear-to-l from-cyan-bg to-transparent md:block" />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-5 py-2">
          {reviews.map((review) => (
            <div
              key={`${review.author_name}-${review.time}`}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-5"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-blue-dark/5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-blue-primary/20">
                {/* Acento superior que aparece en hover */}
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-blue-primary to-red-accent transition-transform duration-300 group-hover:scale-x-100" />

                {/* Comilla decorativa */}
                <Quote
                  className="absolute -right-2 -top-1 size-20 rotate-180 fill-cyan-bg text-cyan-bg"
                  aria-hidden="true"
                />

                {/* Header: estrellas + logo Google */}
                <div className="relative mb-4 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < review.rating
                            ? "fill-yellow-accent text-yellow-accent"
                            : "fill-slate-light text-slate-light"
                        }`}
                      />
                    ))}
                  </div>
                  <GoogleG className="size-5 shrink-0 opacity-90" />
                </div>

                {/* Quote */}
                <p className="relative flex-1 text-[15px] leading-relaxed text-slate-primary line-clamp-5">
                  {review.text}
                </p>

                {/* Author */}
                <div className="relative mt-6 flex items-center gap-3 border-t border-cyan-bg-alt pt-4">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-linear-to-br from-blue-primary to-blue-dark ring-2 ring-white shadow-sm">
                    {review.profile_photo_url &&
                    !review.profile_photo_url.endsWith("default.webp") ? (
                      <Image
                        src={review.profile_photo_url}
                        alt={`Foto de ${review.author_name}`}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex size-full items-center justify-center text-base font-bold text-white"
                      >
                        {getInitial(review.author_name)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="truncate text-sm font-semibold text-slate-dark">
                        {review.author_name}
                      </p>
                      <BadgeCheck
                        className="size-4 shrink-0 text-blue-primary"
                        aria-label="Reseña verificada"
                      />
                    </div>
                    <p className="text-xs text-slate-muted">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Nav buttons */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-primary shadow-lg ring-1 ring-blue-dark/5 transition-all duration-300 hover:scale-110 hover:bg-blue-primary hover:text-white md:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Siguiente"
        className="absolute right-0 top-1/2 z-10 hidden size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-primary shadow-lg ring-1 ring-blue-dark/5 transition-all duration-300 hover:scale-110 hover:bg-blue-primary hover:text-white md:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Ir a reseña ${index + 1}`}
            className="group flex items-center justify-center p-2"
          >
            <span
              className={`block size-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-6 bg-blue-primary"
                  : "bg-cyan-bg-alt group-hover:bg-blue-primary/50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
