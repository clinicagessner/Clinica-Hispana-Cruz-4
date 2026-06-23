"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarOff,
  Clock,
  CreditCard,
  FlaskConical,
  Heart,
  Languages,
  Sparkles,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { HeroSearch } from "@/components/sections/hero-search";
import { SERVICES } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";

// Hero tile + 2 image accents. The two big category tiles below are data-driven.
// Keep exactly 2 accents so the bento stays a full 12-cell rectangle (no orphan
// tile on the 4-col desktop grid or the 2-col mobile stack).
const HERO_SLUG = "condiciones-cronicas";
const ACCENT_SLUGS = ["ginecologia", "salud-hombre"];

// Map the lucide icon name carried in each Service to a real component (subset
// used by this section; everything else falls back to Stethoscope).
const ICONS: Record<string, LucideIcon> = {
  Activity,
  Heart,
  Stethoscope,
  Syringe,
  Flask: FlaskConical,
};

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  const localize = (slug: string) => {
    const s = SERVICES.find((x) => x.slug === slug);
    return s ? getLocalizedService(s, locale) : null;
  };

  const hero = localize(HERO_SLUG);
  const accents = ACCENT_SLUGS.map(localize).filter(Boolean) as NonNullable<
    ReturnType<typeof localize>
  >[];

  // Counts per category drive the two "explore by category" tiles.
  const count = (cat: string) => SERVICES.filter((s) => s.category === cat).length;
  const labTotal = count("laboratorio");
  const treatTotal = count("tratamientos");
  const total = SERVICES.length;

  if (!hero) return null;

  const HeroIcon = ICONS[hero.icon] ?? Stethoscope;

  const trust = [
    { icon: CreditCard, label: t("trustNoInsurance") },
    { icon: CalendarOff, label: t("trustNoAppointment") },
    { icon: Languages, label: t("trustSpanish") },
    { icon: Clock, label: t("trustHours") },
  ];

  return (
    <section id="services" className="bg-cyan-bg py-14 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {t("bentoEyebrow")}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-slate-dark">
            {t("title")}
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-primary">
            {t("subtitle")}
          </p>
        </div>

        {/* Service search — moved here from the hero */}
        <div className="mb-10 md:mb-12">
          <HeroSearch />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[182px] gap-4 max-w-6xl mx-auto">
          {/* ── Hero tile (2x2) ── */}
          <Link
            href={`/services/${hero.slug}`}
            className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-lg ring-1 ring-blue-dark/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[320px] md:min-h-0"
          >
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-dark via-blue-dark/45 to-blue-dark/10" />

            {/* glass icon badge */}
            <div className="absolute top-5 left-5 flex size-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/30">
              <HeroIcon className="size-6 text-white" aria-hidden="true" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight max-w-md">
                {hero.title}
              </h3>
              <p className="mt-2.5 text-sm md:text-base text-white/85 line-clamp-2 max-w-md">
                {hero.description}
              </p>
              {hero.features?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {hero.features.slice(0, 2).map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm ring-1 ring-white/20"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              ) : null}
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-accent transition-all group-hover:gap-3">
                {t("learnMore")}
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* ── Category tile: Laboratorio (1x2) ── */}
          <Link
            href={{ pathname: "/services", query: { cat: "laboratorio" } }}
            className="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl bg-linear-to-br from-blue-primary to-blue-dark p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <FlaskConical
              className="absolute -bottom-6 -right-5 size-40 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <FlaskConical className="size-5 text-white" aria-hidden="true" />
              </div>
              <div className="mt-auto">
                <span className="text-4xl font-heading font-bold text-yellow-accent">
                  {labTotal}
                </span>
                <h3 className="mt-1 text-lg font-heading font-bold text-white leading-snug">
                  {t("categoryLaboratorio")}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 transition-all group-hover:gap-2.5">
                  {t("bentoExploreCategory")}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>

          {/* ── Accent image tile 1 (1x1) ── */}
          {accents[0] ? (
            <AccentTile
              service={accents[0]}
              icon={ICONS[accents[0].icon] ?? Heart}
              learnMore={t("learnMore")}
            />
          ) : null}

          {/* ── Accent image tile 2 (1x1) ── */}
          {accents[1] ? (
            <AccentTile
              service={accents[1]}
              icon={ICONS[accents[1].icon] ?? Stethoscope}
              learnMore={t("learnMore")}
            />
          ) : null}

          {/* ── Trust strip (2x1) ── */}
          <div className="col-span-2 row-span-1 rounded-3xl bg-white p-5 shadow-lg ring-1 ring-blue-dark/5">
            <div className="grid h-full grid-cols-2 sm:grid-cols-4 gap-3">
              {trust.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-cyan-bg px-2 py-3 text-center"
                >
                  <Icon className="size-5 text-red-accent" aria-hidden="true" />
                  <span className="text-xs font-semibold leading-tight text-slate-dark">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Category tile: Tratamientos (1x1) ── */}
          <Link
            href={{ pathname: "/services", query: { cat: "tratamientos" } }}
            className="group relative col-span-1 row-span-1 overflow-hidden rounded-3xl bg-linear-to-br from-red-accent to-red-accent-dark p-5 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <Syringe
              className="absolute -bottom-4 -right-3 size-28 text-white/10 transition-transform duration-700 group-hover:rotate-12"
              aria-hidden="true"
            />
            <div className="relative flex h-full flex-col">
              <span className="text-3xl font-heading font-bold text-white">
                {treatTotal}
              </span>
              <h3 className="mt-0.5 text-base font-heading font-bold text-white leading-snug">
                {t("categoryTratamientos")}
              </h3>
              <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-white/85 transition-all group-hover:gap-2.5">
                {t("bentoExploreCategory")}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* ── CTA tile (1x1) ── */}
          <Link
            href="/services"
            className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl bg-yellow-accent p-5 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-dark/10">
              <ArrowRight
                className="size-5 text-blue-dark transition-transform duration-500 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
            <div>
              <span className="text-3xl font-heading font-bold text-blue-dark">
                {total}
              </span>
              <p className="text-sm font-semibold leading-snug text-blue-dark/80">
                {t("bentoExploreCta", { count: total })}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AccentTile({
  service,
  icon: Icon,
  learnMore,
}: {
  service: NonNullable<ReturnType<typeof getLocalizedService>>;
  icon: LucideIcon;
  learnMore: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative col-span-1 row-span-1 overflow-hidden rounded-3xl shadow-lg ring-1 ring-blue-dark/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[170px]"
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-blue-dark/90 via-blue-dark/35 to-transparent" />
      <div className="absolute top-3.5 left-3.5 flex size-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md ring-1 ring-white/30">
        <Icon className="size-4.5 text-white" aria-hidden="true" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-sm font-heading font-bold text-white leading-tight line-clamp-2">
          {service.shortTitle || service.title}
        </h3>
        <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-yellow-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
          {learnMore}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
